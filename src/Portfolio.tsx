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
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <div className="max-w-3xl mx-auto p-8">
          <div className="h-[calc(100vh-12rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden">
            <div className="space-y-8">
              {Object.keys(images).map((key) => (
                <Link to={`/project/${key}`} className="block" key={key}>
                  <div className="group cursor-pointer">
                    <h3 className="text-lg tracking-wide font-light mb-3">
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
