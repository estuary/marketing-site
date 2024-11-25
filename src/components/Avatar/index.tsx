import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';
import { avatar } from './styles.module.less';

type Avatar = {
    image?: IGatsbyImageData;
    alt: string;
    name: string;
    loading?: 'eager' | 'lazy';
    size?: number;
};

const Avatar = ({ image, alt, name, loading = 'eager', size = 40 }: Avatar) => {
    return (
        <MuiAvatar className={avatar} sx={{ width: size, height: size }}>
            {image ? (
                <GatsbyImage image={image} alt={alt} loading={loading} />
            ) : (
                <MuiAvatar>{name.charAt(0).toUpperCase()}</MuiAvatar>
            )}
        </MuiAvatar>
    );
};

export default Avatar;
