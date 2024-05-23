import { InputLabel } from '@mui/material';
import * as React from 'react';
import MinusSign from '../../svgs/minus-sign.svg';
import PlusSign from '../../svgs/plus-sign.svg';
import { PricingCalculatorContext } from './PricingCalculatorProvider';
import {
    ButtonMinus,
    ButtonPlus,
    ConnectorsCounterWrapper,
    CountInput,
    Form,
} from './styles';

const inputLabel = 'Number of connectors';

export const PricingCalculatorSelector = () => {
    const pricingCalculator = React.useContext(PricingCalculatorContext);

    const handleMinusClick = () => {
        pricingCalculator?.setSelectedConnectors((c) => Math.max(2, c - 1));
    };

    const handlePlusClick = () =>
        pricingCalculator?.setSelectedConnectors((c) => Math.max(0, c + 1));

    const handleCountInputChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = parseInt(evt.target.value, 10);
        pricingCalculator?.setSelectedConnectors(value >= 2 ? value : 2);
    };

    return (
        <ConnectorsCounterWrapper>
            <ButtonMinus
                onClick={handleMinusClick}
                disabled={pricingCalculator?.selectedConnectors === 2}
                aria-label={`decrease ${inputLabel}`}
            >
                <MinusSign />
            </ButtonMinus>
            <Form variant="outlined">
                <InputLabel htmlFor="pricing-calculator-selector-input">
                    {inputLabel}
                </InputLabel>
                <CountInput
                    id="pricing-calculator-selector-input"
                    label="Number of connectors"
                    inputProps={{
                        style: { textAlign: 'center' },
                        min: 2,
                    }}
                    type="number"
                    value={pricingCalculator?.selectedConnectors}
                    onChange={handleCountInputChange}
                    notched
                />
            </Form>
            <ButtonPlus
                onClick={handlePlusClick}
                aria-label={`increase ${inputLabel}`}
            >
                <PlusSign />
            </ButtonPlus>
        </ConnectorsCounterWrapper>
    );
};
