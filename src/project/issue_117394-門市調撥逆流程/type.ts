import {
    ArgsType,
    Field,
    ID,
    InputType,
    Int,
    ObjectType,
    registerEnumType,
} from 'type-graphql';
import { UploadScalar } from '../../utils/scalar';

export enum EnumConfirmationCode {
    Create = '0',
    Outbound = '1',
    Inbound = '2',
    Confirm = '3',
    Cancel = 'X',
}

registerEnumType(EnumConfirmationCode, {
    name: 'EnumConfirmationCode',
    description: '確認碼',
    valuesConfig: {
        Create: { description: '開立' },
        Outbound: { description: '撥出' },
        Inbound: { description: '撥入' },
        Confirm: { description: '確認' },
        Cancel: { description: '作廢' },
    },
});

export enum EnumOperateStoreTransferInBrokenType {
    RETURN,
    REORDER,
}

registerEnumType(EnumOperateStoreTransferInBrokenType, {
    name: 'EnumOperateStoreTransferInBrokenType',
    description: '確認碼',
    valuesConfig: {
        RETURN: { description: '退貨' },
        REORDER: { description: '補貨' },
    },
});

@ObjectType()
export class StoreTransferOrder {
    @Field({ description: '通路' })
    legal: string;

    @Field({ description: '調撥單號' })
    transferOrderCode: string;

    @Field({ nullable: true, description: '對應調撥單號' })
    relatedTransferOrderCode?: string;

    @Field({ nullable: true, description: '單據來源單號' })
    sourceOrderCode?: string;

    @Field({ nullable: true, description: '調撥日期' })
    transferDate?: Date;

    @Field({ nullable: true, description: '撥出門市' })
    outBoundStoreCode?: string;

    @Field({ nullable: true, description: '撥入門市' })
    inBoundStoreCode?: string;

    @Field((type) => EnumConfirmationCode, { description: '確認狀態' })
    confirmationCode: EnumConfirmationCode;

    @Field({ nullable: true, description: '撥出日期' })
    outBoundDate?: Date;

    @Field({ nullable: true, description: '撥出人員' })
    outBoundUserCode?: string;
}

@InputType()
export class TransferOrderFilterInput {
    @Field((type) => String, { nullable: true })
    transferOrderCode?: string;

    @Field((type) => String, { nullable: true })
    createdDate1?: string;

    @Field((type) => String, { nullable: true })
    createdDate2?: string;

    @Field((type) => String, { nullable: true })
    legal?: string;

    @Field((type) => String, { nullable: true })
    inBoundStoreCode?: string;

    @Field((type) => EnumConfirmationCode, { nullable: true })
    confirmationCode?: EnumConfirmationCode;
}

@ArgsType()
export class SearchTransferOrderArgs {
    @Field((type) => TransferOrderFilterInput, { nullable: true })
    filters?: TransferOrderFilterInput;

    @Field((type) => Int, { nullable: true, defaultValue: 50 })
    limit?: number;

    @Field((type) => Int, { nullable: true })
    offset?: number;
}

@ObjectType()
export class StoreTransferOrderItem {
    @Field((type) => Int, { description: '調撥單項次' })
    transferOrderItemSeq: number;

    @Field({ description: '調撥單號' })
    transferOrderCode: string;

    @Field({ nullable: true, description: '調撥料號' })
    transferMaterialCode?: string;

    @Field({ nullable: true, description: '品名' })
    productName?: string;

    @Field({ nullable: true, description: '規格' })
    specification?: string;

    @Field({ nullable: true, description: '調撥單位' })
    transferUnit?: string;

    @Field({ nullable: true, description: '撥出批號' })
    outboundLotNo?: string;

    @Field((type) => Int, { nullable: true, description: '撥出數量' })
    outboundQuantity?: number;

    @Field({ nullable: true, description: '撥入批號' })
    inboundLotNo?: string;

