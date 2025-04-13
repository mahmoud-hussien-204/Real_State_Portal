"use client";

import {AppHelper} from "@/helpers/appHelper";
import Image from "next/image";
import ImageProject from "@/app/assets/project.png";
import IconLocation from "@/icons/IconLocation";
import ImageProjectAvatar from "@/app/assets/user.png";
import LinkButton from "./LinkButton";
import IconArrowRight from "@/icons/IconArrowRight";
import {useLocale} from "next-intl";

interface IProps {
  direction?: "vertical" | "horizontal";
  variant?: "dark" | "light";
  className?: string;
  project: {
    id: number;
    name_ar?: string;
    name_en?: string;
    image?: string;
    offer?: string | number;
    sale_status?: string;
    views_count?: number;
    developer_name_en?: string;
    developer_name_ar?: string;
    city: ICity;
    country: ICountry;
    area: IArea;
    starting_price?: number | string;
    expected_roi?: number;
    project_status?: string;
    expected_completion_date?: string;
  };
}

const ProjectItem = ({direction = "horizontal", variant = "light", className, project}: IProps) => {
  const locale = useLocale();
  const projectName = locale === "ar" ? project.name_ar : project.name_en;
  const projectAddress =
    locale === "ar"
      ? `${project.area.name_ar} - ${project.city.name_ar} - ${project.country.name_ar}`
      : `${project.area.name_en} - ${project.city.name_en} - ${project.country.name_en}`;
  const developerName = locale === "ar" ? project.developer_name_ar : project.developer_name_en;
  const showOffer = Boolean(project.offer);
  const offerText = `${project.offer}% offer`;
  const showSalesStatus = Boolean(project.sale_status);
  const salesStatusText = project.sale_status;
  const salesStatusColor = project.sale_status === "Available" ? "#1FC16B" : "#DFB400";

  return (
    <div
      className={AppHelper.className(
        "h-full rounded-1.25rem px-1.25rem py-0.75rem",
        {
          "flex flex-wrap items-center justify-center gap-1rem sm:flex-nowrap sm:justify-start":
            direction === "horizontal",
          "w-full max-w-[25.2rem]": direction === "vertical",
          "bg-colors-grey-colors-100": variant === "light",
          "bg-[#0E0E0E]": variant === "dark",
        },
        className
      )}
    >
      <div className='relative w-full rounded-sm sm:w-auto sm:rounded-1.25rem'>
        {showSalesStatus && (
          <div
            className='absolute left-0 top-0 rounded-br-xl rounded-tl-xl font-bold text-white'
            style={{
              backgroundColor: salesStatusColor,
              padding: "0.5rem 1.5rem",
            }}
          >
            {salesStatusText}
          </div>
        )}

        <div
          className={AppHelper.className("rounded-inherit relative", {
            "h-[17.25rem] w-full sm:w-[17.3125rem]": direction === "horizontal",
            "h-[15.9rem] w-full": direction === "vertical",
          })}
        >
          <Image
            src={project.image || ImageProject}
            alt='project image'
            width={500}
            height={400}
            className='rounded-inherit object-cover'
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        {showOffer && (
          <div
            className='absolute bottom-0 right-0 rounded-br-xl rounded-tl-xl bg-[#F2002A] font-bold text-white'
            style={{
              padding: "0.5rem 1.5rem",
            }}
          >
            {offerText}
          </div>
        )}
      </div>

      <div className='flex-1'>
        <h3
          className={AppHelper.className("mb-1rem font-semibold leading-[1.92563rem] font-26", {
            "mt-1rem": direction === "vertical",
            "text-colors-grey-colors-2000": variant === "light",
            "text-colors-grey-colors-100": variant === "dark",
          })}
        >
          {AppHelper.sliceContent(projectName || "", 25)}
        </h3>

        <div
          className={AppHelper.className("mb-1rem flex items-center gap-0.5rem", {
            "text-colors-primary-colors-600": variant === "light",
            "text-colors-primary-colors-400": variant === "dark",
          })}
        >
          <IconLocation
            svgProps={{
              className: "w-[0.8125rem] h-[1.1875rem]",
            }}
          />
          <h6
            className={AppHelper.className("font-semibold font-12", {
              "text-colors-grey-colors-700": variant === "light",
              "text-colors-grey-colors-300": variant === "dark",
            })}
          >
            {projectAddress}
          </h6>
        </div>

        <div className='mb-1rem flex items-center justify-between gap-0.5rem'>
          <div className='flex-1'>
            <h6
              className={AppHelper.className("mb-0.5rem font-12", {
                "text-colors-grey-colors-2000": variant === "light",
                "text-colors-grey-colors-100": variant === "dark",
              })}
            >
              Starting Price:
            </h6>
            <span
              className={AppHelper.className(
                "flex h-2.5rem w-full min-w-7.75rem items-center justify-center rounded-full text-center font-bold font-22",
                {
                  "bg-colors-primary-colors-50 text-colors-primary-colors-600": variant === "light",
                  "bg-[#201B1C] text-colors-primary-colors-400": variant === "dark",
                }
              )}
            >
              {project.starting_price}&nbsp;
              <sub className='font-medium'>
                <small>AED</small>
              </sub>
            </span>
          </div>
        </div>

        <div
          className={AppHelper.className("mb-1rem flex items-center gap-0.5rem border-t pt-1rem", {
            "justify-start": direction === "horizontal",
            "justify-center": direction === "vertical",
            "border-t-black/10": variant === "light",
            "border-t-white/10": variant === "dark",
          })}
        >
          <Image
            src={ImageProjectAvatar}
            alt='project avatar'
            width={45}
            height={45}
            className='size-[2.8125rem] rounded-full object-cover'
          />
          <div>
            <h6
              className={AppHelper.className("mb-0.125rem font-semibold", {
                "text-colors-grey-colors-2000": variant === "light",
                "text-colors-grey-colors-100": variant === "dark",
              })}
            >
              {developerName}
            </h6>
            <span
              className={AppHelper.className("font-medium font-14", {
                "text-colors-grey-colors-700": variant === "light",
                "text-colors-grey-colors-300": variant === "dark",
              })}
            >
              Developer
            </span>
          </div>
        </div>

        <div
          className={AppHelper.className("", {
            "flex justify-center": direction === "vertical",
          })}
        >
          <LinkButton
            href={`/projects/${project.id}`}
            className='min-w-[10.75rem] rounded-full font-14'
            variant='secondary'
          >
            View Details
            <IconArrowRight svgProps={{className: "size-1.25rem"}} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
