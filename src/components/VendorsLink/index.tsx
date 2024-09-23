import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import XvsYFilter from '../XvsYFilter';

type VendorsLinkProps = {
    defaultFirstVendor: string;
    defaultSecondVendor: string;
    isDarkTheme?: boolean;
};

const VendorsLink = ({
    defaultFirstVendor,
    defaultSecondVendor,
    isDarkTheme,
}: VendorsLinkProps) => {
    const {
        allStrapiComparison: { nodes: vendors },
    } = useStaticQuery(graphql`
        query VendorsLink {
            allStrapiComparison {
                nodes {
                    id
                    name: Vendor_Name
                }
            }
        }
    `);

    const [firstVendor, setFirstVendor] = useState(defaultFirstVendor);
    const [secondVendor, setSecondVendor] = useState(defaultSecondVendor);

    const handleFirstVendorChange = (value: string) => setFirstVendor(value);
    const handleSecondVendorChange = (value: string) => setSecondVendor(value);

    const compareButtonHref = `/comparison/${firstVendor}-vs-${secondVendor}`;

    const vendorSelectItems = vendors?.map((vendor) => ({
        id: vendor.id,
        image: vendor.logo?.childImageSharp.gatsbyImageData,
        title: vendor.name,
    }));

    return (
        <XvsYFilter
            xSelect={{
                value: firstVendor,
                onChange: handleFirstVendorChange,
                items: vendorSelectItems,
            }}
            ySelect={{
                value: secondVendor,
                onChange: handleSecondVendorChange,
                items: vendorSelectItems,
            }}
            button={{
                title: 'Compare',
                href: compareButtonHref,
            }}
            isDarkTheme={isDarkTheme}
        />
    );
};

export default VendorsLink;
