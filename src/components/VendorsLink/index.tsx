import React, { useState, useMemo } from 'react';
import XvsYFilter from '../XvsYFilter';
import { Vendor } from '../../../shared';

type VendorsLinkProps = {
    vendors: Vendor[];
    defaultFirstVendor: Vendor;
    defaultSecondVendor: Vendor;
    isDarkTheme?: boolean;
};

const createVendorSelectItems = (vendors: Vendor[], excludeVendor: string) =>
    vendors
        .filter((vendor) => vendor.name !== excludeVendor)
        .map((vendor) => ({
            id: vendor.id,
            image: vendor.logo?.localFile.childImageSharp?.gatsbyImageData,
            title: vendor.name,
        }));

const VendorsLink = ({
    vendors,
    defaultFirstVendor,
    defaultSecondVendor,
    isDarkTheme,
}: VendorsLinkProps) => {
    const [firstVendor, setFirstVendor] = useState(defaultFirstVendor.name);
    const [secondVendor, setSecondVendor] = useState(defaultSecondVendor.name);

    const handleVendorChange =
        (setVendor: React.Dispatch<React.SetStateAction<string>>) =>
        (value: string) => {
            setVendor(value);
        };

    const compareButtonHref = `/etl-tools/${vendors.find((v) => v.name === firstVendor)?.slugKey}-vs-${vendors.find((v) => v.name === secondVendor)?.slugKey}`;

    const xVendorSelectItems = useMemo(
        () => createVendorSelectItems(vendors, secondVendor),
        [vendors, secondVendor]
    );
    const yVendorSelectItems = useMemo(
        () => createVendorSelectItems(vendors, firstVendor),
        [vendors, firstVendor]
    );

    return (
        <XvsYFilter
            xSelect={{
                value: firstVendor,
                onChange: handleVendorChange(setFirstVendor),
                items: xVendorSelectItems,
            }}
            ySelect={{
                value: secondVendor,
                onChange: handleVendorChange(setSecondVendor),
                items: yVendorSelectItems,
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
