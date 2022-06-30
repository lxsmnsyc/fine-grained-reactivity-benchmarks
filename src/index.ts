import signalCreate from "./benchmarks/signal-create";
import signalRead from "./benchmarks/signal-read";
import signalWrite from "./benchmarks/signal-write";
import effectCreate from "./benchmarks/effect-create";
import signalWrite1000Effects from "./benchmarks/signal-write-1000-effects";

async function start() {
  await signalCreate();
  await signalRead();
  await signalWrite();
  await effectCreate();
  await signalWrite1000Effects();
}

start().then(
  () => {
    console.log("Done!");
  },
  (err) => {
    console.error(err);
    process.exit(1);
  }
);
