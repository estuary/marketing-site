import { Children, cloneElement, isValidElement, ReactElement } from 'react';
import { container } from './styles.module.less';

interface StepProps {
    isDarkTheme?: boolean;
    [key: string]: unknown;
}

interface StepCardsProps {
    children: React.ReactNode;
    isDarkTheme?: boolean;
}

const StepCards = ({ children, isDarkTheme = false }: StepCardsProps) => {
    return (
        <div className={container}>
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement<StepProps>, {
                        isDarkTheme,
                    });
                }
                return child;
            })}
        </div>
    );
};

export default StepCards;
