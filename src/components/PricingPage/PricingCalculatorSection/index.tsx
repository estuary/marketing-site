import clsx from 'clsx';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import { PricingCalculator } from '../../PricingCalculator';
import CopyToClipboardButton from '../../CopyToClipboardButton';
import useWindowExistence from '../../../hooks/useWindowExistence';
import Container from '../../Container';
import {
    textWrapper,
    pricingCalculatorWrapper,
    jumpLinkOffset,
} from './styles.module.less';

const PricingCalculatorSection = () => {
    const hasWindow = useWindowExistence();

    return (
        <section
            className={clsx(defaultWrapperDark, jumpLinkOffset)}
            id="pricing-calculator"
        >
            <Container isReverseColumnOnMobile>
                <div className={textWrapper}>
                    <div>
                        <h2>Pricing calculator</h2>
                        {hasWindow ? (
                            <CopyToClipboardButton
                                contentToCopy={`${window.location.origin}/pricing/#pricing-calculator`}
                            />
                        ) : null}
                    </div>
                    <p>
                        Use our intuitive pricing calculator to easily estimate
                        your monthly costs. Simply input your requirements, and
                        we&apos;ll provide a clear breakdown of your expenses,
                        helping you choose the best plan to fit your budget and
                        needs.
                    </p>
                </div>
                <div className={pricingCalculatorWrapper}>
                    <PricingCalculator />
                </div>
            </Container>
        </section>
    );
};

export default PricingCalculatorSection;
