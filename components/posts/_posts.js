import _media from "./_media";
import { Box } from "@mui/system";
import { useGetAllPostsQuery } from "../../services/kamakNeApi";
import { useState, useRef, useCallback, useEffect } from "react";

export default function _posts() {
  const [page, setPage] = useState(0);
  const { data, isError, isLoading, error, isSuccess } = useGetAllPostsQuery({
    Page: page,
  });
  const [posts, setPosts] = useState([]);

  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    if (isSuccess) {
      const postsFetched = data?.docs || [];
      setPosts((prev) => [...new Set([...prev, ...postsFetched])]);
    }
  }, [data, page]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: 1,
          margin: "auto",
          alignItems: "center",
        }}
      >
        {posts.map((post) => (
          <_media {...post} />
        ))}
      </Box>
      <div ref={loader} />
    </>
  );
}
