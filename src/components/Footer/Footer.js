import Container from "@mui/material/Container";

const Footer = (props) => {
  const currentYear = new Date();
  return (
    <footer style={{ marginTop: "3rem" }}>
      <Container fixed>
        <p
          style={{
            color: "#8c8c8c",
            textAlign: "center",
            padding: "1rem 0",
            fontSize: "small",
          }}
        >
          &copy; {currentYear.getFullYear()} Designed & Coded by Olegs Krivko.
          All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
