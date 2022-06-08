import benny from 'benny';

interface TemplateOpts {
  name: string;
  operations: {
    name: string;
    call: () => void;
  }[];
}

export default async function createTemplate(opts: TemplateOpts): Promise<void> {
  await benny.suite(
    opts.name,
    ...opts.operations.map((item) => benny.add(item.name, () => item.call())),
    benny.cycle(),
    benny.complete(),
    benny.save({ file: opts.name, format: 'json' }),
    benny.save({ file: opts.name, format: 'chart.html' }),
  );
}
