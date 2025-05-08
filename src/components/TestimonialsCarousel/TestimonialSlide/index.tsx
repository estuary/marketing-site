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
    isDarkTheme,
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
    theme: 'light' | 'dark';
}

const TestimonialSlide = ({
    id,
    logo,
    name,
    text,
    author,
    relatedSuccessStory,
    theme,
}: TestimonialSlideProps) => (
    <div key={id} className={slide}>
        <div className={clsx(header, author ? headerWithAuthor : null)}>
            <TestimonialAvatar
                name={name}
                logo={author?.avatar ?? logo}
                isLogo={!author?.avatar}
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
                <TestimonialAvatar name={name} logo={logo} isLogo />
            ) : null}
        </div>
        <Divider />
        <p className={theme === 'dark' ? isDarkTheme : undefined}>{text}</p>
        {relatedSuccessStory?.slug ? (
            <InternalLink
                href={`/success-stories/${relatedSuccessStory.slug}`}
                target="_blank"
            >
                Read the Success Story <ArrowRightIcon />
            </InternalLink>
        ) : null}
    </div>
);

export default TestimonialSlide;
