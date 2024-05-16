import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Avatar from './Avatar';
import { OutboundLink } from './OutboundLink';

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
    const rendered = (authors).map(({ picture, name, link }) => {
        const image = picture && getImage(picture.localFile.childImageSharp.gatsbyImageData);

        const rendered_name = name && (
            <strong className="author-name">{name}</strong>
        );

        const rendered_img = (
            <Avatar image={image} alt="Author's avatar" name={name} />
        );

        let combined = (
            <div
                style={{
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {rendered_img}
                {rendered_name}
            </div>
        );

        if (link) {
            combined = (
                <OutboundLink href={link} style={{ display: 'flex', alignItems: 'center' }}>
                    {combined}
                </OutboundLink>
            );
        }

        return <React.Fragment key={name}>{combined}</React.Fragment>;
    });
    if (rendered.length < 1) {
        return null;
    }
    return (
        <div className="bio">
            <div style={{ display: 'flex', alignItems: 'center', fontSize: 19, flexWrap: 'wrap', gap: 8 }}>{rendered}</div>
        </div>
    );
};

export default Bio;
