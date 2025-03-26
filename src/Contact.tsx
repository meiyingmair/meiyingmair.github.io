import Navigation from "./Navigation";
import FadeIn from "./components/FadeIn";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <div className="max-w-3xl mx-auto p-8">
          <h2 className="text-lg tracking-wide font-light mb-8">Contact</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg tracking-wide font-light mb-3">Contact</h3>
              <div className="space-y-2 text-sm font-light">
                <p>
                  <a
                    href="mailto:uwwu2160@naver.com"
                    className="hover:underline"
                  >
                    uwwu2160@naver.com
                  </a>
                </p>
                <p>010.8446.2610</p>
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
                    Resume / CV
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/mei._.ying"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.behance.net/meiyingmair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Behance
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg tracking-wide font-light mb-3">
                Education
              </h3>
              <div className="space-y-2 text-sm font-light">
                <p>건국대 글로벌 영상디자인 졸업</p>
                <p>화영고등학교 졸업</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Contact;
