import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

// ({portfolioData})
// or
// portfolioData.map()
const PortfolioCategory = (props) => {
  return (
    <Grid container spacing={3}>
      {props.portfolioData.map((item) => (
        <Grid
          key={item.id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Card
            sx={{
              maxWidth: 345,
              backgroundColor: "#34353A",
              padding: "8px",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: "Roboto",
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  fontFamily: "Roboto",
                  fontWeight: 300,
                }}
              >
                {item.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                color="primary"
                sx={{
                  color: "#f7c269",
                }}
              >
                <Link
                  to={`/portfolio/${item.id}`}
                  style={{
                    color: "#f7c269",
                    textDecoration: "none",
                  }}
                >
                  See more
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PortfolioCategory;
