import { ReactNode } from 'react';
import { container } from './styles.module.less';

interface SectionHeaderProps {
    title: ReactNode;
    description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
    return (
        <div className={container}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SectionHeader;
