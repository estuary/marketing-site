import { graphql, useStaticQuery } from "gatsby"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import * as React from "react"
import ChevronLeftIcon from "../../../svgs/chevron-left.svg"
import ChevronRightIcon from "../../../svgs/chevron-right.svg"
import { Arrow, AvatarImg, AvatarSvg, AvatarWrapper, Container, Description, Dot, Dots, Slide, Slider, Slides, Title, Wrapper } from "./styles"

const SectionNine = () => {
  const { allStrapiTestimonial: { nodes: testimonials } } = useStaticQuery(graphql`
    query GetTestimonials {
      allStrapiTestimonial(sort: { Name: DESC }) {
        nodes {
          name: Name
          text: Text
          id
          logo: Logo {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: NONE
                  quality: 100
                  width: 110
                )
              }
              extension
              publicURL
            }
          }
        }
      }
    }
  `)

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    }
  )

  const isRightArrowDisabled = currentSlide === instanceRef.current?.track.details?.slides.length - 1
  const isLeftArrowDisabled = currentSlide === 0

  const onLeftArrowClick = (e: any) => e.stopPropagation() || instanceRef.current?.prev()
  const onRightArrowClick = (e: any) => e.stopPropagation() || instanceRef.current?.next()
  const onDotClick = (idx: number) => {
    instanceRef.current?.moveToIdx(idx)
  }

  return (
    <Container>
      <Wrapper>
        <Slides ref={sliderRef} className="keen-slider">
          {testimonials?.map(({ index, id, logo, name, text }) => {
            const isImageSvg = !logo.localFile.childImageSharp && logo.localFile.extension === 'svg'

            return (
              <Slide key={id} className="keen-slider__slide" style={{ display: !loaded && "none" }}>
                <AvatarWrapper>
                  {isImageSvg ? (
                    <AvatarSvg src={logo.localFile.publicURL} alt={`${name} avatar`} width={110} height={110} />
                  ) : (
                    <AvatarImg
                      image={logo.localFile.childImageSharp?.gatsbyImageData}
                      alt={`${name} avatar`}
                    />
                  )}
                </AvatarWrapper>
                <Title>
                  {name}
                </Title>
                <Description>
                  {text}
                </Description>
              </Slide>
            )
          })}
        </Slides>
        {loaded && instanceRef.current && (
          <Slider>
            <Arrow
              onClick={onLeftArrowClick}
              disabled={isLeftArrowDisabled}
            >
              <ChevronLeftIcon />
            </Arrow>
            <Dots>
              {[
                ...Array(instanceRef.current?.track.details?.slides.length).keys(),
              ].map((idx) => {
                const isDotActive = currentSlide === idx
                return (
                  <Dot
                    key={idx}
                    onClick={() => onDotClick(idx)}
                    className={isDotActive ? "active" : ""}
                  />
                )
              })}
            </Dots>
            <Arrow
              onClick={onRightArrowClick}
              disabled={isRightArrowDisabled}
            >
              <ChevronRightIcon />
            </Arrow>
          </Slider>
        )}
      </Wrapper>
    </Container>
  )
}

export default SectionNine
