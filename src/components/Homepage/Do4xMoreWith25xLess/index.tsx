import DatabaseSavingWithLowPrice from '../../../svgs/database-saving-with-low-price.svg';
import { PricingCalculator } from '../../PricingCalculator';
import Advantages from '../../Advantages';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import LinkFilled from '../../LinksAndButtons/LinkFilled';

const Do4xMoreWith25xLess = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Advantages
                icon={<DatabaseSavingWithLowPrice color="var(--blue)" />}
                title={
                    <>
                        DO <span>MORE </span> WITH <span>LESS</span>
                    </>
                }
                subtitle="We combine agentless CDC, zero-code pipelines, and enterprise-grade governance to simplify data integration, and drive business agility at a fraction of the cost"
                image={<PricingCalculator />}
                ctaButtons={
                    <LinkFilled href="/pricing/">See Pricing</LinkFilled>
                }
                isReverseColumnOnMobile
            />
        </section>
    );
};

export default Do4xMoreWith25xLess;
