import { useState } from 'react';
import Card from '../../../components/Grid/Card';
import ButtonFilled from '../../../components/LinksAndButtons/ButtonFilled';
import Grid from '../../../components/Grid';
import { Author } from '../../../../shared';
import { container } from './styles.module.less';

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
            <Grid>
                {blogPosts.slice(0, visiblePosts).map((blogPost) => (
                    <Card
                        key={blogPost.id}
                        data={blogPost}
                        footerTag="Article"
                    />
                ))}
            </Grid>
            {visiblePosts < blogPosts.length ? (
                <ButtonFilled onClick={handleShowMore}>Show more</ButtonFilled>
            ) : null}
        </section>
    );
};

export default SectionTwo;
