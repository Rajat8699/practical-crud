import { memo } from "react";

const Footer = () => {
  return (
    <footer className="text-grey-600 bg-primary-500/30 dark:bg-grey-700 body-font">
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-primary-900 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-primary-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-primary-500 dark:text-white">
            Posts
          </span>
        </a>
      </div>
    </footer>
  );
};

export default memo(Footer);
