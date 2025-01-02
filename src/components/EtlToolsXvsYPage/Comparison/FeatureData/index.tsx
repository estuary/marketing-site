import { SubText } from '../../../../../shared';
import CheckOrCrossIcon from './CheckOrCrossIcon';
import DollarSigns from './DollarSigns';
import { cellTitleStyling } from './styles.module.less';

interface FeatureDataProps {
    icon?: boolean;
    cellTitle?: string;
    numberOfDollarSigns?: number[];
    subText: SubText;
}

const FeatureData = ({
    icon,
    cellTitle,
    subText,
    numberOfDollarSigns,
}: FeatureDataProps) => {
    return (
        <>
            <CheckOrCrossIcon icon={icon} />
            {cellTitle ? (
                <span className={cellTitleStyling}>{cellTitle}</span>
            ) : null}
            <DollarSigns numberOfDollarSigns={numberOfDollarSigns} />
            <div
                dangerouslySetInnerHTML={{
                    __html: subText.data.subText,
                }}
            />
        </>
    );
};

export default FeatureData;
