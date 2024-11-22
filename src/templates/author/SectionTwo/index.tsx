import React, { useState } from 'react';
import { Author } from '../shared';
import AuthorBlogPostCard from '../../../components/AuthorBlogPostCard';
import ButtonFilled from '../../../components/LinksAndButtons/ButtonFilled';
import { container, blogPostCardList } from './styles.module.less';

interface SectionTwoProps {
    author: {
        name: string;
        blogPosts?: Author['blogPosts'];
    };
}

const SectionTwo = ({ author: { name, blogPosts } }: SectionTwoProps) => {
    const [visiblePosts, setVisiblePosts] = useState(9);

    if (!blogPosts) {
        return null;
    }

    const handleShowMore = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 9);
    };

    return (
        <section className={container}>
            <h2>
                CONTENT FROM <span>{name}</span>
            </h2>
            <div className={blogPostCardList}>
                {blogPosts.slice(0, visiblePosts).map((blogPost) => (
                    <AuthorBlogPostCard key={blogPost.id} data={blogPost} />
                ))}
            </div>
            {visiblePosts < blogPosts.length ? (
                <ButtonFilled onClick={handleShowMore}>Show more</ButtonFilled>
            ) : null}
        </section>
    );
};

export default SectionTwo;
