import createTemplate from "../utils/template";
import integrations from "../integrations";

const operations = Object.entries(integrations).map(([name, api]) => ({
  name,
  api,
  signal: api.createReactiveValue({}),
  call() {
    this.signal[1]({});
  },
}));

for (let i = 0; i < 1000; i += 1) {
  operations.forEach((op) => {
    op.api.createReactiveFunction(op.signal[0]);
  });
}

export default async function signalCreate() {
  await createTemplate({
    name: "signal-write-1000-effects",
    operations,
  });
}
