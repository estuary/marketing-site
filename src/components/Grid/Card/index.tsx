import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import React from 'react';
import { AvatarGroup } from '@mui/material';
import ArrowRight2 from '../../../svgs/arrow-right-2.svg';
import Avatar from '../../Avatar';
import {
    container,
    popularArticlesImage,
    articleCardHeader,
    articleTag,
    articleDateAndTime,
    articleCardAuthors,
    articleCardFooter,
    dot,
    authorInfo,
    imgWrapper,
} from './styles.module.less';

interface CardProps {
    data: {
        slug: string;
        title: string;
        description?: string;
        updatedAt: string;
        body?: {
            data: {
                childMarkdownRemark: {
                    fields: { readingTime: { text: string } };
                };
            };
        };
        tags?: { type: string; name: string }[];
        authors?: { id: string; name: string; role?: string; picture?: any }[];
        hero: { alternativeText?: string; localFile: any };
    };
    footerTag?: string;
}

const Card = ({ data, footerTag }: CardProps) => {
    const cardImage = data.hero.localFile?.childImageSharp?.gatsbyImageData;

    const tags = data.tags
        ? data.tags.filter((tag) => tag.type === 'tag')
        : null;

    const singleAuthorImage = data.authors
        ? data.authors[0].picture &&
          getImage(
              data.authors[0].picture.localFile.childImageSharp.gatsbyImageData
          )
        : null;

    const singleAuthor = data.authors ? data.authors[0] : null;

    const readingTime = data.body
        ? data.body.data.childMarkdownRemark.fields.readingTime.text.replace(
              'read',
              ''
          )
        : null;

    return (
        <Link to={`/${data.slug}`} className={container}>
            <div className={imgWrapper}>
                <GatsbyImage
                    image={cardImage}
                    alt={data.hero.alternativeText ?? 'Card image'}
                    className={popularArticlesImage}
                />
            </div>
            {!!tags || data.updatedAt || readingTime ? (
                <div className={articleCardHeader}>
                    {tags && tags.length > 1 ? (
                        <span className={articleTag}>{tags[0].name}</span>
                    ) : null}
                    {data.updatedAt && readingTime ? (
                        <div className={articleDateAndTime}>
                            <span>{data.updatedAt}</span>
                            <div className={dot} />
                            <span>{readingTime}</span>
                        </div>
                    ) : null}
                </div>
            ) : null}
            <h3>{data.title}</h3>
            {data.description ? <p>{data.description}</p> : null}
            {data.authors && singleAuthor ? (
                <div className={articleCardAuthors}>
                    {data.authors.length > 1 ? (
                        <AvatarGroup max={3}>
                            {data.authors.map((author) => {
                                const authorImage =
                                    author.picture &&
                                    getImage(
                                        author.picture.localFile.childImageSharp
                                            .gatsbyImageData
                                    );

                                return (
                                    <Avatar
                                        key={author.id}
                                        image={authorImage}
                                        alt={`Picture of ${author.name}`}
                                        name={author.name}
                                    />
                                );
                            })}
                        </AvatarGroup>
                    ) : (
                        <>
                            <Avatar
                                image={singleAuthorImage}
                                alt={`Picture of ${singleAuthor.name}`}
                                name={singleAuthor.name}
                            />
                            <div className={authorInfo}>
                                <span>{singleAuthor.name}</span>
                                {singleAuthor.role ? (
                                    <>
                                        <div className={dot} />
                                        <span>{singleAuthor.role}</span>
                                    </>
                                ) : null}
                            </div>
                        </>
                    )}
                </div>
            ) : null}
            <div className={articleCardFooter}>
                <span>{footerTag}</span>
                <ArrowRight2 />
            </div>
        </Link>
    );
};

export default Card;
