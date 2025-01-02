import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import Advantages from '../../Advantages';
import { sectionSixAdvantages } from '../advantages';

const ConfigureOrCode = () => {
    return (
        <section className={defaultWrapperDark}>
            <Advantages
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Coding optional"
                        src="../../../svgs/product-page/section-six/code.svg"
                    />
                }
                title={
                    <>
                        <span>CONFIGURE</span> OR CODE
                    </>
                }
                subtitle="Choose the best combination of no-code configuration and coding to move and transform data."
                image={
                    <StaticImage
                        placeholder="none"
                        alt="Coding optional"
                        src="../../../images/product-page/section-six/optional-code.png"
                    />
                }
                advantages={sectionSixAdvantages}
            />
        </section>
    );
};

export default ConfigureOrCode;
