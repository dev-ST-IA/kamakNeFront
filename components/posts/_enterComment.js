import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import {
  useCreateCommentMutation,
  useGetCommentQuery,
} from "../../services/kamakNeApi";
import { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCommentId, setText, setComments } from "../../store/commentSlice";

export default function _enterComment({ PostId }) {
  const dispatch = useDispatch();
  const commentsObj = useSelector((state) => state.comments);
  const comments = commentsObj.comments;
  const text = commentsObj.text;
  const [comment, { data, isError, isLoading, isSuccess, error }] =
    useCreateCommentMutation();

  const handleComment = async () => {
    if (text != "") {
      try {
        const res = await comment({ postId: PostId, comment: text });
        dispatch(setText(""));
        const doc = res.data;
        dispatch(setComments([...new Set([doc, ...comments])]));
      } catch (error) {
        // console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    dispatch(setText(e.target.value));
  };

  return (
    <Box sx={{ margin: "1rem" }}>
      <TextField
        fullWidth
        id="fullWidth"
        placeholder="Enter Your Comment"
        size="small"
        onChange={handleChange}
        value={text}
        onKeyDown={(e) => (e.key === "Enter" ? handleComment(e) : null)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="enter-comment-Btn"
              onClick={handleComment}
              edge="end"
              disabled={text === ""}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}
