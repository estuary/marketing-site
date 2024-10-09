import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';
import clsx from 'clsx';
import { TextField } from '@mui/material';
import CopyIcon from '../../svgs/share-social-icons/copy.svg';
import {
    buttonStyling,
    isCopiedStyling,
    copyFailed,
    container,
} from './styles.module.less';

interface CopyToClipboardButtonProps {
    contentToCopy: string;
}

const CopyToClipboardButton = ({
    contentToCopy,
}: CopyToClipboardButtonProps) => {
    const [isCopied, setIsCopied] = useState(false);
    const [isCopyFailed, setIsCopyFailed] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contentToCopy).then(
            () => {
                setIsCopied(true);
                setIsCopyFailed(false);
                setTimeout(() => setIsCopied(false), 2000);
            },
            () => {
                setIsCopied(false);
                setIsCopyFailed(false);
            }
        );
    };
    return (
        <div className={container}>
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
                    onClick={copyToClipboard}
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
            {isCopyFailed ? (
                <TextField
                    value={contentToCopy}
                    variant="filled"
                    className={copyFailed}
                />
            ) : null}
        </div>
    );
};

export default CopyToClipboardButton;
