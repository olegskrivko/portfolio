import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NoMatch = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        color: "#fff", // Text color
      }}
    >
      <Typography variant="h4">Oops! Something went wrong!</Typography>
      <Typography variant="h4">Page not found</Typography>
      <Button
        component={Link}
        to={"/"}
        variant="contained"
        style={{ marginTop: "20px", color: "#fff" }}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default NoMatch;
