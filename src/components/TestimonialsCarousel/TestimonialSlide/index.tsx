import { Divider } from '@mui/material';
import clsx from 'clsx';
import InternalLink from '../../InternalLink';
import ArrowRightIcon from '../../../svgs/arrow-right-2.svg';
import TestimonialAvatar from '../TestimonialAvatar';
import {
    slide,
    header,
    authorInfoWrapper,
    headerWithAuthor,
    lightThemeSlide,
} from './styles.module.less';

interface TestimonialSlideProps {
    id: string;
    logo: any;
    name: string;
    text: string;
    author?: {
        name: string;
        role: string;
        avatar: any;
    };
    relatedSuccessStory?: {
        slug: string;
    };
    theme: 'dark' | 'light';
}

const TestimonialSlide = ({
    id,
    logo,
    name,
    text,
    author,
    relatedSuccessStory,
    theme,
}: TestimonialSlideProps) => {
    return (
        <div
            key={id}
            className={clsx(
                slide,
                theme === 'light' ? lightThemeSlide : undefined
            )}
        >
            <div className={clsx(header, author ? headerWithAuthor : null)}>
                <TestimonialAvatar
                    name={name}
                    logo={author?.avatar ?? logo}
                    isLogo={!author?.avatar}
                    isLightTheme={theme === 'light'}
                />
                <div className={authorInfoWrapper}>
                    <h3>{author?.name ?? name}</h3>
                    {author?.avatar ? (
                        <span>
                            {author.role}, {name}
                        </span>
                    ) : null}
                </div>
                {author?.avatar ? (
                    <TestimonialAvatar
                        name={name}
                        logo={logo}
                        isLogo
                        isLightTheme={theme === 'light'}
                    />
                ) : null}
            </div>
            <Divider />
            <p>{text}</p>
            {relatedSuccessStory?.slug ? (
                <InternalLink
                    href={`/success-stories/${relatedSuccessStory.slug}`}
                    target="_blank"
                >
                    Read the Success Story{' '}
                    <ArrowRightIcon color="var(--blue)" />
                </InternalLink>
            ) : null}
        </div>
    );
};

export default TestimonialSlide;
