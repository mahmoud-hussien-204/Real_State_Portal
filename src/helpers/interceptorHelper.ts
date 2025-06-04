import {toast} from "react-toastify";

const baseURL = process.env.NEXT_PUBLIC_baseURL;

export default class InterceptorHelper {
  // intercept request
  static async interceptRequest(options: RequestInit = {}): Promise<RequestInit> {
    // console.log(JSON.parse(localStorage.getItem("userData") || "{}"));
    // get access token from local storage
    let accessToken;

    if (typeof window !== "undefined") {
      accessToken = JSON.parse(localStorage.getItem("userData") || "{}")?.access_token;
    }

    options.headers = {
      Authorization: `Bearer ${accessToken}`,
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
      if (typeof window !== "undefined") {
        // if message is array
        if (Array.isArray(message)) {
          message.forEach((msg) => toast.error(msg));
        } else {
          toast.error(message);

          if (message == "Unauthenticated.") {
            localStorage.removeItem("userData");
            window.location.href = "/auth/login";
          }
        }
      }

      return Promise.reject(responseJson);
    }

    if (typeof window !== "undefined") {
      toast.success(message);
    }

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
