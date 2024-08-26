import { InputLabel } from '@mui/material';
import * as React from 'react';
import MinusSign from '../../svgs/minus-sign.svg';
import PlusSign from '../../svgs/plus-sign.svg';
import { usePricingCalculator } from './PricingCalculatorProvider';
import {
    ButtonMinus,
    ButtonPlus,
    ConnectorsCounterWrapper,
    CountInput,
    Form,
} from './styles';
import { maxConnectors, selfServiceConnectorLimit } from './shared';

const inputLabel = 'Number of connectors';

export const PricingCalculatorSelector = () => {
    const { selectedConnectors, setSelectedConnectors, isDarkTheme } =
        usePricingCalculator();

    const handleMinusClick = () => {
        setSelectedConnectors((c) => Math.max(2, c - 1));
    };

    const handlePlusClick = () =>
        setSelectedConnectors((c) => Math.max(0, c + 1));

    const handleCountInputChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = parseInt(evt.target.value, 10);

        if (!Number.isNaN(value)) {
            const clampedValue = Math.max(2, Math.min(maxConnectors, value));
            setSelectedConnectors(clampedValue);
        }
    };

    return (
        <ConnectorsCounterWrapper>
            <ButtonMinus
                onClick={handleMinusClick}
                disabled={selectedConnectors === 2}
                aria-label={`decrease ${inputLabel}`}
            >
                <MinusSign color="#FFFFFF" />
            </ButtonMinus>
            <Form variant="outlined">
                <InputLabel
                    htmlFor="pricing-calculator-selector-input"
                    style={{ color: isDarkTheme ? '#FFFFFF' : '#04192B' }}
                >
                    {inputLabel}
                </InputLabel>
                <CountInput
                    id="pricing-calculator-selector-input"
                    label="Number of connectors"
                    inputProps={{
                        style: {
                            textAlign: 'center',
                            color: isDarkTheme ? '#FFFFFF' : '#04192B',
                        },
                        min: 2,
                        max: maxConnectors,
                    }}
                    value={
                        selectedConnectors > selfServiceConnectorLimit
                            ? `+${selfServiceConnectorLimit}`
                            : selectedConnectors.toString()
                    }
                    onChange={handleCountInputChange}
                    notched
                />
            </Form>
            <ButtonPlus
                onClick={handlePlusClick}
                disabled={selectedConnectors === maxConnectors}
                aria-label={`increase ${inputLabel}`}
            >
                <PlusSign color="#fff" />
            </ButtonPlus>
        </ConnectorsCounterWrapper>
    );
};
