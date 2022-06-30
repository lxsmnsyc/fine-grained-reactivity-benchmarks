import createTemplate from "../utils/template";
import integrations from "../integrations";

export default async function signalCreate() {
  await createTemplate({
    name: "effect-create",
    operations: Object.entries(integrations).map(([name, api]) => ({
      name,
      call() {
        api.createReactiveFunction(() => {});
      },
    })),
  });
}
