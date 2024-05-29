import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { Container } from './styles';

type Avatar = {
    image?: IGatsbyImageData;
    alt: string;
    name: string;
};

const Avatar = ({ image, alt, name }: Avatar) => {
    return (
        <Container $hasImage={!!image}>
            {image ? (
                <GatsbyImage image={image} alt={alt} loading="eager" />
            ) : (
                <span>{name.charAt(0).toUpperCase()}</span>
            )}
        </Container>
    );
};

export default Avatar;
