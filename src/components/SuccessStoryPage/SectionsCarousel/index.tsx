import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { StaticImage } from 'gatsby-plugin-image';
import TabbedCarousel from '../../../components/TabbedCarousel';
import { ProcessedHtml } from '../../../components/HtmlProcessor';
import GoalsOutlinedIcon from '../../../svgs/viewfinder-circle.svg';
import {
    sectionSlide,
    sectionContent,
    componentWrapper,
    highlightedContent,
    footnote,
    numberedCards,
    numberedCard,
    number,
    numberedCardContent,
    testimonial,
    author,
    cardsGroup,
    card as cardStyle,
    infoCardTitle,
    aboutCard,
    goalsCard,
    industryCard,
    locationCard,
    industryLocationGroup,
    imageComponent,
    estuaryImgLogo,
    emptySection,
} from './styles.module.less';

const iconColor = 'var(--blue)';

interface SectionsCarouselProps {
    successStory: any;
}

const SectionsCarousel: React.FC<SectionsCarouselProps> = ({
    successStory,
}) => {
    console.log('SectionsCarousel received successStory:', successStory);

    if (!successStory) {
        return (
            <div className={sectionSlide}>
                <div className={emptySection}>
                    <h3>No success story data available</h3>
                    <p>Please check the data source.</p>
                </div>
            </div>
        );
    }

    const allSections = [
        { id: 0, label: 'Key Metrics', data: successStory?.keyMetrics || [] },
        { id: 1, label: 'Challenges', data: successStory?.challenges || [] },
        { id: 2, label: 'Solution', data: successStory?.solution || [] },
        { id: 3, label: 'AI Use Case', data: successStory?.aiUseCase || [] },
        { id: 4, label: 'Results', data: successStory?.results || [] },
        { id: 5, label: 'Why Estuary', data: successStory?.whyEstuary || [] },
    ];

    const sections = allSections
        .filter((section) => {
            if (!section.data || !Array.isArray(section.data)) return false;
            const components = section.data.filter(
                (component: any) => component?.__typename
            );
            return components.length > 0;
        })
        .map((section, index) => ({
            ...section,
            id: index,
        }));

    console.log('Sections array:', sections);

    const renderHighlightedContent = (component: any) => (
        <div className={highlightedContent}>
            {component.title ? <h3>{component.title}</h3> : null}
            {component.description?.data?.description ? (
                <ProcessedHtml body={component.description.data.description} />
            ) : null}
            {component.footnote ? (
                <p className={footnote}>{component.footnote}</p>
            ) : null}
            {component.numberedCards &&
            Array.isArray(component.numberedCards) ? (
                <div className={numberedCards}>
                    {component.numberedCards.map((card: any) => (
                        <div
                            key={`numbered-card-${card.number}`}
                            className={numberedCard}
                        >
                            {card.number ? (
                                <span className={number}>
                                    {String(card.number).padStart(2, '0')}
                                </span>
                            ) : null}
                            <div className={numberedCardContent}>
                                {card.title ? <h3>{card.title}</h3> : null}
                                {card.description?.data?.description ? (
                                    <ProcessedHtml
                                        body={card.description.data.description}
                                    />
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );

    const renderTestimonial = (component: any) => (
        <div className={testimonial}>
            {component.text ? <blockquote>{component.text}</blockquote> : null}
            {component.author ? (
                <div className={author}>
                    <span>—</span>
                    {component.author.name ? (
                        <span>{component.author.name}</span>
                    ) : null}
                    {component.author.role ? (
                        <span>
                            {component.author.name ? ', ' : ''}
                            {component.author.role}
                        </span>
                    ) : null}
                    {component.relatedSuccessStory?.title ? (
                        <span>
                            {component.author.name || component.author.role
                                ? ', '
                                : ''}
                            {component.relatedSuccessStory.title}
                        </span>
                    ) : null}
                </div>
            ) : null}
        </div>
    );

    const renderList = (component: any) => {
        const title = component.title ? String(component.title) : 'List';
        const items = Array.isArray(component.items?.strapi_json_value)
            ? component.items.strapi_json_value
            : [];

        return (
            <React.Fragment>
                {component.title ? <h3>{title}</h3> : null}
                <div className={cardsGroup}>
                    {items.map((item: string, index) => (
                        <div
                            key={`cards-group-card-${index + 1}`}
                            className={cardStyle}
                        >
                            <p>
                                <GoalsOutlinedIcon />
                                {item ? String(item) : ''}
                            </p>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    };

    const renderNumberedCard = (component: any) => (
        <div className={numberedCard}>
            {component.number ? (
                <span className={number}>
                    {String(component.number).padStart(2, '0')}
                </span>
            ) : null}
            <div className={numberedCardContent}>
                {component.title ? <h3>{component.title}</h3> : null}
                {component.description?.data?.description ? (
                    <ProcessedHtml
                        body={component.description.data.description}
                    />
                ) : null}
            </div>
        </div>
    );

    const renderCard = (component: any) => (
        <div className={cardStyle}>
            {component.title ? <h3>{component.title}</h3> : null}
            {component.description?.data?.description ? (
                <ProcessedHtml body={component.description.data.description} />
            ) : null}
        </div>
    );

    const renderAboutCard = (component: any) => (
        <div className={aboutCard}>
            <h3 className={infoCardTitle}>
                <InfoOutlinedIcon htmlColor={iconColor} />
                About {successStory.title}
            </h3>
            {component.about?.data?.about ? (
                <ProcessedHtml body={component.about.data.about} />
            ) : null}
        </div>
    );

    const renderIndustryCard = (component: any) => (
        <div className={industryCard}>
            <h3 className={infoCardTitle}>
                <BusinessOutlinedIcon htmlColor={iconColor} />
                Industry
            </h3>
            {component.industry?.data?.industry ? (
                <ProcessedHtml body={component.industry.data.industry} />
            ) : null}
        </div>
    );

    const renderGoalsCard = (component: any) => (
        <div className={goalsCard}>
            <h3 className={infoCardTitle}>
                <GoalsOutlinedIcon />
                Goals
            </h3>
            {component.goals?.data?.goals ? (
                <ProcessedHtml body={component.goals.data.goals} />
            ) : null}
        </div>
    );

    const renderLocationCard = (component: any) => (
        <div className={locationCard}>
            <h3 className={infoCardTitle}>
                <FmdGoodOutlinedIcon htmlColor={iconColor} />
                Location
            </h3>
            {component.location?.data?.location ? (
                <ProcessedHtml body={component.location.data.location} />
            ) : null}
        </div>
    );

    const renderIndustryLocationGroup = (
        industryComponent: any,
        locationComponent: any
    ) => (
        <div className={industryLocationGroup}>
            {renderIndustryCard(industryComponent)}
            {renderLocationCard(locationComponent)}
        </div>
    );

    const renderImage = (component: any) => (
        <div className={imageComponent}>
            {component.logo?.localFile ? (
                <img src={component.logo.localFile.publicURL} alt="Logo" />
            ) : null}
        </div>
    );

    const renderPlaceholderImage = () => (
        <div className={estuaryImgLogo}>
            <StaticImage
                src="../../../images/estuary-grey-img-logo.png"
                alt="Estuary image logo"
            />
        </div>
    );

    const renderComponent = (component: any) => {
        console.log('component:', component.__typename);
        switch (component.__typename) {
            case 'STRAPI__COMPONENT_CASE_STUDY_HIGHLIGHTED_CONTENT':
                return renderHighlightedContent(component);
            case 'STRAPI__COMPONENT_CASE_STUDY_TESTIMONIAL':
                return renderTestimonial(component);
            case 'STRAPI__COMPONENT_CASE_STUDY_LIST':
                return renderList(component);
            case 'STRAPI__COMPONENT_CASE_STUDY_NUMBERED_CARD':
                return renderNumberedCard(component);
            case 'STRAPI__COMPONENT_CASE_STUDY_CARD':
                return renderCard(component);
            case 'STRAPI__COMPONENT_CASE_STUDY_ABOUT_CARD':
                return renderAboutCard(component);
            case 'STRAPI__COMPONENT_CASE_STUDY_INDUSTRY_CARD':
                return renderIndustryCard(component);
            case 'STRAPI__COMPONENT_CASE_STUDY_GOALS_CARD':
                return renderGoalsCard(component);
            case 'STRAPI__COMPONENT_CASE_STUDY_LOCATION_CARD':
                return renderLocationCard(component);
            case 'STRAPI__COMPONENT_CASE_STUDY_IMAGE':
                return renderImage(component);
            default:
                return null;
        }
    };

    const renderSection = (section: any) => {
        const components = section.data.filter(
            (component: any) => component?.__typename
        );

        const industryCardComponent = components.find(
            (c: any) =>
                c.__typename === 'STRAPI__COMPONENT_CASE_STUDY_INDUSTRY_CARD'
        );
        const locationCardComponent = components.find(
            (c: any) =>
                c.__typename === 'STRAPI__COMPONENT_CASE_STUDY_LOCATION_CARD'
        );

        // Only exclude industry and location cards since they need to be grouped together
        const otherComponents = components.filter(
            (c: any) =>
                ![
                    'STRAPI__COMPONENT_CASE_STUDY_INDUSTRY_CARD',
                    'STRAPI__COMPONENT_CASE_STUDY_LOCATION_CARD',
                ].includes(c.__typename)
        );

        return (
            <>
                <div className={sectionContent}>
                    {otherComponents.map((component: any) => (
                        <div
                            key={`grid-section-component-${component.__typename}`}
                            className={componentWrapper}
                        >
                            {renderComponent(component)}
                        </div>
                    ))}
                    {industryCardComponent && locationCardComponent ? (
                        <div className={componentWrapper}>
                            {renderIndustryLocationGroup(
                                industryCardComponent,
                                locationCardComponent
                            )}
                        </div>
                    ) : null}
                </div>
                <div className={componentWrapper}>
                    {renderPlaceholderImage()}
                </div>
            </>
        );
    };

    return (
        <TabbedCarousel tabs={sections}>
            {sections.map((section) => (
                <div
                    key={`carousel-section-${section.id}`}
                    className={sectionSlide}
                >
                    {renderSection(section)}
                </div>
            ))}
        </TabbedCarousel>
    );
};

export default SectionsCarousel;
