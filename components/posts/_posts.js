import _media from "./_media";
import { Box } from "@mui/system";

export default function _posts() {
  return (
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
      <_media />
      <_media />
      <_media />
      <_media />
      <_media />
      <_media />
    </Box>
  );
}
