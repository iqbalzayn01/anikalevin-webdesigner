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
        targets: subtitle,
        opacity: [0, 1],
        translateX: [-100, 0],
        duration: 1000,
        easing: "easeOutQuad",
        delay: 300,
      })
      .add({
        targets: title,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 1000,
        easing: "easeOutQuad",
        offset: "-=1000",
        delay: 300,
      });

    anime.timeline({ loop: false }).add({
      targets: photo,
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 1000,
      easing: "easeOutQuad",
      offset: "-=1000",
      delay: 300,
    });
  }, []);
};
