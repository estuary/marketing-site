import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Avatar from '../Avatar';
import { OutboundLink } from '../OutboundLink';
import {
    container,
    avatarWrapper,
    styledLink,
    authorName,
} from './styles.module.less';

export interface BioProps {
    authors: {
        name: string;
        link: string;
        picture?: {
            localFile?: {
                childImageSharp?: {
                    gatsbyImageData: any;
                };
            };
        };
    }[];
}

const Bio = ({ authors }: BioProps) => {
    if (authors.length === 0) {
        return null;
    }

    return (
        <div className={container}>
            {authors.map(({ picture, name, link }) => {
                const image = getImage(
                    picture?.localFile?.childImageSharp?.gatsbyImageData
                );

                const combined = (
                    <div className={avatarWrapper}>
                        <Avatar
                            alt="Image of blog author"
                            image={image ? image : undefined}
                            name={name ? name : ''}
                        />
                        {name ? (
                            <strong className={authorName}>{name}</strong>
                        ) : null}
                    </div>
                );

                if (link) {
                    return (
                        <OutboundLink
                            href={link}
                            key={name}
                            className={styledLink}
                        >
                            {combined}
                        </OutboundLink>
                    );
                }

                return <React.Fragment key={name}>{combined}</React.Fragment>;
            })}
        </div>
    );
};

export default Bio;
