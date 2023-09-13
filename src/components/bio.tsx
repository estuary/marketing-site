import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"

export interface BioAuthor {
    name: string
    link: string
    picture: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: any
            }
        }
    }
}

export interface BioProps {
    authors: BioAuthor[]
}

const Bio = ({ authors }: BioProps) => {
    const rendered = (authors ?? []).map(({ picture, name, link }) => {
        const image =
            picture &&
            getImage(picture.localFile.childImageSharp.gatsbyImageData)
        let rendered_name = name && (
            <>
                <strong
                    style={{
                        marginRight: 8,
                        marginLeft: 8,
                        fontWeight: 500,
                        color: "black",
                    }}
                >
                    {name}
                </strong>
            </>
        )

        let rendered_img = image && (
            <GatsbyImage
                className="bio-avatar"
                image={image}
                alt="Profile picture"
                style={{ marginLeft: 8 }}
                loading="eager"
            />
        )

        let combined = (
            <div
                style={{
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {rendered_img}
                {rendered_name}
            </div>
        )

        if (link) {
            combined = (
                <OutboundLink
                    href={link}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    {combined}
                </OutboundLink>
            )
        }

        return <React.Fragment key={name}>
            Author: {combined}

        </React.Fragment>
    })
    if (rendered.length < 1) {
        return null
    }
    return (
        <div className="bio">
            <div style={{ display: "flex", alignItems: "center", fontSize: 19, flexWrap: "wrap", gap: 8 }}>
                {rendered}
            </div>
        </div>
    )
}

export default Bio
