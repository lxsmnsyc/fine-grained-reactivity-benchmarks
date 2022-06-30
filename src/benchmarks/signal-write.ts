import createTemplate from "../utils/template";
import integrations from "../integrations";

export default async function signalCreate() {
  await createTemplate({
    name: "signal-write",
    operations: Object.entries(integrations).map(([name, api]) => ({
      name,
      signal: api.createReactiveValue({}),
      call() {
        this.signal[1]({});
      },
    })),
  });
}
