import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <div className="container mx-auto flex justify-between items-center p-2 font-light">
      <div>
        <Link to="/" className="text-2xl tracking-wide mb-3">
          MEI-YING MAIR
        </Link>
      </div>
      <div className="space-x-8">
        <Link to="/portfolio" className="text-2xl tracking-wide mb-3">
          PORTFOLIO
        </Link>
        <Link to="/about" className="text-2xl tracking-wide mb-3">
          ABOUT
        </Link>
        <Link to="/contact" className="text-2xl tracking-wide mb-3">
          CONTACT
        </Link>
      </div>
    </div>
  </nav>
);

export default Navigation;
