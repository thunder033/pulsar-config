export declare function Enum<T extends string>(o: T[]): {
    [K in T]: K;
};
