import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

export default function _enterComment() {
  return (
    <Box sx={{ margin: "1rem" }}>
      <TextField
        fullWidth
        id="fullWidth"
        multiline
        placeholder="Enter Your Comment"
        size="small"
      />
    </Box>
  );
}
