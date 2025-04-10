import {baseURL} from "@/constants";
import { toast } from "react-toastify";




export default class InterceptorHelper {
  // intercept request
  static async interceptRequest(options: RequestInit = {}): Promise<RequestInit> {
    

    // delete content type if the body is an object (eg. FormData)
    if (typeof options.body === "object") {
      if (options.headers?.["Content-Type" as keyof HeadersInit]) {
        delete options.headers["Content-Type" as keyof HeadersInit];
      }
    }

    return options;
  }

  // intercept response
  static async interceptResponse<T>(
    response: Response,
    method: string | undefined,
    showToast: boolean
  ): Promise<T> {
    
    let responseJson;
    try {
      responseJson = await response.json();
    } catch (error) {
      console.error(error);
      return Promise.reject("JSON Error");
    }

    const message = responseJson?.message || responseJson?.error || responseJson.success;

    // handle response error
    if (!response.ok) {
      // if message is array
      if (Array.isArray(message)) {
        message.forEach((msg) => toast.error(msg));
      } else {
          toast.error(message);
      }

      return Promise.reject(responseJson);
    }

    if (method !== "GET" && showToast) toast.success(message);

    return responseJson;
  }

  static async interceptResponseBlob(response: Response): Promise<Blob> {
    
    const responseBlob = await response.blob();

    // handle response error
    if (!response.ok) {
      toast.error("Export Failed");

      return Promise.reject(responseBlob);
    }

    return responseBlob;
  }

  // intercept function
  static async intercept<T>(
    url: string,
    options: RequestInit = {},
    showToast: boolean = true
  ): Promise<T> {
    try {
      // handle request
      const requestOptions = await InterceptorHelper.interceptRequest(options);

      const path = `${baseURL + "" + url}`;

      const response = await fetch(path, requestOptions);

      // handle response
      return await InterceptorHelper.interceptResponse<T>(response, options.method, showToast);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          toastId: error.message,
        });
        // appStore.dispatch(logout());
      }
      return Promise.reject(error);
    }
  }

  static async interceptBlob(
    url: string,
    options: RequestInit = {},
  ): Promise<Blob> {
    try {
      // handle request
      const requestOptions = await InterceptorHelper.interceptRequest(options);

      const path = `${baseURL + "" + url}`;

      const response = await fetch(path, requestOptions);

      // handle response
      return await InterceptorHelper.interceptResponseBlob(response);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      return Promise.reject(error);
    }
  }
}
