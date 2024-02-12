export const Header = () => {
  return (
    <>
      <header className="header mx-auto px-5 py-5">
        <nav className="navbar flex items-center justify-between">
          <span className="logo text-2xl text-white font-semibold tracking-widest uppercase z-20">
            Anika Levin
          </span>
          <button
            type="button"
            className="flex items-center justify-between z-20"
          >
            <svg
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
        </nav>
      </header>
    </>
  );
};
