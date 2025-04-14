import { CircularProgress, Box } from "@mui/material";

const Fallback = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      bgcolor: "#050505",
    }}
  >
    <CircularProgress sx={{ color: '#4de6a6' }}/>
  </Box>
);

export default Fallback;
