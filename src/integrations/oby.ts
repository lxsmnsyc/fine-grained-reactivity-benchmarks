import $ from "oby";
import { ReactiveApi } from "../types";

const api: ReactiveApi = {
  createReactiveValue: (v) => {
    const o = $(v);
    return [o, o];
  },
  createReactiveFunction: $.effect,
};

export default api;
