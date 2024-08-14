import * as React from 'react';
import {
    Button,
    Container,
    CaseStudyDescription,
    CaseStudyTitle,
    CaseStudyLogoWrapper,
} from './styles';

type CardProps = {
    href: string;
    title: string;
    description: string;
    image: React.ReactNode;
};

const Card = ({ href, title, description, image }: CardProps) => {
    return (
        <Container>
            <CaseStudyLogoWrapper>{image}</CaseStudyLogoWrapper>
            <CaseStudyTitle>{title}</CaseStudyTitle>
            <CaseStudyDescription>{description}</CaseStudyDescription>
            <Button
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={`Read case study for ${title}`}
            >
                Read
            </Button>
        </Container>
    );
};

export default Card;
