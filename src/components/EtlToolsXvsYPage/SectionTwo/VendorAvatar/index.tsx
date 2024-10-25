import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Vendor } from '../../../../../shared';
import { tableHeaderVendor, tableLogoWrapper } from './styles.module.less';

interface VendorAvatarProps {
    vendor: Partial<Vendor>;
}

const VendorAvatar = React.forwardRef<HTMLTableCellElement, VendorAvatarProps>(
    ({ vendor }, ref) => {
        return (
            <th ref={ref}>
                <div className={tableHeaderVendor}>
                    <div className={tableLogoWrapper}>
                        <GatsbyImage
                            alt={`${vendor.name} logo`}
                            image={
                                vendor.logo.localFile.childImageSharp
                                    .gatsbyImageData
                            }
                        />
                    </div>
                    <span>{vendor.name}</span>
                </div>
            </th>
        );
    }
);

export default VendorAvatar;
