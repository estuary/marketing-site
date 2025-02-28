import { Divider } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    getComparisonSlug,
    getVendorsLinkId,
    Vendor,
} from '../../../../../shared';
import {
    container,
    logoWrapper,
    logoVsLogoWrapper,
    divider,
} from './styles.module.less';

interface XvsYCardProps {
    xVendor: Vendor;
    yVendor: Vendor;
}

const XvsYCard = ({ xVendor, yVendor }: XvsYCardProps) => {
    const xVendorLogo = getImage(
        xVendor.logo.localFile.childImageSharp.gatsbyImageData
    );

    const yVendorLogo = getImage(
        yVendor.logo.localFile.childImageSharp.gatsbyImageData
    );

    return (
        <a
            id={`${getVendorsLinkId(xVendor.name, yVendor.name)}-comparison/list-of-comparisons/all-comparisons-page`}
            href={`/${getComparisonSlug(xVendor.slugKey, yVendor.slugKey)}`}
            className={container}
        >
            {xVendorLogo && yVendorLogo ? (
                <div className={logoVsLogoWrapper}>
                    <div className={logoWrapper}>
                        <GatsbyImage
                            alt={`${xVendor.name} logo`}
                            image={xVendorLogo}
                        />
                    </div>
                    <span>vs</span>
                    <div className={logoWrapper}>
                        <GatsbyImage
                            alt={`${yVendor.name} logo`}
                            image={yVendorLogo}
                        />
                    </div>
                </div>
            ) : null}
            <Divider className={divider} />
            <h3>
                {xVendor.name} vs {yVendor.name}
            </h3>
        </a>
    );
};

export default XvsYCard;
