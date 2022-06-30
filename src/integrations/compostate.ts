import { signal, effect } from "compostate";
import { ReactiveApi } from "../types";

const api: ReactiveApi = {
  createReactiveValue: signal,
  createReactiveFunction: effect,
};

export default api;
