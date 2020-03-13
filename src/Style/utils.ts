import { umbraMap, penumbraMap, ambientMap } from './lightingMaps';

export function BoxShadow(height: number): string {
    return `
        ${umbraMap[height]} rgba(0,0,0,.2),
        ${penumbraMap[height]} rgba(0,0,0,.14),
        ${ambientMap[height]} rgba(0,0,0,.12);
        `;
}

export function AnimationDurTFn(theme: any, animIn: 'out' | 'in' | boolean) {
    if (animIn === 'in' || animIn === true) return [theme.animation.inSpeed, theme.animation.inTimingFn].join(' ');
    if (animIn === 'out' || animIn === false) return [theme.animation.outSpeed, theme.animation.outTimingFn].join(' ');
}

export function generateColor(str: string) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var c = (hash & 0x00ffffff).toString(16).toUpperCase();

    const backgroundColor = '00000'.substring(0, 6 - c.length) + c;

    const redChannel = parseInt(backgroundColor.slice(0, 2), 16);
    const greChannel = parseInt(backgroundColor.slice(2, 4), 16);
    const bluChannel = parseInt(backgroundColor.slice(4, 6), 16);

    const arr = [redChannel, greChannel, bluChannel];

    const average =  arr.reduce((a,b) => a + b, 0) / arr.length

    if(average > 125) {
        return [`#${backgroundColor}`, '#000000'];
    } else {
        return [`#${backgroundColor}`, '#FFFFFF'];
    }
}