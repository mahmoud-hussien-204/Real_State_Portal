import {AppHelper} from "@/helpers/appHelper";

import Image from "next/image";

import ImageProject from "@/app/assets/project.png";

import IconLocation from "@/icons/IconLocation";

import ImageProjectAvatar from "@/app/assets/user.png";

import LinkButton from "./LinkButton";

import IconArrowRight from "@/icons/IconArrowRight";

interface IProps {
  direction?: "vertical" | "horizontal";
  variant?: "dark" | "light";
}

const ProjectItem = ({direction = "horizontal", variant = "light"}: IProps) => {
  return (
    <div
      className={AppHelper.className("h-full rounded-1.25rem px-1.25rem py-0.75rem", {
        "flex items-center gap-1rem": direction === "horizontal",
        "w-full max-w-[25.2rem]": direction === "vertical",
        "bg-colors-grey-colors-100": variant === "light",
        "bg-[#0E0E0E]": variant === "dark",
      })}
    >
      <div className='rounded-1.25rem'>
        <Image
          src={ImageProject}
          alt=''
          className={AppHelper.className("rounded-inherit", {
            "h-[17.25rem] max-h-full w-[17.3125rem] max-w-full": direction === "horizontal",
            "h-full max-h-[15.9rem] w-full": direction === "vertical",
          })}
        />
      </div>

      <div className='flex-1'>
        <h3
          className={AppHelper.className("font-26 mb-1rem font-semibold leading-[1.92563rem]", {
            "mt-1rem": direction === "vertical",
            "text-colors-grey-colors-2000": variant === "light",
            "text-colors-grey-colors-100": variant === "dark",
          })}
        >
          {AppHelper.sliceContent("Trillionaire Residences", 25)}
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
            Business Bay - Dubai - United Arab Emirates
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
              12,000&nbsp;
              <sub className='font-medium'>
                <small>AED</small>
              </sub>
            </span>
          </div>
          <div className='flex-1'>
            <h6
              className={AppHelper.className("mb-0.5rem font-12", {
                "text-colors-grey-colors-2000": variant === "light",
                "text-colors-grey-colors-100": variant === "dark",
              })}
            >
              Expected ROI:
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
              4,500 &nbsp;
              <sub className='font-medium'>
                <small>AED</small>
              </sub>
            </span>
          </div>
        </div>

        <div
          className={AppHelper.className("mb-1rem flex items-center gap-0.5rem border-t pt-1rem", {
            "justify-center": direction === "vertical",
            "border-t-black/10": variant === "light",
            "border-t-white/10": variant === "dark",
          })}
        >
          <Image
            src={ImageProjectAvatar}
            alt='project avatar'
            className='size-[2.8125rem] rounded-full object-cover'
          />
          <div>
            <h6
              className={AppHelper.className("mb-0.125rem font-semibold", {
                "text-colors-grey-colors-2000": variant === "light",
                "text-colors-grey-colors-100": variant === "dark",
              })}
            >
              Kamal AbdelGhany
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
          className={AppHelper.className({
            "flex justify-center": direction === "vertical",
          })}
        >
          <LinkButton
            href='/explore/${1}'
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
