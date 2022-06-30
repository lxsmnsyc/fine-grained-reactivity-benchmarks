export declare type ValueGetter<T> = () => T;
export declare type ValueSetter<T> = (newValue: T) => void;

export interface ReactiveApi {
  createReactiveValue: <T>(value: T) => [ValueGetter<T>, ValueSetter<T>];
  createReactiveFunction: (fn: () => any) => void;
}
