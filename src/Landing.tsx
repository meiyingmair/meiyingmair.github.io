import FadeIn from "./components/FadeIn";

const Landing = () => (
  <FadeIn>
    <div
      className="h-full w-full items-center justify-center flex p-32 cursor-pointer"
      onClick={() => {
        window.location.href = "/about";
      }}
    >
      <img src="/cat.jpg" alt="cat" />
    </div>
  </FadeIn>
);
export default Landing;
