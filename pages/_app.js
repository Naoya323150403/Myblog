import Layout from '../components/layout';
import '../styles/globals.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;