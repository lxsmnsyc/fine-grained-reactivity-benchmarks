import { signal } from 'compostate';
import { createSignal } from 'solid-js';
import createTemplate from './template';

const [a, setA] = signal({});
const [b, setB] = createSignal({});

export default async function signalWrite() {
  await createTemplate({
    name: 'signal-write',
    operations: [
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
