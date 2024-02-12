import { WaterDropGrid } from "../animation/WaterDropGrid";

export const Hero = () => {
  return (
    <div className="hero">
      <h2 className="subtitle">
        Welcome to {""}
        <b>Anika Levin</b>
        &apos;s World of Web Design Excellence
      </h2>
      <img className="photo" src="./design/photo.png" alt="Photo" />
      <WaterDropGrid />
      <h1 className="title">Unleashing Creativity in Every Pixel</h1>
    </div>
  );
};
