import { useState, useMemo, ChangeEvent } from 'react';
import {
    FormControl,
    OutlinedInput,
    Slider,
    styled,
    InputAdornment,
} from '@mui/material';
import clsx from 'clsx';
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
import ButtonFilled from '../LinksAndButtons/ButtonFilled';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';
import { dashboardRegisterUrl } from '../../../shared';
import { maxConnectors, selfServiceConnectorLimit } from './shared';
import {
    connectorsCounter,
    container,
    form,
    sliderWrapper,
    countInput,
    estuaryPrice,
    header,
    textWrapper,
    gbInput,
    divider,
    selector,
    priceComparisons,
    comparisons,
    brandWrapper,
    brandPrice,
    brandDetails,
    detail,
    highlightedBrandPrice,
    subSectionTitle,
    highlightedCard,
} from './styles.module.less';
import ComparisonCard from './ComparisonCard';

const inputLabel = 'Number of connector instances';

const numericStringRegex = /^\d*$/;

interface PricingCalculatorProps {
    isDarkTheme?: boolean;
}

const getClampedGBValue = (currentValue: number) => {
    if (!Number.isSafeInteger(currentValue)) {
        return 2000;
    }

    if (currentValue < 2) {
        return 2;
    }

    if (currentValue > 2000) {
        return 2000;
    }

    return currentValue;
};

const PricingSlider = styled(Slider)(() => {
    return {
        'color': '#5272EB',
        'width': '100%',
        'borderRadius': 3,
        'boxSizing': 'border-box',

        '& .MuiSlider-thumb': {
            'height': 28,
            'width': 28,
            'backgroundColor': '#5272EB',
            'boxShadow': '0px 2px 7px rgba(0, 0, 0, 0.25)',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.25)',
            },
            '&:before': {
                display: 'none',
            },
        },
        '& .MuiSlider-track': {
            height: 6,
        },
        '& .MuiSlider-rail': {
            color: '#B9C7F7',
            opacity: 1,
            height: 6,
            width: '101%',
            borderRadius: 3,
            left: 0,
        },
        '& .MuiSlider-markLabel': {
            'fontFamily': '"Inter", sans-serif',
            'top': '-60px',
            'fontSize': '1.25rem',
            'fontWeight': 500,
            'color': 'var(--grey)',

            '@media (max-width: 1200px)': {
                fontSize: '1rem',
            },

            '@media (max-width: 540px)': {
                fontSize: '0.875rem',
            },

            '@media (max-width: 400px)': {
                fontSize: '0.75rem',
            },
        },
        '& > .MuiSlider-mark': {
            color: '#5072EB50',
            backgroundColor: '#5072EB50 !important',
            height: '15px',
            width: '2.5px',
            top: '-12px',
        },
        '& > .MuiSlider-mark:nth-of-type(5n + 3)': {
            height: '24px',
            top: '-17px',
        },
    };
});

export const PricingCalculator = ({
    isDarkTheme = false,
}: PricingCalculatorProps) => {
    const [selectedGbs, setSelectedGbs] = useState(1);
    const [selectedConnectors, setSelectedConnectors] = useState(2);
    const [gbInputValue, setGbInputValue] = useState(
        scale(selectedGbs).toString()
    );

    const estuaryFreeTier =
        Number(gbInputValue) <= 10 && selectedConnectors <= 2;

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
        <div className={container}>
            <div className={header}>
                <div className={textWrapper}>
                    <h3 className={subSectionTitle}>Data moved</h3>
                    <p>
                        It&apos;s free up to 10 GB/month and 2 connector
                        instances.
                    </p>
                </div>
                <OutlinedInput
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
                    className={gbInput}
                />
            </div>
            <div className={sliderWrapper}>
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
            </div>
            <div className={divider} />
            <div className={connectorsCounter}>
                <h3 className={subSectionTitle}>
                    Choose number of sources and destinations.
                </h3>
                <div className={selector}>
                    <ButtonFilled
                        onClick={handleMinusClick}
                        disabled={selectedConnectors === 2}
                        aria-label={`decrease ${inputLabel}`}
                    >
                        <MinusSign color="var(--white)" />
                    </ButtonFilled>
                    <FormControl variant="outlined" className={form}>
                        <OutlinedInput
                            id="pricing-calculator-selector-input"
                            inputProps={{
                                style: {
                                    textAlign: 'center',
                                    color: isDarkTheme
                                        ? 'var(--white)'
                                        : 'var(--dark-blue)',
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
                            className={countInput}
                        />
                    </FormControl>
                    <ButtonFilled
                        onClick={handlePlusClick}
                        disabled={selectedConnectors === maxConnectors}
                        aria-label={`increase ${inputLabel}`}
                    >
                        <PlusSign color="var(--white)" />
                    </ButtonFilled>
                </div>
            </div>
            <div className={divider} />
            {selectedConnectors === maxConnectors ||
            selectedGbs === totalMarks ? (
                <OpenHubspotModal
                    buttonLabel="Need More? Contact us"
                    buttonId="section-one-hubspot"
                    formId="698e6716-f38b-4bd5-9105-df9ba220e29b"
                />
            ) : (
                <>
                    <div className={estuaryPrice}>
                        <h3 className={subSectionTitle}>
                            Your price at Estuary
                        </h3>
                        <div className={clsx(brandWrapper, highlightedCard)}>
                            <span
                                className={clsx(
                                    brandPrice,
                                    highlightedBrandPrice
                                )}
                            >
                                {estuaryFreeTier ? (
                                    <span>Free</span>
                                ) : (
                                    <>
                                        <span>
                                            {currencyFormatter.format(
                                                prices.estuary
                                            )}
                                        </span>{' '}
                                        / month
                                    </>
                                )}
                            </span>
                            <div className={brandDetails}>
                                <div className={detail}>
                                    <span>
                                        {/*This is hacky but works. We only reset the input on blur so while typing they could see incorrect info without this override*/}
                                        {gbInputValue === '0' ||
                                        gbInputValue === '1'
                                            ? '2'
                                            : gbInputValue}
                                        GB
                                    </span>{' '}
                                    of data moved
                                </div>
                                <div className={detail}>
                                    <span>{selectedConnectors}</span> connector
                                    instances
                                </div>
                            </div>
                        </div>
                        <OutboundLinkFilled
                            target="_blank"
                            href={dashboardRegisterUrl}
                        >
                            Try it Free
                        </OutboundLinkFilled>
                    </div>
                    <div className={priceComparisons}>
                        <h3 className={subSectionTitle}>Pricing comparisons</h3>
                        <div className={comparisons}>
                            <ComparisonCard
                                title="Confluent"
                                price={prices.confluent}
                            />
                            <ComparisonCard
                                title="Fivetran"
                                price={prices.fivetran}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
