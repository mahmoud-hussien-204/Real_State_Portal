import {AppHelper} from "@/helpers/appHelper";

function Spinner({className}: {className?: string}) {
  return (
    <span
      className={AppHelper.className(
        "loading loading-spinner loading-lg mx-auto text-primary",
        className
      )}
    ></span>
  );
}

export default Spinner;
