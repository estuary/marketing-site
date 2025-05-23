import { StaticImage } from 'gatsby-plugin-image';
import Advantages from '../../Advantages';
import { sectionSixAdvantages } from '../advantages';

const ConfigureOrCode = () => {
    return (
        <section>
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
                        <span>Configure</span> or code
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
