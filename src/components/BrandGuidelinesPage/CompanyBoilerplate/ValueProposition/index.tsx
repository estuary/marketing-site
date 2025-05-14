import { ReactNode, useRef } from 'react';
import CopyToClipboardButton from '../../../CopyToClipboardButton';
import CopyIcon from '../../../../svgs/copy.svg';
import useWindowExistence from '../../../../hooks/useWindowExistence';
import { container, header, body } from './styles.module.less';

export interface ValuePropositionProps {
    title: string;
    text: ReactNode;
}

const ValueProposition = ({ title, text }: ValuePropositionProps) => {
    const textRef = useRef<HTMLDivElement>(null);
    const hasWindow = useWindowExistence();

    return (
        <div className={container}>
            <div className={header}>
                <CopyToClipboardButton
                    contentToCopy={
                        hasWindow ? textRef.current?.innerText ?? '' : ''
                    }
                    copyIcon={<CopyIcon color="var(--blue)" />}
                />
                <h3>{title}</h3>
            </div>
            <div ref={textRef} className={body}>
                {text}
            </div>
        </div>
    );
};

export default ValueProposition;
