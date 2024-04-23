import { LottieRef } from "lottie-react"
import * as React from "react"
import styled from "styled-components"
import AnimFallback from "./AnimFallback"
import { AnimationBaseStyling } from "./styles"

const FlowAnimation = styled(React.lazy(() => import("lottie-react")))`
  ${AnimationBaseStyling}
`;

const AnimatedHero = () => {
  const HeroAnimation = React.useMemo(
    () => import("../../../images/hero-animation.json"),
    []
  )

  const [heroAnim, setHeroAnim] = React.useState<Awaited<
    typeof HeroAnimation
  > | null>(null)

  React.startTransition(() => {
    HeroAnimation.then(anim => {
      setHeroAnim(anim.default as any)
    })
  })

  const [lottieReady, setLottieReady] = React.useState(false)
  const lottieRef: LottieRef = React.useRef()

  const handleLottieLoaded = React.useCallback(() => {
    setLottieReady(true)
    setTimeout(() => {
      lottieRef.current.play()
    }, 5000)
  }, [lottieRef])

  return (
    <>
      {!(lottieReady && heroAnim) && AnimFallback}
      {heroAnim && (
        <FlowAnimation
          onDOMLoaded={handleLottieLoaded}
          rendererSettings={{
            viewBoxOnly: true,
            preserveAspectRatio: "xMaxYMid meet",
            progressiveLoad: true,
            focusable: false,
          }}
          animationData={heroAnim}
          style={(!lottieReady && { display: "none" }) || {}}
          autoplay={false}
          lottieRef={lottieRef}
        />
      )}
    </>
  )
}

export default AnimatedHero;
