---
title: 'Next.jsでmarkdownブログを構築'
date: '2024-07-13'
description: 'Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。'
image: nextjs.png
categories: ['react']
---
## 目次



Next.js を利用して Markdown のブログサイトを一から作成します。

## Next.js の準備

### プロジェクトの作成

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

```js[class="line-numbers"]
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/prism.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

```

![inu.png](https://myblog-naoya323150403.vercel.app/public/inu.png)