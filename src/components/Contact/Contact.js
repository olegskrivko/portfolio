import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = (props) => {
  const contactData = [
    {
      id: 1,
      text: "LinkedIn",
      link: "https://linkedin.com/in/olegskrivko",
      icon: LinkedInIcon,
    },
    {
      id: 2,
      text: "Github",
      link: "https://github.com//olegskrivko",
      icon: GitHubIcon,
    },
    {
      id: 3,
      text: "olegs.krivko@gmail.com",
      link: "mailto:olegs.krivko@gmail.com",
      icon: EmailIcon,
    },
    {
      id: 4,
      text: "+371 29771299",
      link: "tel:+37129771299",
      icon: LocalPhoneIcon,
    },
    {
      id: 5,
      text: "Latvia, Riga",
      link: "https://www.google.com/maps/@56.9510767,24.1088039,14z",
      icon: LocationOnIcon,
    },
  ];

  return (
    <Container fixed>
      <Grid container spacing={3}>
        {contactData.map((contact) => (
          <Grid
            key={contact.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={contact.id === 3 ? 3 : 2} // Set different lg value for a specific card (in this example, for card with id 2)
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              "@media (max-width: 600px)": {
                // Adjust the screen size as needed
                justifyContent: "flex-start", // For XS screens, align to flex-start
              },
            }}
          >
            <Card
              sx={{
                backgroundColor: "#31333B",
                padding: "0.5rem 0.7rem",
                borderRadius: "1rem",
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#fff",
                  fontFamily: "Roboto",
                  fontWeight: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {React.createElement(contact.icon, {
                  sx: { marginRight: "8px", color: "#f7c269" },
                })}

                <a
                  style={{
                    color: "#f7c269",
                    textDecoration: "none",
                  }}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.text}
                </a>
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;
