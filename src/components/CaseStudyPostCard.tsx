import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Bio from "./bio"
import ArrowRight from "../svgs/arrow-right.svg"

export interface CaseStudyPostCardProps {
    title: string
    slug: string
    publishedAt: string
    tags: {
        Name: string
        Slug: string
        Type: string
    }[]
    authors: {
        name: string
        picture: {
            localFile: {
                childImageSharp: {
                    gatsbyImageData: any
                }
            }
        }
        link: string
    }[]
    hero: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: any
            }
        }
    }
}

export const CaseStudyPostCard = (props: CaseStudyPostCardProps) => (
    <Link to={`/${props.slug}`} className="case-study-post-card">
        {props.hero ? (
            <GatsbyImage
                alt={props.title}
                image={props.hero.localFile.childImageSharp.gatsbyImageData}
                className="blog-post-card-image"
                loading="eager"
            />
        ) : null}
        <div className="case-study-card-title">{props.title}</div>
        <div className="case-study-card-link-wrapper">
            <p className="case-study-card-link-text">View Case Study</p>
            <ArrowRight />
        </div>
    </Link>
)
