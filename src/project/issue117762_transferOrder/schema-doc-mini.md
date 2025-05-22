# Schema Types


## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="query.storetransferorderitems">storeTransferOrderItems</strong></td>
<td valign="top">[<a href="#storetransferorderitem">StoreTransferOrderItem</a>!]</td>
<td>

調撥單品項

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">transferOrderCode</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

調撥單單號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.storetransferorders">storeTransferOrders</strong></td>
<td valign="top">[<a href="#storetransferorder">StoreTransferOrder</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filters</td>
<td valign="top"><a href="#transferorderfilterinput">TransferOrderFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">offset</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.storetransferorderswrap">storeTransferOrdersWrap</strong></td>
<td valign="top"><a href="#storetransferorderwrap">StoreTransferOrderWrap</a>!</td>
<td>

調撥單查詢

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filters</td>
<td valign="top"><a href="#transferorderfilterinput">TransferOrderFilterInput</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">offset</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
</tbody>
</table>

## Mutation
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>

<tr>
<td colspan="2" valign="top"><strong id="mutation.operatestoretransferin">operateStoreTransferIn</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

調撥單撥入操作

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#operatestoretransferininput">OperateStoreTransferInInput</a>!</td>
<td></td>
</tr>

</tbody>
</table>

## Objects

### StoreTransferOrder

調撥單單頭

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.sns">SNs</strong></td>
<td valign="top">[<a href="#storetransferorderitemsn">StoreTransferOrderItemSN</a>!]</td>
<td>

調撥單序號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.confirmationcode">confirmationCode</strong></td>
<td valign="top"><a href="#enumconfirmationcode">EnumConfirmationCode</a>!</td>
<td>

確認狀態

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.inbounddate">inBoundDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

撥入日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.inboundstore">inBoundStore</strong></td>
<td valign="top"><a href="#store">Store</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.inboundstorecode">inBoundStoreCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

撥入門市

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.inboundusercode">inBoundUserCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

撥入人員

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.items">items</strong></td>
<td valign="top">[<a href="#storetransferorderitem">StoreTransferOrderItem</a>!]</td>
<td>

調撥單品項

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.legal">legal</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

通路

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.outbounddate">outBoundDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

撥出日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.outboundstore">outBoundStore</strong></td>
<td valign="top"><a href="#store">Store</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.outboundstorecode">outBoundStoreCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

撥出門市

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.outbounduser">outBoundUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.outboundusercode">outBoundUserCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

撥出人員

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.refpurchaseordercode">refPurchaseOrderCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

相關請購單號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.refreturnordercode">refReturnOrderCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

相關退貨單號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.relatedtransferordercode">relatedTransferOrderCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

對應調撥單號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.sourcegroupcode">sourceGroupCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

來源分類

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.sourceordercode">sourceOrderCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

單據來源單號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.storetransferorderpurchases">storeTransferOrderPurchases</strong></td>
<td valign="top">[<a href="#storetransferorderpurchase">StoreTransferOrderPurchase</a>!]</td>
<td>

調撥單操作後產生的請購單

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.storetransferorderreturns">storeTransferOrderReturns</strong></td>
<td valign="top">[<a href="#storetransferorderreturn">StoreTransferOrderReturn</a>!]</td>
<td>

調撥單操作後產生的退貨單

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.transferdate">transferDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

調撥日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.transferordercode">transferOrderCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

調撥單號

</td>
</tr>
</tbody>
</table>

### StoreTransferOrderItem

調撥單單身

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.sns">SNs</strong></td>
<td valign="top">[<a href="#storetransferorderitemsn">StoreTransferOrderItemSN</a>!]</td>
<td>

調撥單序號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.brokenquantity">brokenQuantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

損壞數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.lotno">lotNo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

撥入批號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.productname">productName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

品名

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.quantity">quantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

撥入數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.receivedquantity">receivedQuantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

實收數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.specification">specification</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

規格

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.status">status</strong></td>
<td valign="top"><a href="#enumstoretransferorderstatus">EnumStoreTransferOrderStatus</a></td>
<td>

異常

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.stockinquantity">stockInQuantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

入庫數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.transfermaterialcode">transferMaterialCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

調撥料號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.transferordercode">transferOrderCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

調撥單號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.transferorderitemseq">transferOrderItemSeq</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

調撥單項次

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitem.transferunit">transferUnit</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

調撥單位

</td>
</tr>
</tbody>
</table>

### StoreTransferOrderItemSN

調撥單品項序號清單

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitemsn.productname">productName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

品名

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitemsn.serialmaterialcode">serialMaterialCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

調撥料號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitemsn.serialquantity">serialQuantity</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

序號數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitemsn.sn">sn</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

序號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitemsn.sourceitemseq">sourceItemSeq</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

來源品項項次

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitemsn.specification">specification</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

規格

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitemsn.transferordercode">transferOrderCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

調撥單號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderitemsn.transferunit">transferUnit</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

調撥單位

</td>
</tr>
</tbody>
</table>

### StoreTransferOrderPurchase

調撥單關聯請購單

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.isshipmentrequired">isShipmentRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否需要出貨

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.lotno">lotNo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

訂單批號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.materialcode">materialCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

訂單料號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.photo">photo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

照片

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.photoname">photoName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

照片檔名

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.productname">productName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

品名

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.quantity">quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.remark">remark</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

備註

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.sn">sn</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

序號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.specification">specification</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

規格

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderpurchase.transferorderitemseq">transferOrderItemSeq</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

項次

</td>
</tr>
</tbody>
</table>

### StoreTransferOrderReturn

調撥單關聯退貨單

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.lotno">lotNo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

訂單批號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.materialcode">materialCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

訂單料號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.photo">photo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

照片

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.photoname">photoName</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

照片檔名

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.productname">productName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

品名

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.quantity">quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.reason">reason</strong></td>
<td valign="top"><a href="#enumstoretransferorderreturnreason">EnumStoreTransferOrderReturnReason</a></td>
<td>

退貨原因

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.remark">remark</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

備註

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.sn">sn</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

訂單序號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.specification">specification</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

規格

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderreturn.transferorderitemseq">transferOrderItemSeq</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

項次

</td>
</tr>
</tbody>
</table>

### StoreTransferOrderWrap

調撥單列表

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderwrap.count">count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorderwrap.storetransferorders">storeTransferOrders</strong></td>
<td valign="top">[<a href="#storetransferorder">StoreTransferOrder</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>


## Inputs

### OperateStoreTransferInInput

調撥單撥入操作參數

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferininput.items">items</strong></td>
<td valign="top">[<a href="#operatestoretransferinitem">OperateStoreTransferInItem</a>!]!</td>
<td>

確認品項清單

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferininput.purchases">purchases</strong></td>
<td valign="top">[<a href="#operatestoretransferinpurchase">OperateStoreTransferInPurchase</a>!]!</td>
<td>

請購清單

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferininput.transferordercode">transferOrderCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

調撥單號

</td>
</tr>
</tbody>
</table>

### OperateStoreTransferInItem

調撥單撥入操作品項清單

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.brokeninfo">brokenInfo</strong></td>
<td valign="top"><a href="#operatestoretransferiniteminfo">OperateStoreTransferInItemInfo</a></td>
<td>

損壞資訊

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.brokenquantity">brokenQuantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

項次損壞數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.brokentype">brokenType</strong></td>
<td valign="top"><a href="#enumoperatestoretransferinbrokentype">EnumOperateStoreTransferInBrokenType</a></td>
<td>

損壞商品處理方式

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.lotno">lotNo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

訂單批號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.materialcode">materialCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

訂單料號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.receiveinfo">receiveInfo</strong></td>
<td valign="top"><a href="#operatestoretransferiniteminfo">OperateStoreTransferInItemInfo</a></td>
<td>

實收資訊

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.receivedquantity">receivedQuantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

項次實收數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.snlist">snList</strong></td>
<td valign="top">[<a href="#operatestoretransferinsn">OperateStoreTransferInSn</a>!]</td>
<td>

序號清單

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.stockinquantity">stockInQuantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

項次入庫數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.transferorderitemseq">transferOrderItemSeq</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

項次

</td>
</tr>
</tbody>
</table>

### OperateStoreTransferInItemInfo

調撥單撥入操作品項資訊

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferiniteminfo.photo">photo</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td>

照片

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferiniteminfo.remark">remark</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

備註

</td>
</tr>
</tbody>
</table>

### OperateStoreTransferInPurchase

調撥單撥入操作請購清單

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinpurchase.info">info</strong></td>
<td valign="top"><a href="#operatestoretransferiniteminfo">OperateStoreTransferInItemInfo</a></td>
<td>

請購資訊

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinpurchase.isshipmentrequired">isShipmentRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否需要出貨

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinpurchase.lotno">lotNo</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

訂單批號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinpurchase.materialcode">materialCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

訂單料號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinpurchase.quantity">quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

請購數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinpurchase.sn">sn</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

序號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinpurchase.sourceitemseq">sourceItemSeq</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

請購項目來源調撥單項次

</td>
</tr>
</tbody>
</table>

### OperateStoreTransferInSn

調撥單撥入操作品項序號清單

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinsn.info">info</strong></td>
<td valign="top"><a href="#operatestoretransferiniteminfo">OperateStoreTransferInItemInfo</a></td>
<td>

退貨資訊

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinsn.isbroken">isBroken</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

是否損壞

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinsn.isreceived">isReceived</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否到貨

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinsn.sn">sn</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

序號

</td>
</tr>
</tbody>
</table>

### TransferOrderFilterInput

調撥單查詢條件

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.confirmationcode">confirmationCode</strong></td>
<td valign="top"><a href="#enumconfirmationcode">EnumConfirmationCode</a></td>
<td>

確認碼(狀態)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.createddate1">createdDate1</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

調撥日期開始

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.createddate2">createdDate2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

調撥日期結束

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.inboundstorecode">inBoundStoreCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

撥入門市

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.legal">legal</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

法人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.transferordercode">transferOrderCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

調撥單號

</td>
</tr>
</tbody>
</table>

## Enums

### EnumConfirmationCode

確認碼

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Cancel</strong></td>
<td>

作廢

</td>
</tr>
<tr>
<td valign="top"><strong>Confirm</strong></td>
<td>

確認

</td>
</tr>
<tr>
<td valign="top"><strong>Create</strong></td>
<td>

開立

</td>
</tr>
<tr>
<td valign="top"><strong>Inbound</strong></td>
<td>

撥入

</td>
</tr>
<tr>
<td valign="top"><strong>Outbound</strong></td>
<td>

撥出

</td>
</tr>
</tbody>
</table>

### EnumOperateStoreTransferInBrokenType

貨損處理方式

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>REORDER</strong></td>
<td>

補貨

</td>
</tr>
<tr>
<td valign="top"><strong>RETURN</strong></td>
<td>

退貨

</td>
</tr>
</tbody>
</table>


### EnumStoreTransferOrderReturnReason

調撥單退貨單品項退貨原因

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>BROKEN</strong></td>
<td>

損壞

</td>
</tr>
<tr>
<td valign="top"><strong>UNRECEIVED</strong></td>
<td>

缺少

</td>
</tr>
</tbody>
</table>

### EnumStoreTransferOrderStatus

調撥單品項狀態

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ABNORMAL</strong></td>
<td>

異常

</td>
</tr>
<tr>
<td valign="top"><strong>NORMAL</strong></td>
<td>

正常

</td>
</tr>
</tbody>
</table>
