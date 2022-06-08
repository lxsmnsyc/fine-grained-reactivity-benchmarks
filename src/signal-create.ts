import { signal } from 'compostate';
import { createSignal } from 'solid-js';
import createTemplate from './template';

export default async function signalCreate() {
  await createTemplate({
    name: 'signal-create',
    operations: [
      {
        name: 'compostate',
        call() {
          signal(0);
        },
      },
      {
        name: 'solid-js',
        call() {
          createSignal(0);
        },
      },
    ],
  });
}
