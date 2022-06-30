import { ReactiveApi } from "../types";

const api: ReactiveApi = {
  createReactiveValue: (v) => [
    () => v,
    (n) => {
      v = n;
    },
  ],
  createReactiveFunction: (fn) => {
    fn();
  },
};

export default api;
