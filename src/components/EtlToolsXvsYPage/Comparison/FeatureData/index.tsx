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
            {icon ? <CheckOrCrossIcon icon={icon} /> : null}
            {cellTitle ? (
                <span className={cellTitleStyling}>{cellTitle}</span>
            ) : null}
            {numberOfDollarSigns ? (
                <DollarSigns numberOfDollarSigns={numberOfDollarSigns} />
            ) : null}
            <div
                dangerouslySetInnerHTML={{
                    __html: subText.data.subText,
                }}
            />
        </>
    );
};

export default FeatureData;
