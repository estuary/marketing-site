import * as React from 'react';
import { gByteLabel, gbPoints, marks, scale } from '../../utils';
import { PricingCalculatorContext } from './PricingCalculatorProvider';
import {
    CalculatorSubtitle,
    CalculatorTitle,
    PricingSlider,
    SliderWrapper,
} from './styles';

type PricingCalculatorProps = {
    title: string;
};

export const PricingCalculatorSlider = ({ title }: PricingCalculatorProps) => {
    const { selectedGbs, setSelectedGbs } = React.useContext(
        PricingCalculatorContext
    );

    const handleSliderChange = (_: any, val: number) => setSelectedGbs(val);

    return (
        <>
            <CalculatorTitle>{title}</CalculatorTitle>
            <CalculatorSubtitle>
                <span>{gByteLabel(scale(selectedGbs))} </span>
                of Change data
            </CalculatorSubtitle>
            <SliderWrapper>
                <PricingSlider
                    value={selectedGbs}
                    min={1}
                    max={gbPoints.length}
                    step={0.0001}
                    valueLabelFormat={(val) => gByteLabel(scale(val))}
                    valueLabelDisplay="auto"
                    marks={marks}
                    onChange={handleSliderChange}
                    aria-label="Amount of change data"
                />
            </SliderWrapper>
        </>
    );
};
