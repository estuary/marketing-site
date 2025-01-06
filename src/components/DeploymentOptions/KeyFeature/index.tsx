import Checkmark from '../../../svgs/checkmark.svg';

interface KeyFeatureProps {
    title: string;
}

const KeyFeature = ({ title }: KeyFeatureProps) => {
    return (
        <li>
            <Checkmark width={16} color="var(--blue)" />
            <p>{title}</p>
        </li>
    );
};

export default KeyFeature;
