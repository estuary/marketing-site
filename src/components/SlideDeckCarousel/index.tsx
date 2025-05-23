import Carousel from '../Carousel';
import { cardsList } from './styles.module.less';

const SlideDeckCarousel = ({ items, itemsPerSlide, renderCard, ariaLabel }) => {
    return (
        <Carousel
            hasArrow
            aria-label={ariaLabel}
            hasMultipleItemsSlide
            hasViewport
        >
            {Array.from(
                { length: Math.ceil(items.length / itemsPerSlide) },
                (_, index) => (
                    <div key={index} className={cardsList}>
                        {items
                            .slice(
                                index * itemsPerSlide,
                                index * itemsPerSlide + itemsPerSlide
                            )
                            .map((item) => renderCard(item))}
                    </div>
                )
            )}
        </Carousel>
    );
};

export default SlideDeckCarousel;
