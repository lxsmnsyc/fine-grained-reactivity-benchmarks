import { signal } from 'compostate';
import { createSignal } from 'solid-js';
import { createValue } from "@vzn/reactivity";
import createTemplate from './template';

const [a] = signal(0);
const [b] = createSignal(0);
const [getVznValue] = createValue(0);

export default async function signalRead() {
  await createTemplate({
    name: "signal-read",
    operations: [
      {
        name: "@vzn/reactivity",
        call() {
          getVznValue();
        },
      },
      {
        name: "compostate",
        call() {
          a();
        },
      },
      {
        name: "solid-js",
        call() {
          b();
        },
      },
    ],
  });
}
