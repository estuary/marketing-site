import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { Container } from './styles';

type Avatar = {
    image?: IGatsbyImageData;
    alt: string;
    name: string;
    loading?: 'eager' | 'lazy';
    size?: string;
};

const Avatar = ({
    image,
    alt,
    name,
    loading = 'eager',
    size = '36px',
}: Avatar) => {
    return (
        <Container $hasImage={!!image} $imgSize={size}>
            {image ? (
                <GatsbyImage image={image} alt={alt} loading={loading} />
            ) : (
                <span>{name.charAt(0).toUpperCase()}</span>
            )}
        </Container>
    );
};

export default Avatar;
