import Navigation from "./Navigation";
import FadeIn from "./components/FadeIn";

const About = () => {
  const skills = [
    { name: "Photoshop", level: 85 },
    { name: "Illustrator", level: 80 },
    { name: "Premiere", level: 75 },
    { name: "After Effects", level: 70 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FadeIn>
        <div className="max-w-3xl mx-auto p-8 flex gap-16 font-light">
          {/* Left Column */}
          <div className="w-64 flex flex-col">
            <img
              src="/api/placeholder/240/300"
              alt="Profile"
              className="w-full mb-8 bg-gray-100"
            />

            <h1 className="text-2xl tracking-wide mb-3 font-extralight">
              MEI-YING MAIR
            </h1>
            <div className="space-y-1.5 text-sm tracking-wide">
              <p className="font-light">uwwu2160@naver.com</p>
              <p className="font-light">010.8446.2610</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 pt-1">
            <section className="mb-14">
              <h2 className="text-lg tracking-wide font-light mb-5">
                About me
              </h2>
              <p className="text-sm font-light mb-3 leading-relaxed"></p>
              <p className="text-sm font-light leading-relaxed"></p>
            </section>

            <section className="mb-14">
              <h2 className="text-lg tracking-wide font-light mb-5">
                Education
              </h2>
              <div className="space-y-4">
                <div className="flex gap-8 text-sm">
                  <span className="w-20 font-light">2020. 02</span>
                  <span className="font-light"></span>
                </div>
                <div className="flex gap-8 text-sm">
                  <span className="w-20 font-light">2014. 02</span>
                  <span className="font-light"></span>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-lg tracking-wide font-light mb-5">Skills</h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="text-sm">
                    <div className="mb-2 font-light tracking-wide">
                      {skill.name}
                    </div>
                    <div className="h-1.5 bg-gray-200 w-full">
                      <div
                        className="h-full bg-gray-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
