import Container from '../../../Container';
import { ButtonsSectionContent } from '../../../../templates/solutions/shared';
import SectionTitle from '../../SectionTitle';
import OutboundLinkFilled from '../../../LinksAndButtons/OutboundLinkFilled';
import LinkOutlined from '../../../LinksAndButtons/LinkOutlined';
import { sectionText } from '../../styles.module.less';
import { container, buttonsWrapeper } from './styles.module.less';

interface ButtonsSectionProps {
    data: ButtonsSectionContent;
}

const ButtonsSection = ({ data }: ButtonsSectionProps) => {
    return (
        <section>
            <Container isVertical className={container}>
                <div className={sectionText}>
                    <SectionTitle sectionTitle={data.sectionTitle} />
                    {data.description ? <p>{data.description}</p> : null}
                </div>
                <div className={buttonsWrapeper}>
                    <OutboundLinkFilled
                        href={data.primaryButton.urlOrPath}
                        target="_blank"
                    >
                        {data.primaryButton.title}
                    </OutboundLinkFilled>
                    <LinkOutlined
                        href={data.secondaryButton.urlOrPath}
                        target="_blank"
                        variant="secondary"
                    >
                        {data.secondaryButton.title}
                    </LinkOutlined>
                </div>
            </Container>
        </section>
    );
};

export default ButtonsSection;
