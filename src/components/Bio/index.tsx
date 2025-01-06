import { getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Fragment } from 'react';
import Avatar from '../Avatar';
import { getAuthorPathBySlug } from '../../../shared';
import { container, avatarWrapper, authorName } from './styles.module.less';

export interface BioProps {
    authors: {
        name: string;
        link: string;
        role?: string;
        slug: string;
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
            {authors.map(({ picture, name, role, slug }) => {
                const image = getImage(
                    picture?.localFile?.childImageSharp?.gatsbyImageData
                );

                const combined = (
                    <Link
                        to={getAuthorPathBySlug(slug)}
                        className={avatarWrapper}
                    >
                        <Avatar
                            alt={`Picture of ${name}`}
                            image={image ? image : undefined}
                            name={name ? name : ''}
                        />
                        {name ? (
                            <div className={authorName}>
                                <strong>{name}</strong>{' '}
                                {role ? <span>{role}</span> : ''}
                            </div>
                        ) : null}
                    </Link>
                );

                return <Fragment key={name}>{combined}</Fragment>;
            })}
        </div>
    );
};

export default Bio;
