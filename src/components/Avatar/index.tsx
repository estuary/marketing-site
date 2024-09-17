import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { Avatar as LetterAvatar } from '@mui/material';
import { Container } from './styles';

type Avatar = {
    image?: IGatsbyImageData;
    alt: string;
    name: string;
    loading?: 'eager' | 'lazy';
    size?: number;
};

const Avatar = ({ image, alt, name, loading = 'eager', size = 40 }: Avatar) => {
    return (
        <Container sx={{ width: size, height: size }}>
            {image ? (
                <GatsbyImage image={image} alt={alt} loading={loading} />
            ) : (
                <LetterAvatar>{name.charAt(0).toUpperCase()}</LetterAvatar>
            )}
        </Container>
    );
};

export default Avatar;
