import {useSyncExternalStore} from "react";

import {AppHelper} from "@/helpers/appHelper";

const subscribe = (callback: () => void) => {
  window.addEventListener("hashchange", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
  };
};

const snapShot = () => window.location.hash || "#developer";

const links = [
  {
    title: "Developer",
    href: "#developer",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Statement",
    href: "#statement",
  },
  {
    title: "View",
    href: "#view",
  },
  {
    title: "Plan",
    href: "#plan",
  },
  {
    title: "Layout",
    href: "#layout",
  },
  {
    title: "Structure",
    href: "#structure",
  },
  {
    title: "Available Pricing",
    href: "#available-pricing",
  },
  {
    title: "Brochure",
    href: "#brochure",
  },
  {
    title: "Location",
    href: "#location",
  },
];

const Filtration = () => {
  const tab = useSyncExternalStore(subscribe, snapShot);

  console.log(tab);

  return (
    <nav className='sticky top-2rem z-40 flex items-center justify-between gap-0.75rem overflow-x-auto rounded-full bg-white'>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={AppHelper.className(
            "rounded-inherit flex h-4.5rem items-center justify-center px-1rem text-center font-medium text-colors-grey-colors-1000 transition-all duration-200 font-18",
            {
              "bg-colors-primary-colors-400 !px-3rem font-bold text-colors-grey-colors-100":
                link.href === tab,
            }
          )}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
};

export default Filtration;
