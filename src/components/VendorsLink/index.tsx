import {
    useState,
    useMemo,
    useCallback,
    Dispatch,
    SetStateAction,
} from 'react';
import XvsYFilter from '../XvsYFilter';
import { getComparisonSlug, Vendor } from '../../../shared';

interface VendorsLinkProps {
    vendors: Vendor[];
    xVendor?: Vendor;
    yVendor?: Vendor;
    isDarkTheme?: boolean;
}

const createVendorSelectItems = (vendors: Vendor[], excludeVendorId: string) =>
    vendors
        .filter((vendor) => vendor.id !== excludeVendorId)
        .map((vendor) => ({
            id: vendor.id,
            image: vendor.logo.localFile,
            title: vendor.name,
        }));

const estuaryVendorStrapiId = 'd829928c-c473-5421-ac0a-f03c45b14993';

const selectPlaceholder = 'Please select a vendor';

const VendorsLink = ({
    vendors,
    xVendor,
    yVendor,
    isDarkTheme,
}: VendorsLinkProps) => {
    const defaultXVendorId = xVendor?.id ?? estuaryVendorStrapiId;
    const defaultYVendorId = yVendor?.id ?? selectPlaceholder;

    const [firstVendorId, setFirstVendorId] = useState(defaultXVendorId);
    const [secondVendorId, setSecondVendorId] = useState(defaultYVendorId);

    const handleVendorChange = useCallback(
        (setVendor: Dispatch<SetStateAction<string>>) => (value: string) => {
            setVendor(value);
        },
        []
    );

    const getVendorSlugKey = useCallback(
        (vendorId: string, fallbackVendor?: Vendor) =>
            vendors.find((v) => v.id === vendorId)?.slugKey ??
            fallbackVendor?.slugKey ??
            '',
        [vendors]
    );

    const firstVendorSlugKey = useMemo(
        () => getVendorSlugKey(firstVendorId, xVendor),
        [getVendorSlugKey, firstVendorId, xVendor]
    );

    const secondVendorSlugKey = useMemo(
        () => getVendorSlugKey(secondVendorId, yVendor),
        [getVendorSlugKey, secondVendorId, yVendor]
    );

    const compareButtonHref = useMemo(
        () => `/${getComparisonSlug(firstVendorSlugKey, secondVendorSlugKey)}`,
        [firstVendorSlugKey, secondVendorSlugKey]
    );

    const xVendorSelectItems = useMemo(
        () => createVendorSelectItems(vendors, secondVendorId),
        [vendors, secondVendorId]
    );

    const yVendorSelectItems = useMemo(
        () => createVendorSelectItems(vendors, firstVendorId),
        [vendors, firstVendorId]
    );

    return (
        <XvsYFilter
            xSelect={{
                value: firstVendorId,
                onChange: handleVendorChange(setFirstVendorId),
                items: xVendorSelectItems,
                placeholder: selectPlaceholder,
            }}
            ySelect={{
                value: secondVendorId,
                onChange: handleVendorChange(setSecondVendorId),
                items: yVendorSelectItems,
                placeholder: selectPlaceholder,
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
