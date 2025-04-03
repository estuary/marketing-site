import clsx from 'clsx';
import CloudProviderIcon from '../../../svgs/cloud-provider-icon.svg';
import CustomerCloudIcon from '../../../svgs/customer-cloud-icon.svg';
import ControlPlaneIcon from '../../../svgs/control-plane-icon.svg';
import VpcIcon from '../../../svgs/vpc-icon.svg';
import DatabaseIcon from '../../../svgs/database-icon.svg';
import FlowStorageIcon from '../../../svgs/flow-storage-icon.svg';
import UsaFlagIcon from '../../../svgs/usa-flag-icon.svg';
import EuropeFlagIcon from '../../../svgs/europe-flag-icon.svg';
import PrivateDataPlaneIcon from '../../../svgs/private-data-plane-icon.svg';
import { DeploymentOption } from '../../../../shared';
import {
    container,
    solidBorderBox,
    secondLevelSolidBorderBox,
    dashedBorderBox,
    middleTag,
    horizontalWrapper,
    minHeight,
    privateLinkTag,
    vpcMarginBottom,
    privateDeploymentTag,
    metadataOnlyDarkerBlueTag,
    relativePosition,
    ownedByEstuaryBox,
    vpcDashedBorderBox,
} from './styles.module.less';

const iconSize = 30;

interface DeploymentDiagramProps {
    deploymentOption: DeploymentOption;
}

const DeploymentOptionDiagram = ({
    deploymentOption = 'public',
}: DeploymentDiagramProps) => {
    return (
        <div className={container}>
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
                    {deploymentOption === 'public' ? (
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
                        {deploymentOption === 'public'
                            ? 'Customer Cloud'
                            : 'Customer Cloud & Region'}
                    </span>
                    <div className={horizontalWrapper}>
                        {['private', 'byoc'].includes(deploymentOption) ? (
                            <div
                                className={clsx(
                                    dashedBorderBox,
                                    vpcDashedBorderBox
                                )}
                            >
                                <div
                                    className={clsx(
                                        dashedBorderBox,
                                        ownedByEstuaryBox
                                    )}
                                >
                                    <span>
                                        Owned by <br />{' '}
                                        {deploymentOption === 'private'
                                            ? 'Estuary'
                                            : 'Customer'}
                                    </span>
                                </div>
                                <VpcIcon width={iconSize} />
                                <span>Private Deployment VPC</span>
                                <div className={dashedBorderBox}>
                                    <PrivateDataPlaneIcon width={iconSize} />
                                    <span>Private Data Plane</span>
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
                                    ['private', 'byoc'].includes(
                                        deploymentOption
                                    )
                                        ? vpcMarginBottom
                                        : null
                                }
                            >
                                Customer VPC
                            </span>
                            <div className={horizontalWrapper}>
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
                {deploymentOption === 'public' ? (
                    <div className={middleTag}>
                        <span>Internet</span>
                    </div>
                ) : null}
                {['private', 'byoc'].includes(deploymentOption) ? (
                    <>
                        <div
                            className={clsx(
                                middleTag,
                                privateDeploymentTag,
                                privateLinkTag
                            )}
                        >
                            <span>PrivateLink</span>
                        </div>
                        <div
                            className={clsx(
                                middleTag,
                                privateDeploymentTag,
                                metadataOnlyDarkerBlueTag
                            )}
                        >
                            <div>
                                <span>metadata only</span>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default DeploymentOptionDiagram;
