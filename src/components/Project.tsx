import Navigation from "../Navigation";
import FadeIn from "./FadeIn";
import { useState } from "react";

const ProjectPage = ({
  imageUrls,
  title,
  description,
}: {
  imageUrls: string[];
  title: string;
  description: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  console.log("imageUrls", imageUrls);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <div className="grid grid-cols-5 gap-8 px-8 mx-auto">
          {/* Left column - Information */}
          <div className="col-span-1 pr-8">
            <h2 className="text-2xl tracking-wide font-light mb-8">{title}</h2>
            <div className="prose">
              {/* Add your project information here */}
              <p className="text-gray-600 font-light leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right column - Image Gallery */}
          <div className="col-span-4 h-[calc(100vh-6rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden ">
            <div className="grid grid-cols-3 gap-4">
              {imageUrls.map((imageUrl, index) => (
                <div
                  key={imageUrl}
                  className={`aspect-[4/3] w-full ${
                    index % 3 === 0 ? "col-span-2" : ""
                  }`}
                >
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer border border-black bg-white"
                    onClick={() => setSelectedImage(imageUrl)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-sm tracking-wide font-light"
            >
              close
            </button>
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-h-[90vh] max-w-[90vw] object-contain border border-black bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
