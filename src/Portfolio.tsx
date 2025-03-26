import Navigation from "./Navigation";
import FadeIn from "./components/FadeIn";
import { Link } from "react-router-dom";

const Portfolio = ({
  images,
}: {
  images: {
    [key: string]: string[];
  };
}) => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <FadeIn>
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-lg tracking-wide font-light mb-8">Projects</h2>
        <div className="space-y-8">
          <Link to="/project/dear-diary" className="block">
            <div className="group cursor-pointer">
              <h3 className="text-lg tracking-wide font-light mb-3">
                Dear Diary
              </h3>
              <div className="aspect-video w-full bg-gray-100 overflow-hidden">
                <img
                  src={images["Dear_Diary"][2]}
                  alt="Dear Diary Preview"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-sm font-light leading-relaxed">
                A visual journey through personal narratives and daily
                reflections
              </p>
            </div>
          </Link>

          {/* You can add more projects here following the same pattern */}
        </div>
      </div>
    </FadeIn>
  </div>
);

export default Portfolio;
