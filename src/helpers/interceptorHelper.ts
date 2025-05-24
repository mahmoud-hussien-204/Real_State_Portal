import {toast} from "react-toastify";

const baseURL = process.env.NEXT_PUBLIC_baseURL;

export default class InterceptorHelper {
  // intercept request
  static async interceptRequest(options: RequestInit = {}): Promise<RequestInit> {
    // get access token from local storage
    const accessToken = localStorage.getItem("accessToken");
    console.log("accessToken", accessToken);
    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    options.headers = {
      "Accept-Language": "en",
      "Content-Language": "en",
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
    };

    // delete content type if the body is an object (eg. FormData)
    if (typeof options.body === "object") {
      if (options.headers?.["Content-Type" as keyof HeadersInit]) {
        delete options.headers["Content-Type" as keyof HeadersInit];
      }
    }

    return options;
  }

  // intercept response
  static async interceptResponse<T>(response: Response, method: string | undefined): Promise<T> {
    const responseJson = await response.json();

    const message = responseJson?.message || responseJson?.error || responseJson.success;

    // handle response error
    if (!response.ok || responseJson.success == false) {
      // if message is array
      if (Array.isArray(message)) {
        message.forEach((msg) => toast.error(msg));
      } else {
        toast.error(message);
      }

      return Promise.reject(responseJson);
    }

    toast.success(message);

    return responseJson;
  }

  // intercept function
  static async intercept<T>(url: string, options: RequestInit = {}): Promise<T> {
    // handle request
    const requestOptions = await InterceptorHelper.interceptRequest(options);

    const path = `${baseURL + "" + url}`;

    const response = await fetch(path, requestOptions);

    // handle response
    const responseOption = await InterceptorHelper.interceptResponse<T>(response, options.method);

    return responseOption;
  }
}
