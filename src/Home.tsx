import Navigation from "./Navigation";
import FadeIn from "./components/FadeIn";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [hovered, setHovered] = useState(false);

  // Placeholder images - replace these with your actual project images
  const previewImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        {/* Featured Project Preview */}
        <div className="w-full">
          <Link to="/portfolio" className="block">
            <div
              className="relative h-[90vh] w-full overflow-hidden"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="absolute inset-0 flex">
                {previewImages.map((img, index) => (
                  <div
                    key={img}
                    className="w-1/2 h-full transition-transform duration-700 ease-in-out"
                    style={{
                      transform: hovered
                        ? `translateX(${index === 0 ? "-5%" : "5%"})`
                        : "none",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`bg-white/90 px-8 py-4 transition-all duration-700 ${
                    hovered ? "scale-110" : "scale-100"
                  }`}
                >
                  <h2 className="text-2xl tracking-wide font-light">
                    Dear Diary
                  </h2>
                  <p className="text-sm font-light mt-2">Latest Project →</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
};

export default Home;
