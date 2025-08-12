import { ReactNode } from 'react';
import clsx from 'clsx';
import { container, stepWrapper, darkTheme } from './styles.module.less';

interface StepProps {
    step?: ReactNode | number;
    title: ReactNode | string;
    description: string;
    link?: ReactNode;
    isDarkTheme?: boolean;
}

const Step = ({
    step,
    title,
    description,
    link,
    isDarkTheme = false,
}: StepProps) => {
    const StepElement = typeof step === 'number' ? 'span' : 'div';

    return (
        <div className={clsx(container, isDarkTheme && darkTheme)}>
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
