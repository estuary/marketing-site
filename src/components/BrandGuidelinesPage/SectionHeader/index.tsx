import { ReactNode } from 'react';
import { container } from './styles.module.less';

interface SectionHeaderProps {
    title: ReactNode;
    description: string;
    link?: ReactNode;
}

const SectionHeader = ({ title, description, link }: SectionHeaderProps) => {
    return (
        <div className={container}>
            <h2>{title}</h2>
            <div>
                <p>{description}</p>
                <div>{link}</div>
            </div>
        </div>
    );
};

export default SectionHeader;
