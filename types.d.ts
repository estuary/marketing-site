declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png' {
    export default string;
}

declare module '*.module.less';
