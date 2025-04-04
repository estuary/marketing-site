import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AvatarGroup } from '@mui/material';
import clsx from 'clsx';
import ArrowRight2 from '../../../svgs/arrow-right-2.svg';
import Avatar from '../../Avatar';
import {
    container,
    cardImageStyle,
    cardHeader,
    cardTag,
    cardDateAndTime,
    cardAuthors,
    cardFooter,
    dot,
    authorInfo,
    imgWrapper,
    darkContainer,
} from './styles.module.less';
import { CardProps } from './shared';
import CardLink from './Link';

const getReadingTime = (body?: CardProps['data']['body']) => {
    return body
        ? body.data.childMarkdownRemark.fields.readingTime.text.replace(
              'read',
              ''
          )
        : null;
};

const renderTags = (tags?: CardProps['data']['tags']) => {
    if (!tags || tags.length < 1) return null;
    return <span className={cardTag}>{tags[0].name}</span>;
};

const renderDateAndTime = (
    updatedAt: string | undefined,
    readingTime: string | null
) => {
    if (!updatedAt || !readingTime) return null;

    return (
        <div className={cardDateAndTime}>
            <span>{updatedAt}</span>
            <div className={dot} />
            <span>{readingTime}</span>
        </div>
    );
};

const renderAuthors = (authors: CardProps['data']['authors']) => {
    if (!authors || authors.length === 0) return null;

    if (authors.length > 1) {
        return (
            <AvatarGroup max={3}>
                {authors.map((author) => {
                    const authorImage = author.picture?.localFile
                        ?.childImageSharp?.gatsbyImageData
                        ? getImage(
                              author.picture.localFile.childImageSharp
                                  .gatsbyImageData
                          )
                        : undefined;
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
        );
    }

    const singleAuthor = authors[0];
    const singleAuthorImage = singleAuthor.picture?.localFile?.childImageSharp
        ?.gatsbyImageData
        ? getImage(
              singleAuthor.picture.localFile.childImageSharp.gatsbyImageData
          )
        : undefined;

    return (
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
    );
};

const Card = ({
    data,
    footerTag,
    hasImgBackground = false,
    linkId,
    isDarkTheme,
    containerClassName,
    target,
}: CardProps) => {
    const readingTime = getReadingTime(data.body);

    const commonImageProps = {
        alt: data.hero?.alternativeText ?? 'Card image',
        className: cardImageStyle,
    };

    const cardImageLocalFile = data.hero?.localFile;
    const cardImage = cardImageLocalFile?.childImageSharp.gatsbyImageData ? (
        <GatsbyImage
            image={cardImageLocalFile.childImageSharp.gatsbyImageData}
            {...commonImageProps}
        />
    ) : null;

    const commonLinkProps = {
        id: linkId,
        className: clsx(
            container,
            isDarkTheme ? darkContainer : null,
            containerClassName
        ),
    };

    const tagsContent = renderTags(data.tags);
    const dateContent = renderDateAndTime(data.updatedAt, readingTime);

    return (
        <li key={data.id}>
            <CardLink
                data={data}
                target={target}
                commonLinkProps={commonLinkProps}
            >
                {hasImgBackground ? (
                    <div className={imgWrapper}>{cardImage}</div>
                ) : (
                    cardImage
                )}

                {(tagsContent ?? dateContent) === null ? (
                    <div className={cardHeader}>
                        {tagsContent}
                        {dateContent}
                    </div>
                ) : null}

                <h3>{data.title}</h3>
                {data.description ? <p>{data.description}</p> : null}

                {data.authors ? (
                    <div className={cardAuthors}>
                        {renderAuthors(data.authors)}
                    </div>
                ) : null}

                <div className={cardFooter}>
                    {footerTag ? <span>{footerTag}</span> : null}
                    <ArrowRight2 />
                </div>
            </CardLink>
        </li>
    );
};

export default Card;
