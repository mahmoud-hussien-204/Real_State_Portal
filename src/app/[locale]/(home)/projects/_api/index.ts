import InterceptorHelper from "@/helpers/interceptHelper";
import {IProjectsFiltersForm} from "../_interfaces";

export const apiGetProjectDetails = async (id: string) => {
  return InterceptorHelper.intercept<
    Omit<IResponse<{project: IProject; similar_projects: IOffer[]}>, "meta">
  >(`home/project/${id}`);
};

export const apiGetProjects = async (params: IProjectsFiltersForm) => {
  return InterceptorHelper.intercept<IResponse<IOffer[]>>(`projects`);
};
