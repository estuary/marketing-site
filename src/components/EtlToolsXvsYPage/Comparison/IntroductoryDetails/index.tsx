import { Vendor } from '../../../../../shared';
import { container } from './styles.module.less';

interface IntroductoryDetailsProps {
    isThreeVendorComparison: boolean;
    estuaryVendor: Vendor;
    xVendor: Vendor;
    yVendor: Vendor;
}

const VendorDetails = ({ vendor }: { vendor: Vendor }) => {
    const vendorId = vendor.name.replace(' ', '-');

    return (
        <>
            <h2 id={vendorId}>{vendor.name}</h2>
            <div
                dangerouslySetInnerHTML={{
                    __html: vendor.introductoryDetails.introduction.data
                        .introduction,
                }}
            />
            <h3 id={`${vendorId}-pros`}>Pros</h3>
            <div
                dangerouslySetInnerHTML={{
                    __html: vendor.introductoryDetails.pros.data.pros,
                }}
            />
            <h3 id={`${vendorId}-cons`}>Cons</h3>
            <div
                dangerouslySetInnerHTML={{
                    __html: vendor.introductoryDetails.cons.data.cons,
                }}
            />
            <h3 id={`${vendorId}-pricing`}>{vendor.name} Pricing</h3>
            <div
                dangerouslySetInnerHTML={{
                    __html: vendor.introductoryDetails.pricing.data.pricing,
                }}
            />
        </>
    );
};

const IntroductoryDetails = ({
    isThreeVendorComparison,
    estuaryVendor,
    xVendor,
    yVendor,
}: IntroductoryDetailsProps) => {
    return (
        <div className={container}>
            <VendorDetails vendor={xVendor} />
            <VendorDetails vendor={yVendor} />
            {isThreeVendorComparison ? (
                <VendorDetails vendor={estuaryVendor} />
            ) : null}
        </div>
    );
};

export default IntroductoryDetails;
