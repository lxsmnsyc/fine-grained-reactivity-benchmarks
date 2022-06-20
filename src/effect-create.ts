import { reactive } from "@vzn/reactivity";
import { effect } from "compostate";
import { createEffect } from "solid-js";
import createTemplate from "./template";

export default async function effectCreate() {
  await createTemplate({
    name: "effect-create",
    operations: [
      {
        name: "@vzn/reactivity",
        call() {
          reactive(() => {});
        },
      },
      {
        name: "compostate",
        call() {
          effect(() => {});
        },
      },
      {
        name: "solid-js",
        call() {
          createEffect(() => {});
        },
      },
    ],
  });
}
