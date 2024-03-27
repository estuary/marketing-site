import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { OutboundLink } from '../components/OutboundLink';

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
    {
        /* TODO: Replace defaultAuthor with authors. Also add authors in Strapi. */
    }
    const defaultAuthors = [
        {
            name: 'By David Yaffe, CEO',
            link: '/avoid-mds-real-time-tax/',
        } as BioAuthor,
    ];

    const rendered = (defaultAuthors ?? []).map(({ picture, name, link }) => {
        const image = picture && getImage(picture.localFile.childImageSharp.gatsbyImageData);

        const rendered_name = name && (
            <>
                <strong className="author-name">{name}</strong>
            </>
        );

        {
            /* TODO: Remove static image (only for testing) */
        }
        const rendered_img = image ? (
            <GatsbyImage
                className="bio-avatar"
                image={image}
                alt="Profile picture"
                style={{ marginLeft: 8 }}
                loading="eager"
            />
        ) : (
            <StaticImage className="bio-avatar" src="../images/a-avatar.svg" alt="Author's Avatar" />
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
