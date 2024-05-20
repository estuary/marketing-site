import * as React from 'react';
import styled from 'styled-components';
import AnimFallback from './AnimFallback';
import { AnimationBaseStyling } from './styles';
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import LottiePlayerLight from 'react-lottie-player/dist/LottiePlayerLight';

const FlowAnimation = styled('div')`
  ${AnimationBaseStyling}
`;

const AnimatedHero = () => {
  const [animationData, setAnimationData] = React.useState<object>();

  React.useEffect(() => {
    import('../../../images/hero-animation.json').then(setAnimationData);
  }, []);

  const [lottieReady, setLottieReady] = React.useState(false);
  const lottieRef: any = React.useRef();

  const handleLottieLoaded = React.useCallback(() => {
    setLottieReady(true);
    setTimeout(() => {
      lottieRef.current.play();
    }, 5000);
  }, [lottieRef]);

  if (!animationData) {
    return <AnimFallback />;
  }

  return (
    <FlowAnimation>
      <LottiePlayerLight
        animationData={animationData}
        onLoad={handleLottieLoaded}
        rendererSettings={{
          viewBoxOnly: true,
          preserveAspectRatio: 'xMaxYMid meet',
          progressiveLoad: true,
          focusable: false,
        }}
        className="section-one-right-image"
        style={(!lottieReady && { display: 'none' }) || {}}
        play={false}
        ref={lottieRef}
      />
    </FlowAnimation>
  );
};

export default AnimatedHero;
