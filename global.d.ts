export {};

declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'set' | 'js',
            targetId: string | Date,
            config?: unknown
        ) => void;
    }
}
