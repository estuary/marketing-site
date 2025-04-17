import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import { container } from './styles.module.less';

const Map = () => (
    <section className={defaultWrapperDarkBlue}>
        <Container isVertical isDarkTheme className={container}>
            <div>
                <h2>
                    <span>Security</span> in every region &{' '}
                    <span>data plane mobility</span> and control
                </h2>
                <p>
                    Data is processed and stored within regional boundaries,
                    allowing customers to control where their data is deployed
                    to ensure compliance with local regulations and alignment
                    with security policies.
                </p>
            </div>
            <StaticImage
                src="../../../images/security-page/map.png"
                alt="Map showing secure data connections across global regions for compliance and control."
                quality={100}
                placeholder="blurred"
            />
        </Container>
    </section>
);

export default Map;
