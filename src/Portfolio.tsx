import Navigation from "./Navigation";
import FadeIn from "./components/FadeIn";
import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = ({
  images,
}: {
  images: {
    [key: string]: string[];
  };
}) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages((prev) => new Set(prev).add(imageUrl));
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      <FadeIn>
        <div className="max-w-7xl mx-auto p-10 h-[calc(100vh-64px)]">
          <div className="h-full w-full">
            <div className="grid grid-cols-3 gap-8">
              {Object.keys(images).map((key) => (
                <Link to={`/project/${key}`} className="block" key={key}>
                  <div className="group cursor-pointer">
                    <h3 className="text-xl tracking-wide font-light mb-4">
                      {key}
                    </h3>
                    <div className="aspect-video w-full bg-gray-100 overflow-hidden relative">
                      {!loadedImages.has(images[key][0]) && (
                        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                      )}
                      <img
                        src={images[key][0]}
                        alt={`${key} Preview`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(images[key][0])}
                        className={`w-full h-full object-cover transition-transform duration-300 group-hover:opacity-90 border border-black bg-white ${
                          loadedImages.has(images[key][0])
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Portfolio;
