import DatabaseSavingWithLowPrice from '../../../svgs/database-saving-with-low-price.svg';
import Advantages from '../../Advantages';
import { PricingCalculator } from '../../PricingCalculator';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';

const Spend25xLess = () => {
    return (
        <section>
            <Advantages
                icon={<DatabaseSavingWithLowPrice color="var(--blue)" />}
                title={
                    <>
                        Spend <span>2-5x</span> less
                    </>
                }
                subtitle="Estuary customers not only do 4x more. They also spend 2-5x less on ETL and ELT. Flow's unique ability to mix and match streaming and batch loading has also helped customers save as much as 40% on data warehouse compute costs."
                image={<PricingCalculator />}
                isDarkTheme={false}
                ctaButtons={
                    <OutboundLinkFilled href="/pricing/" target="_blank">
                        See Pricing
                    </OutboundLinkFilled>
                }
            />
        </section>
    );
};

export default Spend25xLess;
