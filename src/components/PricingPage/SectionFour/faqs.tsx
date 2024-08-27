import React from 'react';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import {
    pricingExamplesImageWrapper,
    pricingExamplesTextWrapper,
    answerSection,
    answerSections,
    flexDirectionColumn,
    flexDirectionColumnReverse,
} from './styles.module.less';

export const faqs = [
    {
        questionNumber: 1,
        question: 'How is my bill calculated?',
        content: (
            <>
                <h4>Your bill has two main components:</h4>
                <p>
                    <span>1. Data Usage:</span> Based on the volume of data
                    Sourced, Transformed, and Delivered.
                </p>
                <p>
                    <span>2. Connector Fees:</span> First 6 connectors cost
                    $100/month each, additional connectors are $50/month each.{' '}
                    <br />
                    The free tier allows indefinite use with a 10 GB/month limit
                    for up to 2 connectors. Cloud Plan customers can request a
                    30-day free trial.
                </p>
            </>
        ),
    },
    {
        questionNumber: 2,
        question: 'Do you offer discounted rates?',
        content: (
            <p>
                Yes, discounts are available based on volume commitments and
                contract duration.
            </p>
        ),
    },
    {
        questionNumber: 3,
        question: 'How does Pay-as-you-Go pricing work?',
        content: (
            <p>
                For new users or those not wanting to commit to specific data
                volumes, pay monthly based on actual data usage and active
                connectors. Payments are processed via Stripe and a credit card
                can be added.
            </p>
        ),
    },
    {
        questionNumber: 4,
        question: 'How does pre-pay work?',
        content: (
            <p>
                Pay upfront for a fixed data transfer amount, usable over up to
                12 months. Higher upfront payments receive greater discounts.
            </p>
        ),
    },
    {
        questionNumber: 5,
        question: 'What are pricing examples?',
        content: (
            <div className={answerSections}>
                <div
                    className={clsx(answerSection, flexDirectionColumnReverse)}
                >
                    <div className={pricingExamplesTextWrapper}>
                        <h4>STREAMING ETL</h4>
                        <h5>Only pay once for source and target data</h5>
                        <p>
                            Capture data from any source once. Estuary stores it
                            all in your cloud storage. You&apos;re only billed
                            once for each source, target, and the data you move
                            at $0.50/GB, with the first 6 connectors at
                            $100/month per connector, and additional connectors
                            at $50/month per connector &#40;prorated&#41;.
                        </p>
                    </div>
                    <div className={pricingExamplesImageWrapper}>
                        <StaticImage
                            src="../../../images/pricing/pay-once-for-source-and-target-data.png"
                            alt="Graphic for adding new target"
                            placeholder="none"
                            quality={100}
                        />
                    </div>
                </div>
                <div className={clsx(answerSection, flexDirectionColumn)}>
                    <div className={pricingExamplesImageWrapper}>
                        <StaticImage
                            src="../../../images/pricing/pay-once-for-new-target-data.png"
                            alt="Graphic for adding new source and target"
                            placeholder="none"
                            quality={100}
                        />
                    </div>
                    <div className={pricingExamplesTextWrapper}>
                        <h4>ADD NEW TARGETS</h4>
                        <h5>Only pay once for new target data</h5>
                        <p>
                            Add a new target, or add more data to an existing
                            target, at any time. You only pay for the additional
                            targets and data sent to them. You don&apos;t need
                            to re-extract data from each source.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        questionNumber: 6,
        question: 'How does the Free Trial work?',
        content: (
            <p>
                The free trial provides new users with 30 days of access to all
                the features of our Cloud Plan. At the end of the trial period,
                you have the option to upgrade to a paid plan or continue with
                the Free Plan, which includes a 10GB/month limit for up to 2
                connectors. No credit card is required to start the free trial.
            </p>
        ),
    },
    {
        questionNumber: 7,
        question: 'What are my billing options?',
        content: (
            <>
                <p>
                    <span>Free:</span> No credit card or billing information
                    required.
                </p>
                <p>
                    <span>Cloud:</span> Pay via credit card, debit card, or
                    30-day invoice.
                </p>
                <p>
                    <span>Enterprise:</span> Paid via invoice.
                </p>
            </>
        ),
    },
    {
        questionNumber: 8,
        question: 'Where is my data stored?',
        content: (
            <p>
                In the Free Plan, your data is securely stored in Estuary&apos;s
                cloud storage and retained for a limited period. With the Cloud
                Plan and higher tiers, your data will be stored in your own
                cloud bucket for any duration you set.
            </p>
        ),
    },
];
