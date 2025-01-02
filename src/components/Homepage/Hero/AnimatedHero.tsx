import LottiePlayerLight from 'react-lottie-player/dist/LottiePlayerLight';
import { useState, useEffect, useRef, useCallback } from 'react';
import AnimFallback from './AnimFallback';
import { flowAnimationPlaceholderContainer } from './styles.module.less';

const AnimatedHero = () => {
    const [animationData, setAnimationData] = useState<object>();

    useEffect(() => {
        import('../../../images/hero-animation.min.json')
            .then(setAnimationData)
            .catch((error) => console.error(error));
    }, []);

    const [showAnimation, setShowAnimation] = useState(false);
    const [lottieLoaded, setLottieLoaded] = useState(false);
    const lottieRef: any = useRef();

    useEffect(() => {
        let playTimeout;
        if (lottieLoaded) {
            setShowAnimation(true);

            playTimeout = setTimeout(() => {
                lottieRef.current?.play();
            }, 5000);
        }
        return () => {
            if (playTimeout) {
                clearTimeout(playTimeout);
            }
        };
    }, [lottieLoaded]);

    const handleLottieLoaded = useCallback(() => {
        setLottieLoaded(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lottieRef]);

    return (
        <div className={flowAnimationPlaceholderContainer}>
            {!showAnimation ? <AnimFallback /> : null}
            {animationData ? (
                <LottiePlayerLight
                    animationData={animationData}
                    onLoad={handleLottieLoaded}
                    rendererSettings={{
                        viewBoxOnly: true,
                        preserveAspectRatio: 'xMaxYMid meet',
                        progressiveLoad: true,
                        focusable: false,
                    }}
                    style={!showAnimation ? { display: 'none' } : undefined}
                    play={false}
                    ref={lottieRef}
                />
            ) : null}
        </div>
    );
};

export default AnimatedHero;
