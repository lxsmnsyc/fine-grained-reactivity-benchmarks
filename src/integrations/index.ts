import { ReactiveApi } from "../types";
import notReactiveApi from "./not-reactive";
import vznApi from "./vzn";
import compostateApi from "./compostate";
import solidApi from "./solid";
import obyApi from "./oby";

const integrations: { [key: string]: ReactiveApi } = {
  notReactive: notReactiveApi,
  vzn: vznApi,
  compostate: compostateApi,
  solid: solidApi,
  oby: obyApi,
};

export default integrations;
