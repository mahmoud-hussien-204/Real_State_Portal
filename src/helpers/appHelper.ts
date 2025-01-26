import {twMerge} from "tailwind-merge";

type ClassValue = ClassArray | ClassDictionary | string | number | boolean | null | undefined;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

type ClassArray = ClassValue[];

export class AppHelper {
  static toFormData<T>(data: T, formData: FormData = new FormData(), parentKey?: string): FormData {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const value = data[key];
        const formKey = parentKey ? `${parentKey}[${key}]` : key;
        if (typeof value === "object" && !(value instanceof File)) {
          AppHelper.toFormData(value, formData, formKey);
        } else if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (typeof item === "object" && !(item instanceof File)) {
              AppHelper.toFormData(item, formData, `${formKey}[${index}]`);
            } else {
              if (item instanceof File) {
                formData.append(formKey, item);
              } else {
                formData.append(`${formKey}[${index}]`, item);
              }
            }
          });
        } else {
          if (value instanceof File) {
            formData.append(formKey, value);
          } else {
            formData.append(formKey, value as string);
          }
        }
      }
    }
    return formData;
  }

  static className(...args: ClassValue[]): string {
    let className = "";
    for (const arg of args) {
      if (typeof arg === "string" || typeof arg === "number") {
        className += `${arg} `;
      } else if (typeof arg === "object") {
        if (Array.isArray(arg)) {
          for (const element of arg) {
            className += `${element} `;
          }
        } else {
          for (const key in arg) {
            if (arg[key]) {
              className += `${key} `;
            }
          }
        }
      }
    }

    return twMerge(className.trim());
  }

  static urlSearchParams(payload: Record<string, string | number | boolean | undefined>) {
    const data = new URLSearchParams();
    for (const key in payload) {
      if (payload[key]) {
        data.append(key, payload[key] as string);
      }
    }
    return data.toString();
  }

  static handleSelectBoxOptions<T>(options: T[], label: keyof T, value: keyof T) {
    return options.map((data) => ({label: data[label], value: data[value]}));
  }

  static sliceContent(content: string, limit: number = 25) {
    return content.length > limit ? `${content.slice(0, limit)}...` : content;
  }
}
