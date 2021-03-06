/// <reference types="xrm" />
export declare class ProcessMock implements Xrm.Page.Process {
    id: string;
    name: string;
    stages: Xrm.Collection.ItemCollection<Xrm.Page.Stage>;
    rendered: boolean;
    constructor(components: IProcessComponents);
    getId(): string;
    getName(): string;
    getStages(): Xrm.Collection.ItemCollection<Xrm.Page.Stage>;
    isRendered(): boolean;
}
export interface IProcessComponents {
    id: string;
    name: string;
    stages: Xrm.Collection.ItemCollection<Xrm.Page.Stage>;
    rendered: boolean;
}
