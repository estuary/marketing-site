import React, { useState, useMemo, useCallback } from 'react';
import XvsYFilter from '../XvsYFilter';
import { Vendor } from '../../../shared';
import { getComparisonSlug } from '../EtlToolsPage/shared';

type VendorsLinkProps = {
    vendors: Vendor[];
    xVendor?: Vendor;
    yVendor?: Vendor;
    isDarkTheme?: boolean;
};

const createVendorSelectItems = (
    vendors: Vendor[],
    excludeVendorName: string
) =>
    vendors
        .filter((vendor) => vendor.name !== excludeVendorName)
        .map((vendor) => ({
            id: vendor.id,
            image: vendor.logo?.localFile.childImageSharp?.gatsbyImageData,
            title: vendor.name,
        }));

const VendorsLink = ({
    vendors,
    xVendor,
    yVendor,
    isDarkTheme,
}: VendorsLinkProps) => {
    const defaultXVendor = xVendor?.name ?? 'Estuary Flow';
    const defaultYVendor = yVendor?.name ?? 'Fivetran';

    const [firstVendorName, setFirstVendorName] = useState(defaultXVendor);
    const [secondVendorName, setSecondVendorName] = useState(defaultYVendor);

    const handleVendorChange = useCallback(
        (setVendor: React.Dispatch<React.SetStateAction<string>>) =>
            (value: string) => {
                setVendor(value);
            },
        []
    );

    const getVendorSlugKey = useCallback(
        (vendorName: string, fallbackVendor?: Vendor) =>
            fallbackVendor?.slugKey ??
            vendors.find((v) => v.name === vendorName)?.slugKey ??
            '',
        [vendors]
    );

    const firstVendorSlugKey = useMemo(
        () => getVendorSlugKey(firstVendorName, xVendor),
        [getVendorSlugKey, firstVendorName, xVendor]
    );

    const secondVendorSlugKey = useMemo(
        () => getVendorSlugKey(secondVendorName, yVendor),
        [getVendorSlugKey, secondVendorName, yVendor]
    );

    const compareButtonHref = useMemo(
        () =>
            `/etl-tools/${getComparisonSlug(firstVendorSlugKey, secondVendorSlugKey)}`,
        [firstVendorSlugKey, secondVendorSlugKey]
    );

    const xVendorSelectItems = useMemo(
        () => createVendorSelectItems(vendors, secondVendorName),
        [vendors, secondVendorName]
    );

    const yVendorSelectItems = useMemo(
        () => createVendorSelectItems(vendors, firstVendorName),
        [vendors, firstVendorName]
    );

    return (
        <XvsYFilter
            xSelect={{
                value: firstVendorName,
                onChange: handleVendorChange(setFirstVendorName),
                items: xVendorSelectItems,
            }}
            ySelect={{
                value: secondVendorName,
                onChange: handleVendorChange(setSecondVendorName),
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
