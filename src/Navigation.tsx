import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl tracking-wide mb-3 font-extralight">
        MEI-YING MAIR
      </Link>
      <div className="space-x-8">
        <Link
          to="/portfolio"
          className="text-2xl tracking-wide mb-3 font-extralight"
        >
          PORTFOLIO
        </Link>
        <Link
          to="/about"
          className="text-2xl tracking-wide mb-3 font-extralight"
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className="text-2xl tracking-wide mb-3 font-extralight"
        >
          CONTACT
        </Link>
      </div>
    </div>
  </nav>
);

export default Navigation;
