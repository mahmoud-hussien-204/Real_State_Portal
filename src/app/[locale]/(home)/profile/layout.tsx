"use client";

import {useTranslations} from "next-intl";
import {usePathname} from "next/navigation";
import Container from "@/components/Container";
import {AppHelper} from "@/helpers/appHelper";
import {Link} from "@/i18n/routing";
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
      label: t("profile.history"),
      icon: <MdHistory className='h-5 w-5' />,
    },
  ];

  return (
    <Container className='py-24'>
      <div className='flex gap-8'>
        {/* Sidebar */}
        <aside className='w-64 shrink-0'>
          <nav className='flex flex-col gap-2'>
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={AppHelper.className(
                  "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors",
                  {
                    "bg-colors-primary-colors-50 text-colors-primary-colors-600":
                      pathname === link.href,
                    "hover:bg-colors-grey-colors-50": pathname !== link.href,
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
        <main className='flex-1 rounded-xl bg-white p-6 shadow-sm'>{children}</main>
      </div>
    </Container>
  );
};

export default ProfileLayout;
