import { graphql, useStaticQuery } from "gatsby"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import * as React from "react"
import ChevronLeftIcon from "../../../svgs/chevron-left.svg"
import ChevronRightIcon from "../../../svgs/chevron-right.svg"
import { Arrow, AvatarImg, AvatarSvg, Container, Description, Dot, Dots, Slide, Slider, Slides, Title, Wrapper } from "./styles"

const SectionNine = () => {
  const { allStrapiTestimonial: { nodes: testimonials } } = useStaticQuery(graphql`
    query GetTestimonials {
      allStrapiTestimonial(sort: { fields: Name, order: DESC }) {
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

  return (
    <Container>
      <Wrapper>
        <Slides ref={sliderRef} className="keen-slider">
          {testimonials?.map(({ id, logo, name, text }) => (
            <Slide key={id} className="keen-slider__slide">
              {!logo.localFile.childImageSharp && logo.localFile.extension === 'svg' ? (
                <AvatarSvg src={logo.localFile.publicURL} alt={name + " avatar"} width={110} height={110} />
              ) : (
                <AvatarImg
                  image={logo.localFile.childImageSharp?.gatsbyImageData}
                  alt={name + " avatar"}
                />
              )}
              <Title>
                {name}
              </Title>
              <Description>
                {text}
              </Description>
            </Slide>
          ))}
        </Slides>
        {loaded && instanceRef.current && (
          <Slider>
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            >
              <ChevronLeftIcon />
            </Arrow>
            <Dots>
              {[
                ...Array(instanceRef.current.track.details?.slides.length).keys(),
              ].map((idx) => {
                return (
                  <Dot
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={currentSlide === idx ? "active" : ""}
                  />
                )
              })}
            </Dots>
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details?.slides.length - 1
              }
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
