import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/Layout";
import PortfolioDetails from "./pages/PortfolioDetails";

import ImgPets from "./images/portfolio/animals.jpg";
import ImgCooking from "./images/portfolio/cooking.jpg";
import ImgTodo from "./images/portfolio/todo.png";
import ImgShoppingcart from "./images/portfolio/shoppingcart.jpg";

// import components
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import DrawerAppBar from "./components/DrawerAppBar/DrawerAppBar";

// import fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// portfolio data
const portfolioData = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    image: "https://placehold.co/600x400",
    technology: ["React", "Mui", "SASS"],
    github: "https://github.com/olegskrivko/todo",
    demoURL: "https://react-to-do-local-storage.netlify.app/",
    isAvailable: true,
    description:
      "Showcase skills, projects, resume — personalized web portfolio.",
  },
  {
    id: 2,
    slug: "to-do-list-app",
    title: "To-Do List App",
    image: ImgTodo,
    technology: ["React", "CSS"],
    github: "https://github.com/olegskrivko/todo",
    demoURL: "https://react-to-do-local-storage.netlify.app/",
    isAvailable: true,
    description: "Simple task manager — add, complete, delete tasks.",
  },
  {
    id: 3,
    slug: "weather-app",
    title: "Weather App",
    image: "https://placehold.co/600x400",
    technology: ["Vue", "CSS"],
    github: "https://github.com/olegskrivko/todo",
    demoURL: "https://react-to-do-local-storage.netlify.app/",
    isAvailable: true,
    description: "Fetches weather data — displays using HTML, CSS, JavaScript.",
  },
  {
    id: 4,
    slug: "recipe-finder",
    title: "Recipe Finder",
    image: "https://placehold.co/600x400",
    technology: ["React", "MUI"],
    github: "https://github.com/olegskrivko/todo",
    demoURL: "https://react-to-do-local-storage.netlify.app/",
    isAvailable: true,
    description: "Search recipes by ingredients — API, HTML, JavaScript.",
  },
  {
    id: 5,
    slug: "blog-website",
    title: "Blog Website",
    image: "https://placehold.co/600x400",
    technology: ["Django", "Bootstrap"],
    github: "https://github.com/olegskrivko/todo",
    demoURL: "https://react-to-do-local-storage.netlify.app/",
    isAvailable: true,
    description:
      "User-created blog posts — HTML, CSS, JavaScript functionality.",
  },
  {
    id: 6,
    slug: "e-commerce",
    title: "E-commerce",
    image: "https://placehold.co/600x400",
    technology: ["Django", "Bootstrap"],
    github: "https://github.com/olegskrivko/todo",
    demoURL: "https://react-to-do-local-storage.netlify.app/",
    isAvailable: true,
    description:
      "Display products — images, descriptions, interactive features.",
  },
  {
    id: 7,
    slug: "find-your-pet",
    title: "Find Your Pet",
    image: ImgPets,
    technology: ["ExpressJS", "Bootstrap"],
    github: "https://github.com/olegskrivko/pawprint",
    demoURL: "https://pawclix.cyclic.app",
    isAvailable: true,
    description: "Web app where you can register your lost pet.",
  },
  {
    id: 8,
    slug: "cooking-recipes",
    title: "Cooking Recipes",
    image: ImgCooking,
    technology: ["ExpressJS", "Bootstrap"],
    github: "https://github.com/olegskrivko/cookingapp",
    demoURL: "https://cooking.cyclic.app",
    isAvailable: false,
    description: "Simple cooking app with filtering options.",
  },
  {
    id: 9,
    slug: "shopping-cart",
    title: "Shopping Cart",
    image: ImgShoppingcart,
    technology: ["React", "CSS"],
    github: "https://github.com/olegskrivko/react-shop",
    demoURL: "https://react-shop-cart-prj.netlify.app/",
    isAvailable: true,
    description: "Simple shopping cart, where you can add products.",
  },
  {
    id: 10,
    slug: "cookbook",
    title: "Cookbook",
    image: "https://placehold.co/600x400",
    technology: ["React", "CSS"],
    github: "https://github.com/olegskrivko/react-shop",
    demoURL: "https://gardas-receptes.netlify.app/recipes",
    isAvailable: true,
    description: "Simple shopping cart, where you can add products.",
  },
];
// education data
const educationData = [
  {
    id: 1,
    type: "education",
    date: "2014 - 2016",
    title: "Environmental Science",
    institution: "University of Daugavpils",
    skills: [],
    subtitle:
      "Professional Master`s Degree in Environmental Planning. Specialist in Environmental Management",
  },
  {
    id: 2,
    type: "education",
    date: "2011 - 2014",
    title: "Environmental Science",
    institution: "University of Daugavpils",
    skills: [],
    subtitle: "Bachelor of Natural Sciences in Environmental Science",
  },
];
// experience data
const experienceData = [
  {
    id: 1,
    type: "experience",
    date: "2021 Dec - present",
    title: "Software engineer in data warehouse",
    institution: "Swedbank Group",
    skills: [
      "Oracle Data Integrator",
      "Teradata",
      "Testing",
      "SQL",
      "SAFe",
      "Git",
    ],
  },
  {
    id: 2,
    type: "experience",
    date: "2020 May - 2021 Dec",
    title: "Senior cartographic engineer",
    institution: "Latvian Geospatial Information Agency",
    skills: ["Google Earth", "Python", "SQL", "Cartography", "ArcGIS"],
  },
  {
    id: 3,
    type: "experience",
    date: "2019 Feb - 2020 May",
    title: "Cartographic engineer",
    institution: "Latvian Geospatial Information Agency",
    skills: ["Adobe Photoshop", "Cartography", "ArcGIS", "Adobe Illustrator"],
  },
  {
    id: 4,
    type: "experience",
    date: "2017 Jul - 2019 Feb",
    title: "Cartographer",
    institution: "Latvian Geospatial Information Agency",
    skills: ["Spatial Analysis", "Cartography", "ArcGIS", "GIS"],
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#1976d2", // Example primary colors for light and dark modes
      },
      secondary: {
        main: darkMode ? "#f48fb1" : "#e91e63", // Example secondary colors for light and dark modes
      },
      background: {
        default: darkMode ? "#303030" : "#f5f5f5", // Example background colors for light and dark modes
        paper: darkMode ? "#424242" : "#fff", // Example paper colors for light and dark modes
      },
      text: {
        primary: darkMode ? "#fff" : "#333", // Example text colors for light and dark modes
        secondary: darkMode ? "#ccc" : "#666", // Example secondary text colors for light and dark modes
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout toggleTheme={toggleTheme} darkMode={darkMode} />}
          >
            <Route
              index
              element={
                <Home
                  portfolioData={portfolioData}
                  educationData={educationData}
                  experienceData={experienceData}
                />
              }
            />
            <Route
              path="portfolio"
              element={<Portfolio portfolioData={portfolioData} />}
            />
            <Route
              path="portfolio/:portfolioId"
              element={<PortfolioDetails portfolioData={portfolioData} />}
            />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
