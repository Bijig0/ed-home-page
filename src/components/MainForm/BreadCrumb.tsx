const BreadCrumb = () => {
  return (
    <ol className="flex items-center whitespace-nowrap p-0">
      <li className="inline-flex items-center">
        <a
          className="flex items-center text-base text-light font-semithin hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
          href="#"
        >
          Home
        </a>
        <svg
          className="flex-shrink-0 mx-2 overflow-visible size-4 text-light dark:text-neutral-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </li>
      <li
        className="inline-flex items-center text-base font-bold font-primary text-light truncate dark:text-gray-200"
        aria-current="page"
      >
        Schedule
      </li>
    </ol>
  );
};

export default BreadCrumb;
