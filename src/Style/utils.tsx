import { umbraMap, penumbraMap, ambientMap } from './lightingMaps';

export function BoxShadow(height: number): string {
    return `
        ${umbraMap[height]} rgba(0,0,0,.2),
        ${penumbraMap[height]} rgba(0,0,0,.14),
        ${ambientMap[height]} rgba(0,0,0,.12);
        `;
}

