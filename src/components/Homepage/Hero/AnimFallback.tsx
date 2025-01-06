import { StaticImage } from 'gatsby-plugin-image';
import { flowAnimationPlaceholderContainer } from './styles.module.less';

const AnimFallback = () => (
    <div className={flowAnimationPlaceholderContainer}>
        <StaticImage
            placeholder="none"
            alt="estuary logo"
            src="../../../images/hero-anim-placeholder.png"
            loading="eager"
        />
    </div>
);

export default AnimFallback;
