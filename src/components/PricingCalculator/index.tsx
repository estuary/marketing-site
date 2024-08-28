import React, { useState, useMemo, ChangeEvent } from 'react';
import { InputAdornment } from '@mui/material';
import {
    calculatePrice,
    currencyFormatter,
    gByteLabel,
    inverseScale,
    marks,
    scale,
    totalMarks,
} from '../../utils';
import MinusSign from '../../svgs/minus-sign.svg';
import PlusSign from '../../svgs/plus-sign.svg';
import OpenHubspotModal from '../HubSpot/OpenModal';
import { maxConnectors, selfServiceConnectorLimit } from './shared';
import {
    ButtonMinus,
    Description,
    ConnectorsCounter,
    Container,
    Form,
    PricingSlider,
    SliderWrapper,
    ButtonPlus,
    CountInput,
    EstuaryPrice,
    Header,
    TextWrapper,
    GbInput,
    Divider,
    Selector,
    PriceComparisons,
    Comparisons,
    BrandWrapper,
    BrandPrice,
    BrandDetails,
    Detail,
} from './styles';
import ComparisonCard from './ComparisonCard';

const inputLabel = 'Number of connectors';

const numericStringRegex = /^\d*$/;

interface PricingCalculatorProps {
    isDarkTheme?: boolean;
}

const getClampedGBValue = (currentValue: number) => {
    if (currentValue < 2) {
        return 2;
    } else if (currentValue > 2000) {
        return 2000;
    }

    return currentValue;
};

export const PricingCalculator = ({
    isDarkTheme = false,
}: PricingCalculatorProps) => {
    const [selectedGbs, setSelectedGbs] = useState(1);
    const [selectedConnectors, setSelectedConnectors] = useState(2);
    const [gbInputValue, setGbInputValue] = useState(
        scale(selectedGbs).toString()
    );

    const prices = useMemo(
        () => calculatePrice(scale(selectedGbs), selectedConnectors),
        [selectedGbs, selectedConnectors]
    );

    const handleMinusClick = () => {
        setSelectedConnectors((c) => Math.max(2, c - 1));
    };

    const handlePlusClick = () =>
        setSelectedConnectors((c) => Math.max(0, c + 1));

    const handleCountInputChange = (
        evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = parseInt(evt.target.value, 10);

        if (!Number.isNaN(value)) {
            const clampedValue = Math.max(2, Math.min(maxConnectors, value));
            setSelectedConnectors(clampedValue);
        }
    };

    const handleSliderChange = (_: any, val: number) => {
        setSelectedGbs(val);
        setGbInputValue(scale(val).toFixed());
    };

    const handleGbInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (numericStringRegex.test(inputValue)) {
            const numericValue = Number(inputValue);

            setGbInputValue(numericValue.toString());
            setSelectedGbs(inverseScale(getClampedGBValue(numericValue)));
        }
    };

    const handleGbInputBlur = () => {
        const numericValue = getClampedGBValue(Number(gbInputValue));

        setGbInputValue(numericValue.toString());
        setSelectedGbs(inverseScale(numericValue));
    };

    return (
        <Container>
            <Header>
                <TextWrapper>
                    <h3 className="sub-section-title">Data moved</h3>
                    <Description>
                        Choose the amount of data you are going to move.
                    </Description>
                </TextWrapper>
                <GbInput
                    endAdornment={
                        <InputAdornment position="end">GB</InputAdornment>
                    }
                    inputProps={{
                        'aria-label': 'Data moved in GB',
                        'inputMode': 'numeric',
                        'min': '0',
                    }}
                    value={gbInputValue}
                    onChange={handleGbInputValueChange}
                    onBlur={handleGbInputBlur}
                />
            </Header>
            <SliderWrapper>
                <PricingSlider
                    value={selectedGbs}
                    min={1}
                    max={totalMarks}
                    step={0.1}
                    valueLabelFormat={(val) => gByteLabel(scale(val))}
                    valueLabelDisplay="auto"
                    marks={marks}
                    onChange={handleSliderChange}
                    aria-label="Amount of change data"
                />
            </SliderWrapper>
            <Divider />
            <ConnectorsCounter>
                <h3 className="sub-section-title">
                    Choose number of connectors
                </h3>
                <Selector>
                    <ButtonMinus
                        onClick={handleMinusClick}
                        disabled={selectedConnectors === 2}
                        aria-label={`decrease ${inputLabel}`}
                    >
                        <MinusSign color="#FFFFFF" />
                    </ButtonMinus>
                    <Form variant="outlined">
                        <CountInput
                            id="pricing-calculator-selector-input"
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
                        />
                    </Form>
                    <ButtonPlus
                        onClick={handlePlusClick}
                        disabled={selectedConnectors === maxConnectors}
                        aria-label={`increase ${inputLabel}`}
                    >
                        <PlusSign color="#fff" />
                    </ButtonPlus>
                </Selector>
            </ConnectorsCounter>
            <Divider />
            {selectedConnectors === maxConnectors ||
            selectedGbs === totalMarks ? (
                <OpenHubspotModal
                    buttonLabel="Need More? Contact us"
                    buttonId="section-one-hubspot"
                />
            ) : (
                <>
                    <EstuaryPrice>
                        <h3 className="sub-section-title">
                            Your price at Estuary
                        </h3>
                        <BrandWrapper className="highlighted-card">
                            <BrandPrice className="highlighted-brand-price">
                                <span>
                                    {currencyFormatter.format(prices.estuary)}
                                </span>{' '}
                                / month
                            </BrandPrice>
                            <BrandDetails>
                                <Detail>
                                    <span>
                                        {/*This is hacky but works. We only reset the input on blur so while typing they could see incorrect info without this override*/}
                                        {gbInputValue === '0' ||
                                        gbInputValue === '1'
                                            ? '2'
                                            : gbInputValue}
                                        GB
                                    </span>{' '}
                                    of data moved
                                </Detail>
                                <Detail>
                                    <span>{selectedConnectors}</span> connectors
                                </Detail>
                            </BrandDetails>
                        </BrandWrapper>
                    </EstuaryPrice>
                    <PriceComparisons>
                        <h3 className="sub-section-title">
                            Pricing comparisons
                        </h3>
                        <Comparisons>
                            <ComparisonCard
                                title="Confluent"
                                price={prices.confluent}
                            />
                            <ComparisonCard
                                title="Fivetran"
                                price={prices.fivetran}
                            />
                        </Comparisons>
                    </PriceComparisons>
                </>
            )}
        </Container>
    );
};
