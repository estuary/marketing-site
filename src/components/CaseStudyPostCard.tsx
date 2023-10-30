import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Bio from "./bio"
import ArrowRight from "../svgs/arrow-right.svg"

export interface CaseStudyPostCardProps {
    Title: string
    Description: string
    Slug: string
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
    Logo: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: any
            }
        }
    }
}

export const CaseStudyPostCard = (props: CaseStudyPostCardProps) => (
    <Link to={`/${props.Slug}`} className="case-study-post-card">
        {props.Logo ? (
            <GatsbyImage
                alt={props.Description}
                image={props.Logo.localFile.childImageSharp.gatsbyImageData}
                className=""
                loading="eager"
            />
        ) : null}
        <div className="case-study-card-title">{props.Title}</div>
        <div className="case-study-card-description">{props.Description}</div>
        <div className="case-study-card-link-wrapper">
            <p className="case-study-card-link-text">View Case Study</p>
            <ArrowRight />
        </div>
    </Link>
)
