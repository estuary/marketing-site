import React from 'react';
import TabbedCarousel from '../../../components/TabbedCarousel';
import { ProcessedHtml } from '../../../components/HtmlProcessor';
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
    aboutCard,
    goalsCard,
    industryCard,
    locationCard,
    industryLocationGroup,
    imageComponent,
    emptySection,
} from './styles.module.less';

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
        <div
            key={component.title ? component.title : 'highlighted-content'}
            className={highlightedContent}
        >
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
                    {component.numberedCards.map((card: any, index: number) => (
                        <div key={index} className={numberedCard}>
                            {card.number ? (
                                <span className={number}>
                                    {String(card.number).padStart(2, '0')}
                                </span>
                            ) : null}
                            <div className={numberedCardContent}>
                                {card.title ? <h4>{card.title}</h4> : null}
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
        <div
            key={component.text ? component.text : 'testimonial'}
            className={testimonial}
        >
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
            <React.Fragment key={title}>
                {component.title ? (
                    <div className={cardsGroup}>
                        <h3>{title}</h3>
                    </div>
                ) : null}
                {items.map((item: any, index: number) => (
                    <div key={`${title}-item-${index}`} className={cardStyle}>
                        <p>{item ? String(item) : ''}</p>
                    </div>
                ))}
            </React.Fragment>
        );
    };

    const renderNumberedCard = (component: any) => (
        <div
            key={component.title ? component.title : 'numbered-card'}
            className={numberedCard}
        >
            {component.number ? (
                <span className={number}>{component.number}</span>
            ) : null}
            {component.title ? <h4>{component.title}</h4> : null}
            {component.description?.data?.description ? (
                <ProcessedHtml body={component.description.data.description} />
            ) : null}
        </div>
    );

    const renderCard = (component: any) => (
        <div
            key={component.title ? component.title : 'card'}
            className={cardStyle}
        >
            {component.title ? <h4>{component.title}</h4> : null}
            {component.description?.data?.description ? (
                <ProcessedHtml body={component.description.data.description} />
            ) : null}
        </div>
    );

    const renderAboutCard = (component: any) => (
        <div
            key={component.about ? component.about : 'about-card'}
            className={aboutCard}
        >
            <h4>About {successStory.title}</h4>
            {component.about?.data?.about ? (
                <ProcessedHtml body={component.about.data.about} />
            ) : null}
        </div>
    );

    const renderIndustryCard = (component: any) => (
        <div
            key={component.industry ? component.industry : 'industry-card'}
            className={industryCard}
        >
            <h4>Industry</h4>
            {component.industry?.data?.industry ? (
                <ProcessedHtml body={component.industry.data.industry} />
            ) : null}
        </div>
    );

    const renderGoalsCard = (component: any) => (
        <div
            key={component.goals ? component.goals : 'goals-card'}
            className={goalsCard}
        >
            <h4>Goals</h4>
            {component.goals?.data?.goals ? (
                <ProcessedHtml body={component.goals.data.goals} />
            ) : null}
        </div>
    );

    const renderLocationCard = (component: any) => (
        <div
            key={component.location ? component.location : 'location-card'}
            className={locationCard}
        >
            <h4>Location</h4>
            {component.location?.data?.location ? (
                <ProcessedHtml body={component.location.data.location} />
            ) : null}
        </div>
    );

    const renderIndustryLocationGroup = (
        industryComponent: any,
        locationComponent: any
    ) => (
        <div key="industry-location-group" className={industryLocationGroup}>
            {renderIndustryCard(industryComponent)}
            {renderLocationCard(locationComponent)}
        </div>
    );

    const renderImage = (component: any) => (
        <div key="image" className={imageComponent}>
            {component.logo?.localFile ? (
                <img src={component.logo.localFile.publicURL} alt="Logo" />
            ) : null}
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
                return (
                    <div key="unknown">
                        Unknown component: {component.__typename}
                    </div>
                );
        }
    };

    const renderSection = (section: any) => {
        const components = section.data.filter(
            (component: any) => component?.__typename
        );

        const aboutCardComponent = components.find(
            (c: any) =>
                c.__typename === 'STRAPI__COMPONENT_CASE_STUDY_ABOUT_CARD'
        );
        const testimonialComponent = components.find(
            (c: any) =>
                c.__typename === 'STRAPI__COMPONENT_CASE_STUDY_TESTIMONIAL'
        );
        const industryCardComponent = components.find(
            (c: any) =>
                c.__typename === 'STRAPI__COMPONENT_CASE_STUDY_INDUSTRY_CARD'
        );
        const locationCardComponent = components.find(
            (c: any) =>
                c.__typename === 'STRAPI__COMPONENT_CASE_STUDY_LOCATION_CARD'
        );

        const otherComponents = components.filter(
            (c: any) =>
                ![
                    'STRAPI__COMPONENT_CASE_STUDY_ABOUT_CARD',
                    'STRAPI__COMPONENT_CASE_STUDY_TESTIMONIAL',
                    'STRAPI__COMPONENT_CASE_STUDY_INDUSTRY_CARD',
                    'STRAPI__COMPONENT_CASE_STUDY_LOCATION_CARD',
                ].includes(c.__typename)
        );

        return (
            <div className={sectionContent}>
                {otherComponents.map((component: any, index: number) => (
                    <div
                        key={`${section.label}-${component.__typename}-${index}`}
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
                {aboutCardComponent ? (
                    <div className={componentWrapper}>
                        {renderAboutCard(aboutCardComponent)}
                    </div>
                ) : null}
                {testimonialComponent ? (
                    <div className={componentWrapper}>
                        {renderTestimonial(testimonialComponent)}
                    </div>
                ) : null}
            </div>
        );
    };

    return (
        <TabbedCarousel tabs={sections}>
            {sections.map((section) => (
                <div key={section.id} className={sectionSlide}>
                    {renderSection(section)}
                </div>
            ))}
        </TabbedCarousel>
    );
};

export default SectionsCarousel;
