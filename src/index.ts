import effectCreate from './effect-create';
import signalCreate from './signal-create';
import signalRead from './signal-read';
import signalWrite from './signal-write';
import signalWrite1000Effects from './signal-write-1000-effects';

async function start() {
  await signalCreate();
  await effectCreate();
  await signalRead();
  await signalWrite();
  await signalWrite1000Effects();
}

start().then(
  () => {
    console.log('Done!');
  },
  (err) => {
    console.error(err);
    process.exit(1);
  },
);
