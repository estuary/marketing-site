import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { Container } from "./styles";

import styled from 'styled-components';
import { globalMaxWidth } from '../globalStyles';

const Container = styled.div`
  ${globalMaxWidth}
`;

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout headerTheme="dark">
      <Container>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Layout>
  )
}

export const Head = () =>
  <Seo
    title="404: Not Found"
  />

export default NotFoundPage
