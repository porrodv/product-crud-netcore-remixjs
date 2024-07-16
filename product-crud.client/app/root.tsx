import { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, Meta, Scripts, ScrollRestoration } from '@remix-run/react';

import { Layout } from '~/layouts';
import '~/styles/global.css';

export const meta: MetaFunction = () => {
  return [
    { charSet: 'utf-8' },
    { title: 'Product CRUD' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'CRUD de lista de productos' },
    { property: 'og:type', content: 'website' },
  ];
};

// export const links: LinksFunction = () => {
//   return [
//     // { rel: 'icon', href: '/images/assets/ico.svg', type: 'image/jpg' },
//   ];
// };

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
