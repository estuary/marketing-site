import { ReactNode } from 'react';
import CopyIcon from '../../../../svgs/copy.svg';
import { container } from './styles.module.less';

interface BoilerplateProps {
    title: string;
    text: ReactNode;
}

const Boilerplate = ({ title, text }: BoilerplateProps) => {
    return (
        <div className={container}>
            <div>
                <CopyIcon color="var(--blue)" />
                <h3>{title}</h3>
            </div>
            {text}
        </div>
    );
};

export default Boilerplate;
