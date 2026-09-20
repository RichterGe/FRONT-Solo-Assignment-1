    export interface Todo {
        id: number;
        name: string;
        done: boolean;
    }

    export enum FilterType {
    All = 'all',
    Open = 'open',
    Done = 'done'
}