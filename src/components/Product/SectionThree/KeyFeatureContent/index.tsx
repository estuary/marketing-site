import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMediaQuery } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionContent,
    ChevronIconWrapper,
    Container,
    IconWrapper,
    Title,
} from './styles';

type KeyFeatureContentProps = {
    title: string;
    description: ReactNode;
    icon: ReactNode;
    isReversed?: boolean;
};

const KeyFeatureContent = ({
    title,
    description,
    icon,
    isReversed = false,
}: KeyFeatureContentProps) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const isMobile = useMediaQuery('(max-width:810px)');

    const handleAccordionOpen = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <Accordion elevation={0} expanded={isMobile ? isAccordionOpen : false}>
            <AccordionButton
                onClick={handleAccordionOpen}
                expandIcon={
                    <ChevronIconWrapper>
                        <ExpandMoreIcon width={24} htmlColor="#ffffff" />
                    </ChevronIconWrapper>
                }
            >
                <Container $isReversed={isReversed}>
                    <IconWrapper>{icon}</IconWrapper>
                    <Title>{title}</Title>
                </Container>
            </AccordionButton>
            <AccordionContent>{description}</AccordionContent>
        </Accordion>
    );
};

export default KeyFeatureContent;
