import * as React from 'react';
import { Navigation, Step } from '../../components/Why';
import Seo from '../../components/seo';
import CirclesBackground from '../../components/BackgroundImages/CirclesBackground';
import WhyPageStepsBackground from '../../components/BackgroundImages/WhyPageStepsBackground';
import {
    container,
    mainContentWrap,
    macBg,
    bgImage,
    stepsControls,
    prevStep,
    nextStep,
} from './styles.module.less';

export const Head = () => <Seo title="Automate Data Streaming" />;

const WhyEstuary = () => {
    const [activePage, setActivePage] = React.useState(0);

    return (
        <main className={container}>
            <Navigation activePage={activePage} setActivePage={setActivePage} />
            <CirclesBackground className={mainContentWrap}>
                <div className={macBg}>
                    <WhyPageStepsBackground
                        activePage={activePage}
                        className={bgImage}
                    >
                        <Step
                            activePage={activePage}
                            setActivePage={setActivePage}
                        />
                    </WhyPageStepsBackground>
                </div>
                <div className={stepsControls}>
                    <button
                        className={prevStep}
                        onClick={() =>
                            setActivePage(Math.max(activePage - 1, 0))
                        }
                        disabled={activePage === 0}
                    >
                        <span>Previous</span>
                    </button>
                    <button
                        className={nextStep}
                        onClick={() =>
                            setActivePage(Math.min(activePage + 1, 7))
                        }
                        disabled={activePage === 7}
                    >
                        <span>Next</span>
                    </button>
                </div>
            </CirclesBackground>
        </main>
    );
};

export default WhyEstuary;
