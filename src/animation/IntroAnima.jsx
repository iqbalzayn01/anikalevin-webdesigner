import anime from "animejs/lib/anime.es.js";
import { useLayoutEffect } from "react";

export const IntroAnima = () => {
  useLayoutEffect(() => {
    const subtitle = document.querySelector(".subtitle");
    const title = document.querySelector(".title");
    const photo = document.querySelector(".photo");

    anime
      .timeline({ loop: false })
      .add({
        targets: [subtitle, photo],
        opacity: [0, 1],
        translateX: [-100, 0],
        duration: 1700,
        easing: "easeOutExpo",
        offset: "-=1700",
        delay: 0,
      })
      .add({
        targets: title,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 1700,
        easing: "easeOutExpo",
        delay: 0,
      });
  }, []);
};
