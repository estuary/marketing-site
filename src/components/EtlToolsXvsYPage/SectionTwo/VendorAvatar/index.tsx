import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { tableHeaderVendor, tableLogoWrapper } from './styles.module.less';

const VendorAvatar = ({ vendor }) => (
    <th>
        <div className={tableHeaderVendor}>
            <div className={tableLogoWrapper}>
                <GatsbyImage
                    alt={`${vendor.name} logo`}
                    image={
                        vendor.logo.localFile.childImageSharp.gatsbyImageData
                    }
                />
            </div>
            <span>{vendor.name}</span>
        </div>
    </th>
);

export default VendorAvatar;
