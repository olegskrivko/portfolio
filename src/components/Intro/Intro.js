import Typewriter from "typewriter-effect";
import ScrollToButton from "../ScrollToButton/ScrollToButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Intro = (props) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <h1 style={{ color: "#fff", fontSize: "2rem", fontWeight: 400 }}>
        Hi, I am Olegs Krivko
        <span style={{ color: "#f7c269", fontWeight: 400 }}>
          <Typewriter
            options={{
              strings: ["Developer", "Creator", "Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={10} md={8} lg={9}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "start",
              color: "#fff",
              fontWeight: 300,
              margin: "2rem 0",
            }}
          >
            Driven by a passion for frontend development, I am an adaptable
            software engineer with a diverse skill set and a hunger for
            continuous learning. My journey is centered around mastering the art
            of web development, shaping innovative user experiences, and
            building impactful applications.
          </Typography>
        </Grid>
      </Grid>
      <ScrollToButton sectionName={"contact"}>Contact me</ScrollToButton>
    </div>
  );
};

export default Intro;
