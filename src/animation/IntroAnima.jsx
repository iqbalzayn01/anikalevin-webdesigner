import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

export const IntroAnima = () => {
  useEffect(() => {
    const useIntroAnima = () => {
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
        })
        .add({
          targets: title,
          opacity: [0, 1],
          translateX: [100, 0],
          duration: 1000,
          easing: "easeOutQuad",
          offset: "-=500",
        });

      anime.timeline({ loop: false }).add({
        targets: photo,
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 1000,
        easing: "easeOutQuad",
        offset: "-=500",
      });
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useIntroAnima();
  }, []);
};
