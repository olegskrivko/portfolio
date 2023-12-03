import { Link as LinkScroll } from "react-scroll";
import { Button } from "@mui/material";

const ScrollToButton = (props) => {
  const { sectionName, children } = props;
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "1rem",
        backgroundColor: "#f7c269",
        color: "#272829",
        fontWeight: 700,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          backgroundColor: "#FFA500",
        },
      }}
    >
      <LinkScroll to={sectionName} smooth={true} duration={500}>
        {children}
      </LinkScroll>
    </Button>
  );
};
export default ScrollToButton;
