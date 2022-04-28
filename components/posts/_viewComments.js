import Typography from "@mui/material/Typography";
import _userComment from "./_userComment";
import { useGetAllCommentsQuery } from "../../services/kamakNeApi";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setComments } from "../../store/commentSlice";

export default function _viewComments({ PostId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const [page, setPage] = useState(1);
  const { data, error, isError, isLoading, isFetching, isSuccess } =
    useGetAllCommentsQuery({ Id: PostId, Page: page });
  const totalPages = data?.totalPages || 1;
  useEffect(() => {
    const fetchedComments = data ? data?.docs : [];
    if (fetchedComments.length > 0) {
      dispatch(setComments([...new Set([...comments, ...fetchedComments])]));
    }
  }, [page, data]);

  useEffect(() => {
    dispatch(setComments([]));
  }, []);

  return (
    <Box
      sx={{
        maxHeight: 300,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {comments.length > 0 &&
        comments?.map((comment) => <_userComment {...comment} />)}
      {totalPages > page && (
        <Button
          variant="text"
          textAlign={"center"}
          fontSize="small"
          onClick={() => setPage((prev) => prev + 1)}
        >
          View More
        </Button>
      )}
    </Box>
  );
}
