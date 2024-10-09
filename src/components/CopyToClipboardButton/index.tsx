import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';
import clsx from 'clsx';
import CopyIcon from '../../svgs/share-social-icons/copy.svg';
import { buttonStyling, isCopiedStyling } from './styles.module.less';

interface CopyToClipboardButtonProps {
    isCopied: boolean;
    onCopy: () => void;
}

const CopyToClipboardButton = ({
    isCopied,
    onCopy,
}: CopyToClipboardButtonProps) => {
    return (
        <Tooltip
            title="Copied"
            arrow
            open={isCopied}
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, -4],
                            },
                        },
                    ],
                },
            }}
        >
            <button
                onClick={onCopy}
                className={clsx(
                    buttonStyling,
                    isCopied ? isCopiedStyling : null
                )}
            >
                {isCopied ? (
                    <CheckIcon fontSize="small" htmlColor="#00A99D" />
                ) : (
                    <CopyIcon />
                )}
            </button>
        </Tooltip>
    );
};

export default CopyToClipboardButton;
