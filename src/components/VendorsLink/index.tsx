import React, { useState, useMemo } from 'react';
import XvsYFilter from '../XvsYFilter';
import { Vendor } from '../../../shared';
import { getComparisonSlug } from '../EtlToolsPage/shared';

type VendorsLinkProps = {
    vendors: Vendor[];
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

const VendorsLink = ({ vendors, isDarkTheme }: VendorsLinkProps) => {
    const [firstVendorName, setFirstVendorName] = useState('Estuary Flow');
    const [secondVendorName, setSecondVendorName] = useState('Fivetran');

    const handleVendorChange =
        (setVendor: React.Dispatch<React.SetStateAction<string>>) =>
        (value: string) => {
            setVendor(value);
        };

    const firstVendorSlug = useMemo(
        () => vendors.find((v) => v.name === firstVendorName)?.slugKey ?? '',
        [vendors, firstVendorName]
    );

    const secondVendorSlug = useMemo(
        () => vendors.find((v) => v.name === secondVendorName)?.slugKey ?? '',
        [vendors, secondVendorName]
    );

    const compareButtonHref = useMemo(
        () =>
            `/etl-tools/${getComparisonSlug(firstVendorSlug, secondVendorSlug)}`,
        [firstVendorSlug, secondVendorSlug]
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
