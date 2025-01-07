import LinkOutlined from '../LinksAndButtons/LinkOutlined';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import { CommonCtaProps } from './types';

const WatchDemoCta = ({ linkVariant = 'outlined' }: CommonCtaProps) => {
    const LinkComponent = linkVariant === 'filled' ? LinkFilled : LinkOutlined;

    return <LinkComponent href="/demo/">Watch Demo</LinkComponent>;
};

export default WatchDemoCta;
