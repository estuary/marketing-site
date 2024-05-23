import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Card from './Card';
import { Cards, Container, Title, Wrapper } from './styles';

const SectionThree = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CASE STUDIES</Title>
                <Cards>
                    <Card
                        title="CONNECT&GO"
                        description="Connect&GO lowers MySQL to Snowflake latency up to 180x, improves productivity 4x with Estuary."
                        href="/customers/connectngo/"
                        image={
                            <StaticImage
                                placeholder="none"
                                alt="Connect & Go logo"
                                src="../../../images/c&g-logo.png"
                                layout="constrained"
                            />
                        }
                    />
                    <Card
                        title="TRUE PLATFORM"
                        description="True Platform reduced its data pipeline spend by &gt;2x and discovered seamless, scalable data movement."
                        href="/customers/casestudy/trueplatform/"
                        image={
                            <StaticImage
                                placeholder="none"
                                alt="True Platform logo"
                                src="../../../images/true-logo.png"
                                layout="constrained"
                            />
                        }
                    />
                    <Card
                        title="SOLI & COMPANY"
                        description="Soli & Company trusts Estuary’s approachable pricing and quick setup to deliver change data capture solutions."
                        href="/customers/casestudy/soli_&_company/"
                        image={
                            <StaticImage
                                placeholder="none"
                                alt="Soli & Company logo"
                                src="../../../images/soli&company-logo.png"
                                layout="constrained"
                            />
                        }
                    />
                </Cards>
            </Wrapper>
        </Container>
    );
};

export default SectionThree;
