import { ReactNode } from 'react';
import { container, stepWrapper } from './styles.module.less';

interface StepProps {
    step?: ReactNode | number;
    title: ReactNode | string;
    description: string;
    link?: ReactNode;
}

const Step = ({ step, title, description, link }: StepProps) => {
    const StepElement = typeof step === 'number' ? 'span' : 'div';

    return (
        <div className={container}>
            <StepElement className={stepWrapper}>{step}</StepElement>
            <h3>{title}</h3>
            <p>
                {description}
                {link ? <span> ({link}).</span> : null}
            </p>
        </div>
    );
};

export default Step;
