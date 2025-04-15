// NOTE: We're assuming that the image name follows the convention of
// (source|materialization)-name

import { Mark } from '@mui/base';
import { Connector, ConnectorType } from '../shared';
import {
    fullPricingPerConnector,
    halfPricingPerConnector,
    halfSelfServiceConnectorLimit,
} from './components/PricingCalculator/shared';

// eslint-disable-next-line no-useless-escape
const CONNECTOR_IMAGE_RE = /(source|materialize|dekaf)-([a-z0-9\-]+)/;

export const normalizeConnector = (
    connector: Connector | undefined
): Connector | undefined => {
    if (
        // Exclude connectors without a tag (Kelkoo)
        connector?.connectorTagsByConnectorIdList &&
        connector.connectorTagsByConnectorIdList.length < 1
    ) {
        return undefined;
    }

    if (!connector) {
        return connector;
    }

    const { id, title, imageName, logoUrl, connectorTagsByConnectorIdList } =
        connector;

    if (!title) {
        throw new Error(`Error:connector:${id}:missing prop:Title`);
    }

    if (!imageName) {
        throw new Error(`Error:connector:${id}:missing prop:imageName`);
    }

    const regex_result = imageName.match(CONNECTOR_IMAGE_RE);

    if (!regex_result?.[2]) {
        throw new Error(`Error:connector:${id}:missing prop:Slugified`);
    }

    if (!logoUrl) {
        throw new Error(`Error:connector:${id}:missing prop:logoUrl`);
    }

    const type = connectorTagsByConnectorIdList[0]
        ?.protocol as ConnectorType | null;

    if (!type) {
        throw new Error(`Error:connector:${id}:missing prop:Connector`);
    }

    // For dekaf connectors we want to use the entire end portion so that there is less chance
    //  that the name will overlap. Especially for when we end up making a native connector that
    //  was previously dekaf.
    const slugified_name: string = connector.imageName.includes(
        'ghcr.io/estuary/dekaf'
    )
        ? regex_result[0]
        : regex_result[2];

    return {
        id: connector.id,
        externalUrl: connector.externalUrl,
        imageName: connector.imageName,
        shortDescription: connector.shortDescription?.['en-US'],
        longDescription: connector.longDescription?.['en-US'],
        title: title['en-US'],
        logoUrl: logoUrl['en-US'],
        logo: connector.logo,
        recommended: connector.recommended,
        type,
        slugified_name,
        slug: `/${type === 'capture' ? 'source' : 'destination'}/${slugified_name}`,
        connectorTagsByConnectorIdList:
            connector.connectorTagsByConnectorIdList,
    };
};

export const costPerGB_calc = 0.5;
export const costPerGB = `$${costPerGB_calc.toFixed(2)}/GB`;

export const gbPoints = [2, 250, 500, 1000, 2000];

export const gByteLabel = (gb: number, maxPrec = 10) => {
    const units = ['GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = gb;

    while (scaledValue >= 1000 && unitIndex < units.length - 1) {
        unitIndex += 1;
        scaledValue /= 1000;
    }

    return `${scaledValue.toFixed(Math.min(unitIndex, maxPrec))}${units[unitIndex]}`;
};

export const totalMarks = 21;

export const scale = (idx: number): number => {
    const segmentLength = (totalMarks - 1) / (gbPoints.length - 1);
    const segmentIndex = Math.floor((idx - 1) / segmentLength);
    const segmentStart = segmentIndex * segmentLength + 1;
    const segmentEnd = (segmentIndex + 1) * segmentLength + 1;

    const startValue = gbPoints[segmentIndex];
    const endValue = gbPoints[segmentIndex + 1];

    if (segmentIndex >= gbPoints.length - 1) {
        return startValue;
    }

    const frac = (idx - segmentStart) / (segmentEnd - segmentStart);

    return startValue + frac * (endValue - startValue);
};

export const inverseScale = (gb: number): number => {
    const segmentLength = (totalMarks - 1) / (gbPoints.length - 1);

    let segmentIndex = 0;
    for (let i = 0; i < gbPoints.length - 1; i++) {
        if (gbPoints[i] <= gb && gb <= gbPoints[i + 1]) {
            segmentIndex = i;
            break;
        }
    }

    const startValue = gbPoints[segmentIndex];
    const endValue = gbPoints[segmentIndex + 1];

    if (gb === startValue) {
        return segmentIndex * segmentLength + 1;
    }

    if (gb === endValue) {
        return (segmentIndex + 1) * segmentLength + 1;
    }

    const frac = (gb - startValue) / (endValue - startValue);
    return segmentIndex * segmentLength + 1 + frac * segmentLength;
};

const createMarks = (): Mark[] => {
    const marks: Mark[] = [];

    for (let i = 1; i <= totalMarks; i++) {
        if ((i - 1) % ((totalMarks - 1) / (gbPoints.length - 1)) === 0) {
            const gbIndex = Math.floor(
                (i - 1) / ((totalMarks - 1) / (gbPoints.length - 1))
            );
            marks.push({
                value: i,
                label: gByteLabel(gbPoints[gbIndex]),
            });
        } else {
            marks.push({
                value: i,
                label: '',
            });
        }
    }

    return marks;
};

export const marks = createMarks();

// eslint-disable-next-line new-cap
export const currencyFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

export const getPricingPerConnectors = (connectors: number): number => {
    if (connectors <= halfSelfServiceConnectorLimit) {
        return fullPricingPerConnector * connectors;
    }
    const excessConnectors = connectors - 6;
    return (
        halfPricingPerConnector * excessConnectors + fullPricingPerConnector * 6
    );
};

// The cost is doubled because we want to make sure the user knows that we are
//  going to charge the user for the CDC data coming IN and OUT
export const calculateDataCost = (gb: number) => {
    return costPerGB_calc * 2 * gb;
};

export const calculatePrice = (gb: number, connectors: number) => ({
    estuary: calculateDataCost(gb) + getPricingPerConnectors(connectors),
    fivetran:
        1590 +
        45.7 * gb +
        -0.0517 * gb ** 2 +
        2.79 * 10 ** -5 * gb ** 3 +
        -5.37 * 10 ** -9 * gb ** 4,
    confluent: connectors * 150 + (1.73 * gb + 1100),
});

export const fireTagEvent: typeof window.gtag = (...args) => {
    const hasGtag =
        typeof window !== 'undefined' && typeof window.gtag === 'function';

    if (hasGtag) {
        window.gtag(...args);
    }
};
