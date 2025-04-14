import {IProjectsFiltersForm} from "../_interfaces";
import InterceptorHelper from "@/helpers/interceptHelper";

export const apiGetProjects = async (
  projectsParams: IProjectsFiltersForm,
  config?: IconfigParams
) => {
  return InterceptorHelper.intercept<IResponse<IProject>>(`projects?`);
};
