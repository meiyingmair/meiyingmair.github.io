import Navigation from "./Navigation";
import FadeIn from "./components/FadeIn";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <div className="max-w-3xl mx-auto p-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg tracking-wide font-light mb-3">Contact</h3>
              <div className="space-y-2 text-sm font-light">
                <p>
                  <a
                    href="mailto:uwwu2160@naver.com"
                    className="hover:underline"
                  >
                    madm426@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg tracking-wide font-light mb-3">Links</h3>
              <div className="space-y-2 text-sm font-light">
                <p>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Resume
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/mei.oo_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg tracking-wide font-light mb-3">
                Education
              </h3>
              <div className="space-y-2 text-sm font-light">
                <p>Fashion Institute of Technology</p>
                <p>Central Saint Martins</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Contact;
