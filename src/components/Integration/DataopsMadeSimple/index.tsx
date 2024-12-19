import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import Advantages from '../../Advantages';

const DataopsMadeSimple = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Advantages
                icon={<SingleDataflowIcon color="var(--blue)" />}
                title={
                    <>
                        <span>DATAOPS</span> MADE SIMPLE
                    </>
                }
                subtitle="Add advanced capabilities like schema inference and evolution with a few clicks. Or automate your data pipeline and integrate into your existing DataOps using Flow's rich CLI."
                image={
                    <StaticImage
                        quality={100}
                        placeholder="none"
                        alt="Schema evolution options"
                        src="../../../images/schema-evolution-options.png"
                    />
                }
                isImageOnTheLeft
                isDarkTheme
            />
        </section>
    );
};

export default DataopsMadeSimple;
