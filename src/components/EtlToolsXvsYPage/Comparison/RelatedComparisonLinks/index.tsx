import React from 'react';
import { Link } from 'gatsby';
import {
    getComparisonSlug,
    getVendorsLinkId,
    Vendor,
} from '../../../../../shared';
import { container } from './styles.module.less';

interface RelatedComparisonLinksProps {
    vendors: Partial<Vendor>[];
    excludeVendorIds: string[];
    baseVendor: Vendor;
}

const RelatedComparisonLinks = ({
    vendors,
    excludeVendorIds,
    baseVendor,
}: RelatedComparisonLinksProps) => {
    return (
        <div className={container}>
            {vendors
                .filter(
                    (vendor) =>
                        vendor.id && !excludeVendorIds.includes(vendor.id)
                )
                .map((vendor) =>
                    vendor.slugKey ? (
                        <Link
                            id={`${getVendorsLinkId(baseVendor.name, vendor.name)}-link/related-comparisons-section/comparison-page`}
                            key={`related-comparison-link-${vendor.id}`}
                            to={`/${getComparisonSlug(baseVendor.slugKey, vendor.slugKey)}`}
                        >
                            {baseVendor.name} vs {vendor.name}
                        </Link>
                    ) : null
                )}
        </div>
    );
};

export default RelatedComparisonLinks;
