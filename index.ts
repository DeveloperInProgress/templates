export interface Template {
  name: string;
  description: string;
  remote: string;
  network: string;
  specVersion: '0.0.1' | '0.2.0';
}

export let templates: Template[] = [
  {
    name: 'subql-starter',
    description: 'Starter project for subquery',
    remote: 'https://github.com/subquery/subql-starter/tree/v0.2.0',
    network: 'polkadot',
    specVersion: '0.2.0',
  },
];
