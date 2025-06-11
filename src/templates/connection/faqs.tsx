import OutboundLink from '../../components/LinksAndButtons/OutboundLink';
import InternalLink from '../../components/InternalLink';
import { Connector } from '../../../shared';
import { FaqItem } from '../../components/Faq/FaqAccordions';

export const faqs = (
    sourceConnector: Partial<Connector>
): (FaqItem | null)[] => [
    {
        question: 'What is the difference between ETL, ELT, and CDC?',
        answer: (
            <>
                <p>
                    <InternalLink
                        id="etl-link/faq-section/integration-page"
                        href="/blog/what-is-an-etl-pipeline/"
                        target="_blank"
                    >
                        ETL
                    </InternalLink>{' '}
                    extracts data from sources, transforms it, and loads it into
                    a destination. ELT loads raw data first and transforms it
                    within the destination for flexibility.{' '}
                    <InternalLink
                        id="etl-link/faq-section/integration-page"
                        href="/blog/the-complete-introduction-to-change-data-capture-cdc/"
                        target="_blank"
                    >
                        CDC
                    </InternalLink>{' '}
                    captures real-time changes &#40;inserts, updates,
                    deletes&#41; and syncs them to the destination.
                </p>
                <p>
                    Estuary Flow supports real-time CDC, ETL, and ELT, allowing
                    you to choose the best approach for your needs.
                </p>
            </>
        ),
    },
    (sourceConnector.longDescription ?? sourceConnector.shortDescription) !=
    null
        ? {
              question: `What is ${sourceConnector.title}?`,
              answer: (
                  <div
                      dangerouslySetInnerHTML={{
                          __html:
                              sourceConnector.longDescription ??
                              sourceConnector.shortDescription ??
                              '',
                      }}
                  />
              ),
          }
        : null,
    {
        question: `How do I Transfer Data from ${sourceConnector.title}?`,
        answer: (
            <ol>
                <li>
                    <span>Set Up Capture</span>: In Estuary Flow, go to{' '}
                    <span>Sources</span>, click <span>+ NEW CAPTURE</span>, and
                    select the <span>{sourceConnector.title}</span> connector.
                </li>
                <li>
                    <span>Enter Details</span>: Add your {sourceConnector.title}{' '}
                    connection details and click <span>SAVE AND PUBLISH</span>.
                </li>
                <li>
                    <span>Materialize Data</span>: Go to{' '}
                    <span>Destinations</span>, choose your target system, link
                    the {sourceConnector.title} capture, and publish.
                </li>
            </ol>
        ),
    },
    {
        question: 'What are the pricing options for Estuary Flow?',
        answer: (
            <p>
                Estuary offers competitive and transparent pricing, with a free
                tier that includes 2 connector instances and up to 10 GB of data
                transfer per month.{' '}
                <OutboundLink
                    id="explore-our-pricing-options-link/faq-section/integration-page"
                    href="/pricing/"
                    target="_blank"
                >
                    Explore our pricing options
                </OutboundLink>{' '}
                to see which plan fits your data integration needs.
            </p>
        ),
    },
];
