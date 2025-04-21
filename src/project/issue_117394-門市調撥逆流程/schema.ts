import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class OperateStoreTransferInArgs {
    @Field((type) => String)
    transferOrderCode!: string;
}