import { Divider } from '@mui/material';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import {
    container,
    logoWrapper,
    logoVsLogoWrapper,
    divider,
} from './styles.module.less';

interface Vendor {
    name: string;
    logo?: IGatsbyImageData;
}

interface XvsYCardProps {
    xVendor: Vendor;
    yVendor: Vendor;
}

const XvsYCard = ({ xVendor, yVendor }: XvsYCardProps) => {
    return (
        <div className={container}>
            {xVendor.logo && yVendor.logo ? (
                <div className={logoVsLogoWrapper}>
                    <div className={logoWrapper}>
                        <GatsbyImage
                            alt={`${xVendor.name} logo`}
                            image={xVendor.logo}
                        />
                    </div>
                    <span>vs</span>
                    <div className={logoWrapper}>
                        <GatsbyImage
                            alt={`${yVendor.name} logo`}
                            image={yVendor.logo}
                        />
                    </div>
                </div>
            ) : null}
            <Divider className={divider} />
            <h3>
                {xVendor.name} vs {yVendor.name}
            </h3>
        </div>
    );
};

export default XvsYCard;
