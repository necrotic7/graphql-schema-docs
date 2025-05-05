export type TRouter = {
    folder: string;
    type: EnumRouterType;
    path: string;
    description?: string;
};

export enum EnumRouterType {
    DOC = 'markdown 文件',
    VOYAGER = 'voyager 關聯圖',
}
