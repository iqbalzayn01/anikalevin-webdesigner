import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import anime from "animejs/lib/anime.es.js";

export const AnimatedButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    const menus = document.querySelector(".menus");

    anime({
      targets: menus,
      translateY: 5,
      duration: 300,
      easing: "easeInOutQuad",
      direction: "alternate",
      complete: () => {
        anime({
          targets: menus,
          translateY: 0,
          duration: 0,
        });
      },
    });
  };

  if (isMenuOpen) {
    anime({
      targets: "#menuIcon",
      rotate: [0, 90],
      duration: 1000,
      easing: "easeInOutQuad",
    });
  } else {
    anime({
      targets: "#menuIcon",
      rotate: [90, 0],
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        type="button"
        className="menus flex items-center justify-between z-50"
      >
        <svg
          id="menuIcon"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4333 21.3668C14.9222 21.8779 14.3499 21.998 13.7166 21.7272C13.0833 21.4564 12.7666 20.9696 12.7666 20.2668V11.7334C12.7666 11.0307 13.0833 10.5439 13.7166 10.273C14.3499 10.0022 14.9222 10.1223 15.4333 10.6334L19.6999 14.9001C19.8555 15.0592 19.9722 15.2334 20.0499 15.4228C20.1277 15.6121 20.1666 15.8054 20.1666 16.0028C20.1666 16.2001 20.1277 16.3934 20.0499 16.5828C19.9722 16.7721 19.8555 16.9446 19.6999 17.1001L15.4333 21.3668Z"
            fill="white"
          />
        </svg>
        <span className="text-2xl text-white font-semibold tracking-widest uppercase z-20">
          Menu
        </span>
      </button>
      <DropdownMenu isOpen={isMenuOpen} />
    </>
  );
};

const DropdownMenu = ({ isOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;

    if (isOpen) {
      menu.style.display = "flex";
      anime({
        targets: menu,
        height: menu.scrollHeight,
        opacity: 1,
        translateY: 180,
        duration: 1000,
        easing: "easeInOutQuad",
      });
    } else {
      anime({
        targets: menu,
        height: 0,
        opacity: 0,
        translateY: 0,
        duration: 1000,
        easing: "easeInOutQuad",
        complete: () => {
          menu.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      className="dropdown-menu absolute bg-white flex-col gap-5 right-5 bottom-0 p-4 rounded z-50"
      ref={menuRef}
      style={{
        overflow: "hidden",
        display: "none",
      }}
    >
      <a href="#" className="text-black font-medium hover:underline">
        About
      </a>
      <a href="#" className="text-black font-medium hover:underline">
        Portfolio
      </a>
      <a href="#" className="text-black font-medium hover:underline">
        Blog
      </a>
      <a href="#" className="text-black font-medium hover:underline">
        Let&apos;s Connect
      </a>
    </div>
  );
};

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
