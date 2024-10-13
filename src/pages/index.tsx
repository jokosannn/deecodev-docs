import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageHeader from '../components/HomepageHeader';

export default function Home(): JSX.Element {
  return (
    <Layout title="Docs" description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
