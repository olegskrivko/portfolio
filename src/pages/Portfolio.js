import React from "react";
import Container from "@mui/material/Container";
import PortfolioCategory from "../components/PortfolioCategory/PortfolioCategory";

const Portfolio = ({ portfolioData }) => {
  return (
    <React.Fragment>
      <Container fixed>
        <h2 className="section-title">Portfolio</h2>
        <PortfolioCategory portfolioData={portfolioData} />
      </Container>
    </React.Fragment>
  );
};

export default Portfolio;
