import { WaterDropGrid } from "../animation/WaterDropGrid";
import { IntroAnima } from "../animation/IntroAnima";

export const Hero = () => {
  IntroAnima();
  return (
    <div className="hero relative container mx-auto px-5">
      <h2 className="subtitle absolute max-w-80 top-[60px] lg:top-[70px] left-[5%] lg:left-[20%] text-2xl text-white font-medium tracking-widest uppercase z-40">
        Welcome to {""}
        <b>Anika Levin</b>
        &apos;s World of Web Design Excellence
      </h2>
      <img
        className="photo absolute top-[160px] lg:top-[210px] left-[5%] lg:left-[20%] object-cover max-w-52 z-20"
        src="./design/photo.png"
        alt="Photo"
      />
      <WaterDropGrid />
      <h1 className="title absolute max-w-[800px] top-1/2 lg:top-[30%] left-[5%] lg:left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 text-4xl md:text-6xl text-white font-black tracking-widest uppercase z-20">
        Unleashing Creativity in Every Pixel
      </h1>
    </div>
  );
};
