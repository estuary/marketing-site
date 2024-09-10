import React from 'react';
import FlowLogo from '../../svgs/flow-logo.svg';
import {
    blogPostHeaderVectors,
    productFlowSectionOneImage,
} from './styles.module.less';

const FlowLogoVector = () => {
    return (
        <div style={{ display: 'block' }} className={blogPostHeaderVectors}>
            <FlowLogo className={productFlowSectionOneImage} />
        </div>
    );
};

export default FlowLogoVector;
