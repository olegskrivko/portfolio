import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const SkillCategory = ({ title, skills }) => {
  const imageStyle = {
    // padding: "10px 10px 10px 10px",
    // width: "100%",
    // height: "auto",
    width: "2rem",
    height: "2rem",
    filter: "grayscale(80%)", // Initially desaturated
    transition: "filter 0.3s ease-in-out", // Adding transition effect
  };

  const handleHover = (e) => {
    e.currentTarget.style.filter = "none"; // Remove filter on hover
  };

  const handleLeave = (e) => {
    e.currentTarget.style.filter = "grayscale(80%)"; // Reapply grayscale filter on mouse leave
  };

  return (
    <Grid container spacing={1} style={{ marginBottom: "1rem" }}>
      <Grid item xs={12}>
        <Typography
          variant="body1"
          sx={{
            textAlign: "start",
            color: "#f7c269",
            fontSize: "small",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </Typography>
      </Grid>

      {/* Dynamically generated cards */}
      {skills.map((item, index) => (
        <Grid key={index} item xs={3} sm={3} md={2} lg={1}>
          <Card
            style={{
              backgroundColor: "#31333B",
              // maxWidth: "90px",
              // padding: "-1rem",
              // margin: "-0.1rem",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%", // Ensure the CardContent fills the entire Card height
                paddingBottom: "1rem",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={imageStyle}
                onMouseEnter={handleHover} // Handle hover event
                onMouseLeave={handleLeave} // Handle mouse leave event
              />

              <Typography
                variant="body2"
                style={{
                  marginTop: "0.4rem",
                  fontSize: "small",
                  color: "#fff",
                  fontWeight: "300",
                }}
              >
                {item.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillCategory;
