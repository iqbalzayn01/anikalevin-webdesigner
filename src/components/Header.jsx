import { AnimatedButton } from "../animation/MicroInteraction";

export const Header = () => {
  return (
    <>
      <header className="header relative mx-auto px-5 py-5">
        <nav className="navbar flex items-center justify-between">
          <span className="logo text-2xl text-white font-semibold tracking-widest uppercase">
            Anika Levin
          </span>
          <AnimatedButton />
        </nav>
      </header>
    </>
  );
};
