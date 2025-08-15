import { createHash } from 'crypto';

export interface ConnectorChangeInfo {
    id: string;
    title: string;
    slugified_name: string;
    lastModified?: string;
    contentHash: string;
}

export interface ChangeDetectionResult {
    hasChanges: boolean;
    changedConnectors: string[];
    newConnectors: string[];
    deletedConnectors: string[];
    totalConnectors: number;
}

export function generateConnectorHash(connector: any): string {
    const relevantData = {
        id: connector.id,
        title: connector.title,
        imageName: connector.imageName,
        logoUrl: connector.logoUrl,
        recommended: connector.recommended,
        shortDescription: connector.shortDescription,
        longDescription: connector.longDescription,
        connectorTagsByConnectorIdList:
            connector.connectorTagsByConnectorIdList,
        updatedAt: connector.updatedAt || connector.updated_at,
    };

    const dataString = JSON.stringify(
        relevantData,
        Object.keys(relevantData).sort()
    );
    return createHash('sha256')
        .update(dataString)
        .digest('hex')
        .substring(0, 16);
}

export function detectConnectorChanges(
    currentConnectors: any[],
    cachedConnectorHashes: Record<string, string> = {}
): ChangeDetectionResult {
    const changedConnectors: string[] = [];
    const newConnectors: string[] = [];
    const currentHashes: Record<string, string> = {};

    for (const connector of currentConnectors) {
        const slugifiedName = connector.slugified_name;
        if (!slugifiedName) {
            console.warn(
                `Connector ${connector.id} missing slugified_name, skipping`
            );
            continue;
        }

        const currentHash = generateConnectorHash(connector);
        currentHashes[slugifiedName] = currentHash;

        const cachedHash = cachedConnectorHashes[slugifiedName];

        if (!cachedHash) {
            newConnectors.push(slugifiedName);
        } else if (cachedHash !== currentHash) {
            changedConnectors.push(slugifiedName);
        }
    }

    const currentSlugs = new Set(Object.keys(currentHashes));
    const deletedConnectors = Object.keys(cachedConnectorHashes).filter(
        (slug) => !currentSlugs.has(slug)
    );

    const hasChanges =
        changedConnectors.length > 0 ||
        newConnectors.length > 0 ||
        deletedConnectors.length > 0;

    return {
        hasChanges,
        changedConnectors,
        newConnectors,
        deletedConnectors,
        totalConnectors: currentConnectors.length,
    };
}

export function getAffectedConnectors(
    changeResult: ChangeDetectionResult
): string[] {
    return [...changeResult.changedConnectors, ...changeResult.newConnectors];
}
