import React, { ReactNode } from 'react';
import { Container, IconWrapper, Number, Text } from './styles';

type StepProps = {
    icon: ReactNode;
    number: number;
    text: string;
    link?: ReactNode;
};

const Step = ({ icon, number, text, link }: StepProps) => {
    return (
        <Container>
            <IconWrapper>{icon}</IconWrapper>
            <Number>{number}</Number>
            <Text>
                {text}
                {link ? (
                    <>
                        {' ('}
                        {link}
                        {').'}
                    </>
                ) : null}
            </Text>
        </Container>
    );
};

export default Step;
