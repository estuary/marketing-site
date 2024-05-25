import { SvgIconProps, Typography, createSvgIcon } from '@mui/material';
import React from 'react';

import questionMarkSvgWhite from '../../../svgs/question-mark-white.svg';
import questionMarkSvg from '../../../svgs/question-mark.svg';

import { ContextToolTip } from '../../../components/ContextTooltip';

import { PricingCalculator } from '../../../components/PricingCalculator';
import { PricingCalculatorContext } from '../../../components/PricingCalculator/PricingCalculatorProvider';
import { currencyFormatter, gByteLabel, scale } from '../../../utils';

const QuestionIcon = createSvgIcon(questionMarkSvg({}), 'Question Mark');
const QuestionIconWhite = createSvgIcon(
    questionMarkSvgWhite({}),
    'Question Mark'
);
const QuestionMarkIcon = React.forwardRef(
    (props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => (
        <QuestionIcon ref={ref} viewBox="0 0 32 32" {...props} />
    )
);
const QuestionMarkIconWhite = React.forwardRef(
    (props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => (
        <QuestionIconWhite ref={ref} viewBox="0 0 32 32" {...props} />
    )
);

const PricingCostCalculator = () => {
    const { prices, selectedGbs, selectedConnectors } = React.useContext(
        PricingCalculatorContext
    );

    return (
        <div className="cost-calculator">
            <div className="heading">
                <h2>Pricing Comparison</h2>
            </div>
            <div className="cost-calculator-container">
                <div className="cost-calculator-left">
                    <div className="cost-calculator-subcontainer">
                        <PricingCalculator.Slider title="Calculator" />
                        <PricingCalculator.Selector />
                    </div>
                </div>
                <div className="cost-calculator-results-wrapper">
                    <p className="results-title">Results</p>
                    <div className="results-text-wrapper">
                        <p className="results-subtitle">
                            {currencyFormatter.format(prices.estuary)} / Month
                        </p>
                        <ContextToolTip
                            placement="top-start"
                            title={
                                <Typography className="context-tooltip-text">
                                    &apos;Data moved&apos; is defined as any
                                    incremental upsert event. You are only
                                    billed on the bytes of moving that
                                    particular new event. For example, a single
                                    database row being backfilled or updated
                                    will be billed based on the total size of
                                    the corresponding JSON document. One
                                    connector can operate on many tables inside
                                    a DB.
                                </Typography>
                            }
                        >
                            <QuestionMarkIconWhite
                                id="change-data"
                                className="question-mark"
                            />
                        </ContextToolTip>
                    </div>
                    <p className="results-subtext">
                        {gByteLabel(scale(selectedGbs))} of data moved
                    </p>
                    <p className="results-subtext">
                        {selectedConnectors} connectors
                    </p>
                </div>
                <div className="cost-calculator-right">
                    <div className="comparisons-wrapper">
                        <div className="cost-calculator-right-wrapper">
                            <p className="cost-calculator-left-title">
                                Comparisons
                            </p>
                        </div>
                        <div className="content-bottom">
                            <div className="cost-calculator-right-wrapper">
                                <div className="comparisons-competition">
                                    <p className="comparisons-subtext">
                                        The Competition
                                    </p>
                                    <ContextToolTip
                                        placement="top-start"
                                        title={
                                            <Typography className="context-tooltip-text">
                                                Competitor pricing estimates are
                                                based on publicly available data
                                                as of October 2023.
                                            </Typography>
                                        }
                                    >
                                        <QuestionMarkIcon
                                            id="change-data"
                                            className="question-mark-dark"
                                        />
                                    </ContextToolTip>
                                </div>
                            </div>
                        </div>
                        <div className="comparisons-competitor">
                            <p>Fivetran</p>
                            <p>
                                {currencyFormatter.format(prices.fivetran)} / Mo
                            </p>
                        </div>
                        <div className="comparisons-competitor">
                            <p>Confluent</p>
                            <p>
                                {currencyFormatter.format(prices.confluent)} /
                                Mo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCostCalculator;
