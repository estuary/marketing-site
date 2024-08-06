import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import { OutboundLink } from './OutboundLink';

export interface BioAuthor {
    name: string;
    link: string;
    picture?: {
        localFile?: {
            childImageSharp?: {
                gatsbyImageData: any;
            };
        };
    };
}

export interface BioProps {
    authors: BioAuthor[];
}

const AvatarWrapper = styled('div')`
    align-items: center;
    display: flex;
    white-space: nowrap;
`;

const StyledLink = styled(OutboundLink)`
    align-items: center;
    display: flex;
`;

const Bio = ({ authors }: BioProps) => {
    if (authors.length === 0) {
        return null;
    }

    return (
        <div className="bio">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 19,
                    flexWrap: 'wrap',
                    gap: 8,
                }}
            >
                {authors.map(({ picture, name, link }) => {
                    const image = getImage(
                        picture?.localFile?.childImageSharp?.gatsbyImageData
                    );

                    const combined = (
                        <AvatarWrapper>
                            {image && name ? (
                                <Avatar
                                    alt="Image of blog author"
                                    image={image}
                                    name={name}
                                />
                            ) : null}
                            {name ? (
                                <strong className="author-name">{name}</strong>
                            ) : null}
                        </AvatarWrapper>
                    );

                    if (link) {
                        return (
                            <StyledLink href={link} key={name}>
                                {combined}
                            </StyledLink>
                        );
                    }

                    return (
                        <React.Fragment key={name}>{combined}</React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Bio;
