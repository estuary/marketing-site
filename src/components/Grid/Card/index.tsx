import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { AvatarGroup } from '@mui/material';
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
} from './styles.module.less';

interface CardProps {
    data: {
        id: string;
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
    hasImgBackground?: boolean;
    linkId: string;
}

const getReadingTime = (body?: CardProps['data']['body']) => {
    return body
        ? body.data.childMarkdownRemark.fields.readingTime.text.replace(
              'read',
              ''
          )
        : null;
};

const getCardImage = (hero: CardProps['data']['hero']) => {
    return hero.localFile?.childImageSharp?.gatsbyImageData;
};

const renderTags = (tags?: CardProps['data']['tags']) => {
    if (!tags || tags.length <= 1) return null;
    return <span className={cardTag}>{tags[0].name}</span>;
};

const renderDateAndTime = (updatedAt: string, readingTime: string | null) => {
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
        );
    }

    const singleAuthor = authors[0];
    const singleAuthorImage =
        singleAuthor.picture &&
        getImage(
            singleAuthor.picture.localFile.childImageSharp.gatsbyImageData
        );

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
}: CardProps) => {
    const cardImage = getCardImage(data.hero);
    const readingTime = getReadingTime(data.body);

    const imageProps = {
        image: cardImage,
        alt: data.hero.alternativeText ?? 'Card image',
        className: cardImageStyle,
    };

    return (
        <li key={data.id}>
            <Link id={linkId} to={`/${data.slug}`} className={container}>
                {hasImgBackground ? (
                    <div className={imgWrapper}>
                        <GatsbyImage {...imageProps} />
                    </div>
                ) : (
                    <GatsbyImage {...imageProps} />
                )}

                {!!data.tags || data.updatedAt || readingTime ? (
                    <div className={cardHeader}>
                        {renderTags(data.tags)}
                        {renderDateAndTime(data.updatedAt, readingTime)}
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
                    <span>{footerTag}</span>
                    <ArrowRight2 />
                </div>
            </Link>
        </li>
    );
};

export default Card;
