import { useParams } from "react-router-dom";
import {
  Typography,
  Chip,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@mui/material";

const PortfolioDetails = ({ portfolioData }) => {
  const { portfolioId } = useParams();

  const selectedPortfolio = portfolioData.find(
    (item) => item.id === parseInt(portfolioId) || item.slug === portfolioId
  );

  if (!selectedPortfolio) {
    return <div>Portfolio item not found</div>;
  }

  const {
    title,
    description,
    technology,
    github,
    demoURL,
    isAvailable,
    image, // Assuming there's an 'image' property in the portfolio data
  } = selectedPortfolio;
  console.log(selectedPortfolio);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" className="section-title" gutterBottom>
          {title}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={image} // Provide the URL or path to the image
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
            {isAvailable && (
              <Button
                variant="contained"
                color="secondary"
                href={demoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Typography style={{ color: "#fff", fontWeight: "300" }}>
          {description}
        </Typography>
        <Typography style={{ color: "#fff", fontWeight: "300" }} gutterBottom>
          Technologies Used:
        </Typography>
        <div>
          {Array.isArray(technology) && technology.length > 0 ? (
            technology.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                // style={{ marginRight: "8px" }}
                sx={{
                  backgroundColor: "#31333B",
                  padding: "0.5rem 0.7rem",
                  borderRadius: "1rem",
                  marginRight: "8px",
                  color: "#f7c269",
                  // minWidth: "200px",
                }}
              />
            ))
          ) : (
            <Typography variant="body2">No technology specified</Typography>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default PortfolioDetails;
