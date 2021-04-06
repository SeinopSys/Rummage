import { AppFooter } from 'components/AppFooter';
import { AppTitle } from 'components/AppTitle';
import { Game } from 'components/Game';
import Layout from 'components/Layout';
import { GetStaticProps } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Col, Row } from 'reactstrap';

const IndexPage = () => (
  <Layout>
    <Row className="justify-content-center">
      <Col className="py-5">
        <AppTitle />
        <Game />
        <AppFooter />
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;

export const getStaticProps: GetStaticProps<SSRConfig> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'words', 'game'])),
  },
});
