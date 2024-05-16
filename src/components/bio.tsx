import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { OutboundLink } from '../components/OutboundLink';
import Avatar from './Avatar';

export interface BioAuthor {
  name: string;
  link: string;
  picture: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: any;
      };
    };
  };
}

export interface BioProps {
  authors: BioAuthor[];
}

const Bio = ({ authors }: BioProps) => {
  if (!authors || authors.length === 0) {
    return null;
  }

  return (
    <div className="bio">
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 19, flexWrap: 'wrap', gap: 8 }}>
        {authors.map(({ picture, name, link }) => {
          const combined = (
            <div
              style={{
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                image={picture ? getImage(picture.localFile.childImageSharp.gatsbyImageData) : undefined}
                alt="Image of author"
                name={name}
              />
              {name ? <strong className="author-name">{name}</strong> : null}
            </div>
          );

          if (link) {
            return (
              <OutboundLink href={link} style={{ display: 'flex', alignItems: 'center' }}>
                {combined}
              </OutboundLink>
            );
          }

          return <React.Fragment key={name}>{combined}</React.Fragment>;
        })}
      </div>
    </div>
  );
};

export default Bio;
