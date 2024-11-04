import * as React from 'react';
import {
    Button,
    CardContainer,
    CaseStudyDescription,
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
        <CardContainer>
            <CaseStudyLogoWrapper>{image}</CaseStudyLogoWrapper>
            <CaseStudyDescription>{description}.</CaseStudyDescription>
            <Button
                href={href}
                rel="noopener"
                aria-label={`Read case study for ${title}`}
            >
                Read
            </Button>
        </CardContainer>
    );
};

export default Card;
