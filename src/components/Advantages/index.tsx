import { ReactNode } from 'react';
import clsx from 'clsx';
import Container from '../Container';
import Advantage from './Advantage';

import {
    imageOnTheLeft,
    leftColumn,
    iconWrapper,
    darkTheme,
    rightColumn,
    ctaButtonsWrapper,
} from './styles.module.less';

type AdvantagesProps = {
    icon?: ReactNode;
    image?: ReactNode;
    title: ReactNode;
    subtitle?: string;
    advantages?: {
        id?: number;
        title: ReactNode;
    }[];
    ctaButtons?: ReactNode;
    isDarkTheme?: boolean;
    isImageOnTheLeft?: boolean;
    isReverseColumnOnMobile?: boolean;
};

const Advantages = ({
    icon,
    title,
    subtitle,
    image,
    advantages,
    ctaButtons,
    isDarkTheme = false,
    isImageOnTheLeft = false,
    isReverseColumnOnMobile = false,
}: AdvantagesProps) => {
    return (
        <Container
            className={isImageOnTheLeft ? imageOnTheLeft : null}
            isReverseColumnOnMobile={isReverseColumnOnMobile}
        >
            <div className={clsx(leftColumn, isDarkTheme ? darkTheme : null)}>
                {icon && !isDarkTheme ? <div className={iconWrapper}>{icon}</div> : null}
                <h2>{title}</h2>
                {subtitle ? <p>{subtitle}</p> : null}
                {advantages ? (
                    <ul>
                        {advantages.map((advantage, index) => (
                            <Advantage
                                key={`estuary-flow-advantage-${advantage.id ?? index}`}
                                title={advantage.title}
                            />
                        ))}
                    </ul>
                ) : null}
                {ctaButtons ? (
                    <div className={ctaButtonsWrapper}>{ctaButtons}</div>
                ) : null}
            </div>
            {image ? <div className={rightColumn}>{image}</div> : null}
        </Container>
    );
};

export default Advantages;
