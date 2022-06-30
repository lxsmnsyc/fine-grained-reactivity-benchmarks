import createTemplate from "../utils/template";
import integrations from "../integrations";

export default async function signalCreate() {
  await createTemplate({
    name: "signal-create",
    operations: Object.entries(integrations).map(([name, api]) => ({
      name,
      call() {
        api.createReactiveValue(0);
      },
    })),
  });
}
