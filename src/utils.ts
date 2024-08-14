// NOTE: We're assuming that the image name follows the convention of
// (source|materialization)-name

import {
    fullPricingPerConnector,
    halfPricingPerConnector,
    halfSelfServiceConnectorLimit,
} from './components/PricingCalculator/shared';

// eslint-disable-next-line no-useless-escape
const CONNECTOR_IMAGE_RE = /(source|materialize)-([a-z0-9\-]+)/;

export const normalizeConnector = (connector: any) => {
    if (!connector) {
        return connector;
    }
    const regex_result = connector.imageName.match(CONNECTOR_IMAGE_RE);
    const type = connector.connectorTagsByConnectorIdList?.[0]?.protocol as
        | 'capture'
        | 'materialization';
    return {
        id: connector.id,
        externalUrl: connector.externalUrl,
        imageName: connector.imageName,
        shortDescription: connector.shortDescription?.['en-US'],
        longDescription: connector.longDescription?.['en-US'],
        title: connector.title?.['en-US'],
        logoUrl: connector.logoUrl?.['en-US'],
        logo: connector.logo,
        recommended: connector.recommended,
        type,
        slugified_name: regex_result[2],
        slug: regex_result
            ? `/${type === 'capture' ? 'source' : 'destination'}/${regex_result[2]}`
            : null,
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

export const scale = (idx) => {
    const previousMarkIndex = Math.floor(idx - 1);
    const previousMark = gbPoints[previousMarkIndex];

    if (idx === previousMarkIndex) {
        return previousMark;
    }

    const nextMark = gbPoints[previousMarkIndex + 1];

    if (!nextMark) {
        return previousMark;
    }

    const frac = (idx - 1 - previousMarkIndex) * (nextMark - previousMark);

    return previousMark + frac;
};

export const marks = gbPoints.map((_, index) => ({
    value: index + 1,
    label: gByteLabel(scale(index + 1)),
}));

// eslint-disable-next-line new-cap
export const currencyFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const calculatePrice = (gb: number, connectors: number) => ({
    estuary:
        costPerGB_calc * gb +
        (connectors <= halfSelfServiceConnectorLimit
            ? fullPricingPerConnector
            : halfPricingPerConnector) *
            connectors,
    fivetran:
        1590 +
        45.7 * gb +
        -0.0517 * gb ** 2 +
        2.79 * 10 ** -5 * gb ** 3 +
        -5.37 * 10 ** -9 * gb ** 4,
    confluent: connectors * 150 + (1.73 * gb + 1100),
});
