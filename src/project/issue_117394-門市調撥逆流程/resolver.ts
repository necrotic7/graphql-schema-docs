import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { OperateStoreTransferInInput, SearchTransferOrderArgs, StoreTransferOrder } from "./type";

@Resolver((of) => StoreTransferOrder)
export class TransferOrderResolver {

    @Query((returns) => StoreTransferOrder, {
        description: '調撥單查詢',
    })
    async storeTransferOrdersWrap(
        @Args() params: SearchTransferOrderArgs,
    ){
        return;
    }

    @Mutation((returns) => Boolean, {
        description: '調撥單撥入操作',
    })
    async operateStoreTransferIn(
        @Arg('input') input: OperateStoreTransferInInput,
    ) {
        return;
    }
}