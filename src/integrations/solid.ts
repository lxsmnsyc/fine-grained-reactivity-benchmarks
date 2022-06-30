import { createEffect, createSignal } from "solid-js";
import { ReactiveApi } from "../types";

const api: ReactiveApi = {
  createReactiveValue: createSignal,
  createReactiveFunction: createEffect,
};

export default api;
