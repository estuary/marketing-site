import { GatsbyImage } from 'gatsby-plugin-image';
import {
    topicStyle,
    icon,
    contentStyle,
    title,
    description,
} from '../styles.module.less';

const Topic = ({ Title, Description, Icon }) => {
    return (
        <div className={topicStyle}>
            <div className={icon}>
                <GatsbyImage
                    alt={Title}
                    image={Icon.localFile.childImageSharp.gatsbyImageData}
                />
            </div>
            <div className={contentStyle}>
                <p className={title}>{Title}</p>
                <p className={description}>{Description}</p>
            </div>
        </div>
    );
};

export default Topic;
