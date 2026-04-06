import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Trang chủ"
      description="Trợ giúp, hướng dẫn và quy định — tìm nhanh thông tin bạn cần.">
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <Heading as="h1" className={styles.heroTitle}>
            Xin chào! <br /> <strong>{siteConfig.title}</strong> có thể giúp gì cho bạn?
          </Heading>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
