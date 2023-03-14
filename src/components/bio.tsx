import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export interface BioAuthor {
  name: string
  profilePic: {
    gatsbyImageData: any
  }
}

export interface BioProps {
  authors: BioAuthor[]
}

const Bio = ({ authors }) => {
  const rendered = (authors??[]).map(({ profilePic, name }) => {
    const image = getImage(profilePic.gatsbyImageData)
    return (
      <>
        <GatsbyImage
          className="bio-avatar"
          image={image}
          alt="Profile picture"
          style={{marginLeft: 8}}
        />
        {name && (
          <>
            <strong style={{marginRight:8}}>{name}</strong>
          </>
        )}
      </>
    )
  })
  if(rendered.length < 1){
    return null;
  }
  return (
    <div className="bio">
      <p style={{ display: "flex", alignItems: "center" }}>
        Written by
        {rendered.map((r, idx) => (
          <>
            {r}
            {idx === rendered.length - 2
              ? " and "
              : idx < rendered.length - 2
              ? ","
              : null}
          </>
        ))}
      </p>
    </div>
  )
}

export default Bio
