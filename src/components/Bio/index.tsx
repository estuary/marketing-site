import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Link } from 'gatsby';
import Avatar from '../Avatar';
import { container, avatarWrapper, authorName } from './styles.module.less';

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
            {authors.map(({ picture, name }) => {
                const image = getImage(
                    picture?.localFile?.childImageSharp?.gatsbyImageData
                );

                const combined = (
                    <Link
                        to={`/${name.replace(' ', '-').toLowerCase()}`}
                        className={avatarWrapper}
                    >
                        <Avatar
                            alt={`Picture of ${name}`}
                            image={image ? image : undefined}
                            name={name ? name : ''}
                        />
                        {name ? (
                            <strong className={authorName}>{name}</strong>
                        ) : null}
                    </Link>
                );

                return <React.Fragment key={name}>{combined}</React.Fragment>;
            })}
        </div>
    );
};

export default Bio;
