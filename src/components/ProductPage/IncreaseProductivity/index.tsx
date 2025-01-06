import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import Advantages from '../../Advantages';
import { sectionEightAdvantages } from '../advantages';
import {
    bottomSuccessStories,
    successStoryBase,
    bottomSuccessStory,
    successStories,
    iconWrapper,
    topSuccessStory,
} from './styles.module.less';

const IncreaseProductivity = () => {
    return (
        <section className={defaultWrapperDark}>
            <Advantages
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Maximize efficiency, reduce expenses"
                        src="../../../svgs/product-page/section-eight/database-costs.svg"
                    />
                }
                title={
                    <>
                        INCREASE PRODUCTIVITY, <span>LOWER COSTS</span>
                    </>
                }
                image={
                    <div className={successStories}>
                        <div
                            className={clsx(successStoryBase, topSuccessStory)}
                        >
                            <div className={iconWrapper}>
                                <StaticImage
                                    placeholder="none"
                                    alt="Success story - Connect & Go logo"
                                    src="../../../images/c&g-logo.png"
                                />
                            </div>
                            <h3>CONNECT&GO</h3>
                            <p>
                                Connect&GO lowers MySQL to Snowflake latency up
                                to 180x, improves productivity 4x with Estuary.
                            </p>
                        </div>
                        <div className={bottomSuccessStories}>
                            <div
                                className={clsx(
                                    successStoryBase,
                                    bottomSuccessStory
                                )}
                            >
                                <div className={iconWrapper}>
                                    <StaticImage
                                        placeholder="none"
                                        alt="Success story - True logo"
                                        src="../../../images/true-logo.png"
                                    />
                                </div>
                                <h3>TRUE PLATFORM</h3>
                                <p>
                                    True Platform reduced its data pipeline
                                    spend by &gt;2x and discovered seamless,
                                    scalable data movement.
                                </p>
                            </div>
                            <div
                                className={clsx(
                                    successStoryBase,
                                    bottomSuccessStory
                                )}
                            >
                                <div className={iconWrapper}>
                                    <StaticImage
                                        placeholder="none"
                                        alt="Success story - Soli & Company logo"
                                        src="../../../images/soli&company-logo.png"
                                    />
                                </div>
                                <h3>SOLI & COMPANY</h3>
                                <p>
                                    Soli & Company trusts Estuary&apos;s
                                    approachable pricing and quick setup to
                                    deliver change data capture solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                }
                advantages={sectionEightAdvantages}
            />
        </section>
    );
};

export default IncreaseProductivity;
