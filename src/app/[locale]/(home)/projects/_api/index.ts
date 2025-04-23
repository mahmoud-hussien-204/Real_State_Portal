import InterceptorHelper from "@/helpers/interceptHelper";

export const apiGetProjectDetails = async (id: string) => {
  return InterceptorHelper.intercept<
    Omit<IResponse<{project: IProject; similar_projects: IOffer[]}>, "meta">
  >(`home/project/${id}`);
};
