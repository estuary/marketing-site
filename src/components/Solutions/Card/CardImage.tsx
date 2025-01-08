import { StaticImage } from 'gatsby-plugin-image';

interface CardImageProps {
    imageIndex: number;
}

const CardImage = ({ imageIndex }: CardImageProps) => {
    switch (imageIndex) {
        case 1:
            return (
                <StaticImage
                    src="../../../images/use-case-solutions-template/benefits/benefit-1.png"
                    alt="" // TODO: Ask alt text to Sourabh
                    placeholder="blurred"
                    quality={100}
                />
            );
        case 2:
            return (
                <StaticImage
                    src="../../../images/use-case-solutions-template/benefits/benefit-2.png"
                    alt="" // TODO: Ask alt text to Sourabh
                    placeholder="blurred"
                    quality={100}
                />
            );
        case 3:
            return (
                <StaticImage
                    src="../../../images/use-case-solutions-template/benefits/benefit-3.png"
                    alt="" // TODO: Ask alt text to Sourabh
                    placeholder="blurred"
                    quality={100}
                />
            );
        default:
            return null;
    }
};

export default CardImage;
