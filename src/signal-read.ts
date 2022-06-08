import { signal } from 'compostate';
import { createSignal } from 'solid-js';
import createTemplate from './template';

const [a, setA] = signal(0);
const [b, setB] = createSignal(0);

export default async function signalRead() {
  await createTemplate({
    name: 'signal-read',
    operations: [
      {
        name: 'compostate',
        call() {
          a();
        },
      },
      {
        name: 'solid-js',
        call() {
          b();
        },
      },
    ],
  });
}
