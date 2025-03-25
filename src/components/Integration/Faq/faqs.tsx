import OutboundLink from '../../LinksAndButtons/OutboundLink';

export const faqs = [
    {
        question: 'What is the difference between ETL, ELT, and CDC?',
        content: (
            <>
                <p>
                    ETL extracts data from sources, transforms it, and loads it
                    into a destination. ELT loads raw data first and transforms
                    it within the destination for flexibility. CDC captures
                    real-time changes &#40;inserts, updates, deletes&#41; and
                    syncs them to the destination.
                </p>
                <p>
                    Estuary Flow supports real-time CDC, ETL, and ELT, allowing
                    you to choose the best approach for your needs.
                </p>
            </>
        ),
    },
    {
        question: 'What are the pricing options for Estuary Flow?',
        content: (
            <p>
                Estuary offers competitive and transparent pricing, with a free
                tier that includes 2 connector instances and up to 10 GB of data
                transfer per month.{' '}
                <OutboundLink href="/pricing/" target="_blank">
                    Explore our pricing options
                </OutboundLink>{' '}
                to see which plan fits your data integration needs.
            </p>
        ),
    },
];
