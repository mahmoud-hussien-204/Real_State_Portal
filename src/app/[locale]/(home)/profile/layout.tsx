"use client";

import {useTranslations} from "next-intl";
import Container from "@/components/Container";
import {AppHelper} from "@/helpers/appHelper";
import {Link, usePathname} from "@/i18n/routing";
import {User} from "lucide-react";
import {RiLockLine} from "react-icons/ri";
import {MdFavorite, MdHistory} from "react-icons/md";

const ProfileLayout = ({children}: {children: React.ReactNode}) => {
  const t = useTranslations();

  const pathname = usePathname();

  const sidebarLinks = [
    {
      href: "/profile",
      label: t("profile.info"),
      icon: <User className='h-5 w-5' />,
    },
    {
      href: "/profile/security",
      label: t("profile.security"),
      icon: <RiLockLine className='h-5 w-5' />,
    },
    {
      href: "/profile/favorites",
      label: t("profile.favorites"),
      icon: <MdFavorite className='h-5 w-5' />,
    },
    {
      href: "/profile/history",
      label: t("profile.browsing_history"),
      icon: <MdHistory className='h-5 w-5' />,
    },
  ];

  return (
    <Container className='mt-10rem'>
      <div className='flex gap-8'>
        {/* Sidebar */}
        <aside className='sticky top-10rem min-h-[calc(100vh-10rem)] w-64 shrink-0 rounded-lg bg-colors-grey-colors-150 px-1rem py-2rem'>
          <nav className='flex flex-col gap-1rem'>
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={AppHelper.className(
                  "flex items-center gap-3 rounded-lg px-1rem py-0.75rem transition-colors duration-300 hover:bg-primary hover:text-white",
                  {
                    "!bg-primary text-white": pathname === link.href,
                  }
                )}
              >
                {link.icon}
                <span className='font-medium'>{link.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className='relative flex-1 overflow-hidden rounded-xl bg-white p-6 shadow-sm'>
          {children}
        </main>
      </div>
    </Container>
  );
};

export default ProfileLayout;
