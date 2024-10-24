import * as React from 'react';

import styled from 'styled-components';
import Layout from '../components/Layout';
import Seo from '../components/seo';

import { globalMaxWidth } from '../globalStyles';

const Container = styled.div`
    ${globalMaxWidth}
`;

const NotFoundPage = () => {
    return (
        <Layout>
            <Container>
                <h1>404: Not Found</h1>
                <p>
                    You just hit a route that doesn&#39;t exist... the sadness.
                </p>
            </Container>
        </Layout>
    );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
