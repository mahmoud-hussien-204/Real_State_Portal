"use client";
import {useTranslations} from "next-intl";

export function useTranslate() {
  const t = useTranslations();

  return function translate(path: Paths<IntlMessages>, values = {}) {
    if (Object.keys(values).length !== 0) {
      return t.rich(path, values);
    }
    return t(path);
  };
}

export type Paths<Schema, Path extends string = ""> = Schema extends string
  ? Path
  : Schema extends object
    ? {
        [K in keyof Schema & string]: Paths<Schema[K], `${Path}${Path extends "" ? "" : "."}${K}`>;
      }[keyof Schema & string]
    : never;
