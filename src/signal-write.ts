import { createValue } from '@vzn/reactivity';
import { signal } from 'compostate';
import { createSignal } from 'solid-js';
import createTemplate from './template';

const [, setA] = signal({});
const [, setB] = createSignal({});
const [, setVznValue] = createValue({});

export default async function signalWrite() {
  await createTemplate({
    name: 'signal-write',
    operations: [
      {
        name: '@vzn/reactivity',
        call() {
          setVznValue({});
        },
      },
      {
        name: 'compostate',
        call() {
          setA({});
        },
      },
      {
        name: 'solid-js',
        call() {
          setB({});
        },
      },
    ],
  });
}
