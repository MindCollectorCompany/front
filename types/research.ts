import { StatusKind } from "./generic";

export type Research = {
  id: Number;
  name: String;
  keywords: String[];
  status: StatusKind;
  description?: String;
};
