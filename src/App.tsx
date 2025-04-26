import "./App.css";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
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

    // Get journal images specifically
    const journalImages = import.meta.glob(
      "/public/portfolio/*/Journal/*.(png|jpg|jpeg|gif|webp|HEIC)",
      { eager: true }
    );

    const imageKeys = Object.keys(images);
    const journalImageKeys = Object.keys(journalImages);

    // Create dictionary to store images by folder
    const imagesByFolder: { [key: string]: string[] } = {};
    // Create dictionary to store journal images by folder
    const journalImagesByFolder: { [key: string]: string[] } = {};

    imageKeys.forEach((key) => {
      // Extract folder name from path
      const folderMatch = key.match(/\/portfolio\/([^/]+)\//);
      if (folderMatch) {
        const folder = folderMatch[1];
        const url = key.replace("/public/", "/");

        // Skip journal images as they will be handled separately
        if (key.includes("/Journal/")) {
          return;
        }

        // Initialize array for folder if it doesn't exist
        if (!imagesByFolder[folder]) {
          imagesByFolder[folder] = [];
        }

        imagesByFolder[folder].push(url);
      }
    });

    journalImageKeys.forEach((key) => {
      // Extract folder name from path
      const folderMatch = key.match(/\/portfolio\/([^/]+)\/Journal\//);
      if (folderMatch) {
        const folder = folderMatch[1];
        const url = key.replace("/public/", "/");

        // Initialize array for folder if it doesn't exist
        if (!journalImagesByFolder[folder]) {
          journalImagesByFolder[folder] = [];
        }

        journalImagesByFolder[folder].push(url);
      }
    });

    console.log("Main images:", imagesByFolder);
    console.log("Journal images:", journalImagesByFolder);

    return { imagesByFolder, journalImagesByFolder };
  } catch (error) {
    console.error("Error loading images:", error);
    return { imagesByFolder: {}, journalImagesByFolder: {} };
  }
};

const App = () => {
  const { imagesByFolder, journalImagesByFolder } = getimages();

  return (
    <Router>
      <AnimatePresence mode={"wait"}>
        <Routes>
          {/* <Route path="" element={<Landing />} /> */}
          <Route path="" element={<Home />} />
          <Route
            path="portfolio"
            element={<Portfolio images={imagesByFolder} />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {Object.keys(imagesByFolder).map((key) => (
            <Route
              key={key}
              path={`project/${key}`}
              element={
                <ProjectPage
                  imageUrls={imagesByFolder[key]}
                  title={key}
                  journalImageUrls={journalImagesByFolder[key] || []}
                />
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
