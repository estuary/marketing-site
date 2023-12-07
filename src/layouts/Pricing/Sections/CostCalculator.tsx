import React, { useState } from "react"
import { SvgIconProps, Typography, createSvgIcon } from "@mui/material"

import QuestionMarkSvg from "../../../svgs/question-mark.svg"
import QuestionMarkSvgWhite from "../../../svgs/question-mark-white.svg"
import PlusSign from "../../../svgs/plus-sign.svg"

import { ContextToolTip } from "../../../components/ContextTooltip"

import SliderComponent from "../PricingSlider"

import { currencyFormatter, marks, calculatePrice, scale, gByteLabel, gbPoints } from "../utils"

const QuestionIcon = createSvgIcon(QuestionMarkSvg({}), "Question Mark");
const QuestionIconWhite = createSvgIcon(QuestionMarkSvgWhite({}), "Question Mark");
const QuestionMarkIcon = React.forwardRef((props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => <QuestionIcon ref={ref} viewBox="0 0 32 32" {...props} />)
const QuestionMarkIconWhite = React.forwardRef((props: SvgIconProps, ref: React.Ref<SVGSVGElement>) => <QuestionIconWhite ref={ref} viewBox="0 0 32 32" {...props} />)

const PricingCostCalculator = () => {
    const [selectedGbs, setSelectedGbs] = useState(1);
    const [selectedConnectors, setSelectedConnectors] = useState(2);

    const prices = React.useMemo(() => calculatePrice(scale(selectedGbs), selectedConnectors), [selectedGbs, selectedConnectors])

    return (
        <div className="cost-calculator">
            <div className="heading">
                <h2>Pricing Comparison</h2>
            </div>
            <div className="cost-calculator-container">
                <div className="cost-calculator-left">
                    <div className="cost-calculator-subcontainer">
                        <div className="cost-calculator-title">
                            <p className="cost-calculator-left-title">Calculator</p>
                            <p className="cost-calculator-subtitle">{gByteLabel(scale(selectedGbs))} of Change Data</p>
                        
                        </div>
                        <div className="cost-calculator-slider">
                            <SliderComponent
                                value={selectedGbs}
                                min={1}
                                max={gbPoints.length}
                                step={0.0001}
                                valueLabelFormat={val => gByteLabel(scale(val))}
                                valueLabelDisplay="auto"
                                marks={marks}
                                // scale={scale}
                                onChange={(_, val: number) => setSelectedGbs(val)}
                            />
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="cost-calculator-title">
                            <p className="cost-calculator-subtitle">Number of Connectors</p>
                        </div>
                        <div className="count-input">
                            <div className="btn-left" onClick={() => setSelectedConnectors(c => Math.max(0, c - 1))}>
                                <svg
                                    width="15"
                                    height="2"
                                    viewBox="0 0 15 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        width="15"
                                        height="2"
                                        rx="1"
                                        fill="#ffffff"
                                    />
                                </svg>
                            </div>
                            <input className="cost-calculator-connector-input" type="number" value={selectedConnectors} onChange={evt => setSelectedConnectors(+evt.target.value)} />
                            <div className="btn-right" onClick={() => setSelectedConnectors(c => Math.max(0, c + 1))}>
                                <PlusSign />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="cost-calculator-results-wrapper">
                    <p className="results-title">
                        Results
                    </p>
                    <div className="results-text-wrapper">
                        <p className="results-subtitle">{currencyFormatter.format(prices.estuary)} / Month</p>
                        <ContextToolTip
                            placement="top-start"
                            title={(<Typography className="context-tooltip-text">
                                'Data moved' is defined as any incremental upsert event. You are only billed on the bytes of moving that particular new event. For example, a single database row being backfilled or updated will be billed based on the total size of the corresponding JSON document. One connector can operate on many tables inside a DB.
                            </Typography>)} >
                            <QuestionMarkIconWhite id="change-data" className="question-mark" />
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
                                        title={(<Typography className="context-tooltip-text">
                                            Competitor pricing estimates are based on publicly available data as of October 2023.
                                        </Typography>)} >
                                        <QuestionMarkIcon id="change-data" className="question-mark-dark" />
                                    </ContextToolTip>
                                </div>
                            </div>
                        </div>
                        <div className="comparisons-competitor">
                            <p>Fivetran</p>
                            <p>{currencyFormatter.format(prices.fivetran)} / Mo</p>
                        </div>
                        <div className="comparisons-competitor">
                            <p>Confluent</p>
                            <p>{currencyFormatter.format(prices.confluent)} / Mo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCostCalculator
