import { sectionTopBottomPadding } from '../../globalStyles/sections.module.less';

export const commonBackgroundImageProps = {
    fadeIn: false,
    critical: true,
};

export const commonSwoopingLinesBackgroundImageProps = {
    ...commonBackgroundImageProps,
    className: sectionTopBottomPadding,
};
