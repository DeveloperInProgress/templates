import https from 'https';

const TEMPLATES_REMOTE = 'https://raw.githubusercontent.com/subquery/templates/dev/templates.json';

export type Network = 'Polkadot' | 'Kusama' | 'Acala' | 'Moonriver';

export interface Template {
  name: string;
  description: string;
  remote: string;
  network: Network;
  specVersion: '0.0.1' | '0.2.0';
}

// Fetch templates from remote
export function fromRemote() {
  let body = '';
  https.get(TEMPLATES_REMOTE, (response) => {
    response.on('data', (chunk) => {
      body += chunk;
    });

    response.on('end', () => {
      console.log(body);
      const templates = JSON.parse(body) as Template[];
      console.log(templates);
    });

    response.on('error', () => {});
  });
}
