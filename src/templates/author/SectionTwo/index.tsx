import React, { useState } from 'react';
import { Author } from '../shared';
import AuthorBlogPostCard from '../../../components/AuthorBlogPostCard';
import { ButtonFilled } from '../../../globalStyles';
import { container, blogPostCardList } from './styles.module.less';

interface SectionTwoProps {
    authorBlogPosts?: Author['blogPosts'];
}

const SectionTwo = ({ authorBlogPosts }: SectionTwoProps) => {
    const [visiblePosts, setVisiblePosts] = useState(9);

    if (!authorBlogPosts) {
        return null;
    }

    const handleShowMore = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 9);
    };

    return (
        <section className={container}>
            <div className={blogPostCardList}>
                {authorBlogPosts.slice(0, visiblePosts).map((blogPost) => (
                    <AuthorBlogPostCard key={blogPost.id} data={blogPost} />
                ))}
            </div>
            {visiblePosts < authorBlogPosts.length ? (
                <ButtonFilled onClick={handleShowMore}>Show more</ButtonFilled>
            ) : null}
        </section>
    );
};

export default SectionTwo;