    @Field((type) => Int, { nullable: true, description: '撥入數量' })
    inboundQuantity?: number;
}

@ObjectType()
export class StoreTransferOrderItemSN {
    @Field({ description: '調撥單號' })
    transferOrderCode: string;

    @Field({ nullable: true, description: '調撥料號' })
    serialMaterialCode?: string;

    @Field({ nullable: true, description: '品名' })
    productName?: string;

    @Field({ nullable: true, description: '規格' })
    specification?: string;

    @Field({ nullable: true, description: '調撥單位' })
    transferUnit?: string;

    @Field({ nullable: true, description: '序號' })
    sn?: string;

    @Field((type) => Int, { nullable: true, description: '序號數量' })
    serialQuantity?: number;
}

@ArgsType()
export class PostStoreTransferInConfirmArgs {
    @Field((type) => String)
    transferOrderCode: string;

    @Field((type) => String)
    storeCode: string;

    @Field((type) => String, { nullable: true })
    createdUserCode?: string;
}

@ArgsType()
export class CancelStoreTransferOutArgs {
    @Field((type) => String)
    legal: string;

    @Field((type) => String)
    relatedTransferOrderCode: string;

    @Field((type) => String, { nullable: true })
    createdUserCode?: string;
}

@InputType()
export class OperateStoreTransferInInput {
    @Field((type) => String, { description: '調撥單號' })
    transferOrderCode: string;

    @Field((type) => [OperateStoreTransferInItem], {
        description: '確認品項清單',
    })
    items: OperateStoreTransferInItem[];

    @Field((type) => [OperateStoreTransferInReorder], {
        description: '請購清單',
        nullable: true,
    })
    reorders: OperateStoreTransferInReorder[];
}

@InputType()
export class OperateStoreTransferInItem {
    @Field((type) => ID, { description: '項次' })
    transferOrderItemSeq: number;

    @Field((type) => String, { description: '訂單料號' })
    materialCode: string;

    @Field((type) => String, { description: '訂單批號', nullable: true })
    lotNo?: string;

    @Field((type) => Int, { description: '實收數量' })
    receivedQuantity: number;

    @Field((type) => Int, { description: '損壞數量' })
    brokenQuantity: number;

    @Field((type) => EnumOperateStoreTransferInBrokenType, {
        description: '損壞商品處理方式',
        nullable: true,
    })
    brokenType?: EnumOperateStoreTransferInBrokenType;

    @Field((type) => UploadScalar, { description: '照片', nullable: true })
    photo?: any;
    photoUrl?: string;

    @Field((type) => String, { description: '備註', nullable: true })
    remark?: string;

    @Field((type) => [OperateStoreTransferInSn], {
        description: '序號清單',
        nullable: true,
    })
    snList?: OperateStoreTransferInSn[];
}

@InputType()
export class OperateStoreTransferInSn {
    @Field((type) => String, { description: '序號' })
    sn: string;

    @Field((type) => Boolean, { description: '是否到貨' })
    isReceived: boolean;

    @Field((type) => Boolean, { description: '是否損壞', defaultValue: false })
    isBroken: boolean;

    @Field((type) => UploadScalar, { description: '照片', nullable: true })
    photo?: any;
    photoUrl?: string;

    @Field((type) => String, { description: '備註', nullable: true })
    remark?: string;
}

@InputType()
export class OperateStoreTransferInReorder {
    @Field((type) => String, { description: '訂單料號' })
    materialCode: string;

    @Field((type) => Boolean, { description: '是否需要出貨' })
    isShipmentRequired: boolean;

    @Field((type) => Int, { description: '請購數量' })
    quantity: number;

    @Field((type) => UploadScalar, { description: '照片', nullable: true })
    photo?: any;
    photoUrl?: string;

    @Field((type) => String, {
        description: '備註，放入批/序號',
        nullable: true,
    })
    remark?: string;
}
