import React from 'react';
import clsx from 'clsx';
import CloudProviderIcon from '../../../../svgs/cloud-provider-icon.svg';
import CustomerCloudIcon from '../../../../svgs/customer-cloud-icon.svg';
import ControlPlaneIcon from '../../../../svgs/control-plane-icon.svg';
import VpcIcon from '../../../../svgs/vpc-icon.svg';
import DatabaseIcon from '../../../../svgs/database-icon.svg';
import FlowStorageIcon from '../../../../svgs/flow-storage-icon.svg';
import UsaFlagIcon from '../../../../svgs/usa-flag-icon.svg';
import EuropeFlagIcon from '../../../../svgs/europe-flag-icon.svg';
import PrivateDataPlaneIcon from '../../../../svgs/private-data-plane-icon.svg';
import {
    solidBorderBox,
    secondLevelSolidBorderBox,
    dashedBorderBox,
    middleTag,
    arrowLeft,
    arrowRight,
    horizontalWrapper,
    minHeight,
    privateLinkTag,
    vpcMarginBottom,
    privateDeploymentTag,
    privateVpcBox,
    metadataOnlyDarkerBlueTag,
    metadataOnlyLighterBlueTag,
    relativePosition,
} from '../styles.module.less';

const iconSize = 30;

interface DeploymentDiagramProps {
    selectedTab: string;
}

const DeploymentDiagram = ({ selectedTab = '1' }: DeploymentDiagramProps) => {
    return (
        <>
            <div className={solidBorderBox}>
                <div className={dashedBorderBox}>
                    <CloudProviderIcon width={iconSize} />
                    <span>Estuary Cloud provider & Region</span>
                    <div
                        className={clsx(
                            solidBorderBox,
                            secondLevelSolidBorderBox,
                            minHeight
                        )}
                    >
                        <ControlPlaneIcon width={iconSize} />
                        <span>Control Plane</span>
                    </div>
                    {selectedTab === '1' ? (
                        <div className={horizontalWrapper}>
                            <div
                                className={clsx(
                                    solidBorderBox,
                                    secondLevelSolidBorderBox
                                )}
                            >
                                <UsaFlagIcon width={iconSize} />
                                <span>US Data Plane</span>
                            </div>
                            <div
                                className={clsx(
                                    solidBorderBox,
                                    secondLevelSolidBorderBox
                                )}
                            >
                                <EuropeFlagIcon width={iconSize} />
                                <span>EU Data Plane</span>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={clsx(solidBorderBox, relativePosition)}>
                <div className={dashedBorderBox}>
                    <CustomerCloudIcon width={iconSize} />
                    <span>
                        {selectedTab === '1'
                            ? 'Customer Cloud'
                            : 'Customer Cloud & Region'}
                    </span>
                    <div className={horizontalWrapper}>
                        {selectedTab === '2' ? (
                            <div
                                className={clsx(
                                    solidBorderBox,
                                    secondLevelSolidBorderBox,
                                    privateVpcBox
                                )}
                            >
                                <VpcIcon width={iconSize} />
                                <span className={vpcMarginBottom}>
                                    Private Deployment VPC
                                </span>
                                <div className={dashedBorderBox}>
                                    <PrivateDataPlaneIcon width={iconSize} />
                                    <span>Private Data Plane</span>
                                </div>
                                <div
                                    className={clsx(
                                        middleTag,
                                        privateDeploymentTag,
                                        privateLinkTag
                                    )}
                                >
                                    <div className={arrowLeft} />
                                    <span>PrivateLink</span>
                                    <div className={arrowRight} />
                                </div>
                                <div
                                    className={clsx(
                                        middleTag,
                                        privateDeploymentTag,
                                        metadataOnlyDarkerBlueTag
                                    )}
                                >
                                    <div className={arrowLeft} />
                                    <span>metadata only</span>
                                    <div className={arrowRight} />
                                </div>
                            </div>
                        ) : null}
                        <div
                            className={clsx(
                                solidBorderBox,
                                secondLevelSolidBorderBox
                            )}
                        >
                            <VpcIcon width={iconSize} />
                            <span
                                className={
                                    selectedTab === '2' ? vpcMarginBottom : null
                                }
                            >
                                Customer VPC
                            </span>
                            <div className={horizontalWrapper}>
                                {selectedTab === '3' ? (
                                    <div className={dashedBorderBox}>
                                        <PrivateDataPlaneIcon
                                            width={iconSize}
                                        />
                                        <span>Private Data Plane</span>
                                    </div>
                                ) : null}
                                <div
                                    className={clsx(
                                        solidBorderBox,
                                        secondLevelSolidBorderBox
                                    )}
                                >
                                    <DatabaseIcon width={iconSize} />
                                    <span>Database</span>
                                </div>
                            </div>
                            <div className={dashedBorderBox}>
                                <FlowStorageIcon width={iconSize} />
                                <span>Flow Storage</span>
                            </div>
                        </div>
                    </div>
                </div>
                {['1', '3'].includes(selectedTab) ? (
                    <div
                        className={clsx(
                            middleTag,
                            selectedTab === '3'
                                ? metadataOnlyLighterBlueTag
                                : null
                        )}
                    >
                        <div className={arrowLeft} />
                        <span>
                            {selectedTab === '1' ? 'Internet' : 'metadata only'}
                        </span>
                        <div className={arrowRight} />
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default DeploymentDiagram;
