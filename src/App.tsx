import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { AnimatePresence } from "motion/react";
import Portfolio from "./Portfolio";
import ProjectPage from "./components/Project";

const getimages = () => {
  try {
    // Use Vite's import.meta.glob to dynamically import images
    const images = import.meta.glob(
      "/public/portfolio/*/*.(png|jpg|jpeg|gif|webp|HEIC)",
      { eager: true }
    );

    const imageKeys = Object.keys(images);

    // Create dictionary to store images by folder
    const imagesByFolder: { [key: string]: string[] } = {};

    imageKeys.forEach((key) => {
      // Extract folder name from path
      const folderMatch = key.match(/\/portfolio\/([^/]+)\//);
      if (folderMatch) {
        const folder = folderMatch[1];
        const url = key.replace("/public/", "/");

        // Initialize array for folder if it doesn't exist
        if (!imagesByFolder[folder]) {
          imagesByFolder[folder] = [];
        }

        imagesByFolder[folder].push(url);
      }
    });

    console.log(imagesByFolder);
    return imagesByFolder;
  } catch (error) {
    console.error("Error loading images:", error);
    return {};
  }
};

const App = () => {
  const images: {
    [key: string]: string[];
  } = getimages();
  console.log(images);

  return (
    <Router>
      <AnimatePresence mode={"wait"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio images={images} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/project/dear-diary"
            element={<ProjectPage imageUrls={images["Dear_Diary"]} />}
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
