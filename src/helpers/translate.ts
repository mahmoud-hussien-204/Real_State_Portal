import {useTranslations} from "next-intl";

export function translate(path: Paths<IntlMessages>, values = {}) {
  const t = useTranslations();
  if (Object.keys(values).length !== 0) {
    return t.rich(path, values);
  }

  return t(path);
}

export type Paths<Schema, Path extends string = ""> = Schema extends string
  ? Path
  : Schema extends object
    ? {
        [K in keyof Schema & string]: Paths<Schema[K], `${Path}${Path extends "" ? "" : "."}${K}`>;
      }[keyof Schema & string]
    : never;
