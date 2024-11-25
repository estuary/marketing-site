import React, { ReactNode } from 'react';
import { container, iconWrapper } from './styles.module.less';

type StepProps = {
    icon: ReactNode;
    number: number;
    text: string;
    link?: ReactNode;
};

const Step = ({ icon, number, text, link }: StepProps) => {
    return (
        <div className={container}>
            <div className={iconWrapper}>{icon}</div>
            <h3>{number}</h3>
            <p>
                {text}
                {link ? (
                    <>
                        {' ('}
                        {link}
                        {').'}
                    </>
                ) : null}
            </p>
        </div>
    );
};

export default Step;
