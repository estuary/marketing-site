import { PricingCalculator } from '../../PricingCalculator';
import Advantages from '../../Advantages';
import LinkFilled from '../../LinksAndButtons/LinkFilled';

const Do4xMoreWith25xLess = () => {
    return (
        <section>
            <Advantages
                title={
                    <>
                        Do <span>more </span> with <span>less</span>
                    </>
                }
                subtitle="We combine agentless CDC, zero-code pipelines, and enterprise-grade governance to simplify data integration, and drive business agility at a fraction of the cost"
                image={<PricingCalculator />}
                ctaButtons={
                    <LinkFilled
                        id="see-pricing-button/home-page"
                        href="/pricing/"
                    >
                        See Pricing
                    </LinkFilled>
                }
                isReverseColumnOnMobile
            />
        </section>
    );
};

export default Do4xMoreWith25xLess;
