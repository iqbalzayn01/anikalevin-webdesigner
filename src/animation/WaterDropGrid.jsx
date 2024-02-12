import anime from "animejs/lib/anime.es.js";

export const WaterDropGrid = () => {
  return (
    <div className="relative grid place-content-center px-8 py-12 overflow-x-hidden">
      <DotGrid />
    </div>
  );
};

const gridWidth = 35;
const gridHeight = 35;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-item",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -80, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [gridWidth, gridHeight],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-[5px] transition-colors hover:bg-slate-400"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-item h-[0.4rem] w-[0.4rem] rounded-full bg-gradient-to-b from-slate-500 to-white opacity-50 group-hover:from-slate-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};
