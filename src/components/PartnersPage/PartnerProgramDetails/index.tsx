import clsx from 'clsx';
import Container from '../../Container';
import { Partner } from '../shared';
import LinkOutlined from '../../LinksAndButtons/LinkOutlined';
import { container, isReverseStyling, darkTheme } from './styles.module.less';
import PartnerAvatar from './PartnerAvatar';

interface PartnerProgramDetailsProps {
    title: string;
    description: string;
    partners: Partner[];
    isReverse?: boolean;
    isDarkTheme?: boolean;
}

const PartnerProgramDetails = ({
    title,
    description,
    partners,
    isReverse = false,
    isDarkTheme = false,
}: PartnerProgramDetailsProps) => {
    return (
        <Container
            className={clsx(
                container,
                isReverse ? isReverseStyling : null,
                isDarkTheme ? darkTheme : null
            )}
        >
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <LinkOutlined
                    id="contact-us-button-partners-page-partner-program-section"
                    href="/partners/#contact-us-form-section"
                    variant={isDarkTheme ? 'primary' : 'secondary'}
                >
                    Contact Us
                </LinkOutlined>
            </div>
            <ul>
                {partners.map((partner, index) => (
                    <PartnerAvatar
                        key={index}
                        icon={partner.icon}
                        name={partner.name}
                        href={partner.href}
                    />
                ))}
            </ul>
        </Container>
    );
};

export default PartnerProgramDetails;
