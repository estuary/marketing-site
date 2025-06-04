import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
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
        <section>
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
                        Increase productivity, <span>lower costs</span>
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
                            <h3>Connect&GO</h3>
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
                                        alt="Success story - Soli & Company logo"
                                        src="../../../images/soli&company-logo.png"
                                    />
                                </div>
                                <h3>Soli & Company</h3>
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
