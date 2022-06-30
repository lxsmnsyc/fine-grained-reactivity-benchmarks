import { createValue, reactive } from "@vzn/reactivity";
import { ReactiveApi } from "../types";

const api: ReactiveApi = {
  createReactiveValue: createValue,
  createReactiveFunction: reactive,
};

export default api;
