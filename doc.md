# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [StoreTransferOrder](#storetransferorder)
  * [Inputs](#inputs)
    * [OperateStoreTransferInInput](#operatestoretransferininput)
    * [OperateStoreTransferInItem](#operatestoretransferinitem)
    * [OperateStoreTransferInReorder](#operatestoretransferinreorder)
    * [OperateStoreTransferInSn](#operatestoretransferinsn)
    * [TransferOrderFilterInput](#transferorderfilterinput)
  * [Enums](#enums)
    * [EnumConfirmationCode](#enumconfirmationcode)
    * [EnumOperateStoreTransferInBrokenType](#enumoperatestoretransferinbrokentype)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [DateTimeISO](#datetimeiso)
    * [ID](#id)
    * [Int](#int)
    * [String](#string)
    * [Upload](#upload)

</details>

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
<td colspan="2" valign="top"><strong id="query.storetransferorderswrap">storeTransferOrdersWrap</strong></td>
<td valign="top"><a href="#storetransferorder">StoreTransferOrder</a>!</td>
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
<td colspan="2" valign="top"><strong id="storetransferorder.confirmationcode">confirmationCode</strong></td>
<td valign="top"><a href="#enumconfirmationcode">EnumConfirmationCode</a>!</td>
<td>

確認狀態

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.inboundstorecode">inBoundStoreCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

撥入門市

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
<td valign="top"><a href="#datetimeiso">DateTimeISO</a></td>
<td>

撥出日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.outboundstorecode">outBoundStoreCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

撥出門市

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.outboundusercode">outBoundUserCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

撥出人員

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
<td colspan="2" valign="top"><strong id="storetransferorder.sourceordercode">sourceOrderCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

單據來源單號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storetransferorder.transferdate">transferDate</strong></td>
<td valign="top"><a href="#datetimeiso">DateTimeISO</a></td>
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

## Inputs

### OperateStoreTransferInInput

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
<td colspan="2" valign="top"><strong id="operatestoretransferininput.reorders">reorders</strong></td>
<td valign="top">[<a href="#operatestoretransferinreorder">OperateStoreTransferInReorder</a>!]</td>
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
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.brokenquantity">brokenQuantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

損壞數量

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
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.photo">photo</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td>

照片

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.receivedquantity">receivedQuantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

實收數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.remark">remark</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

備註

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
<td colspan="2" valign="top"><strong id="operatestoretransferinitem.transferorderitemseq">transferOrderItemSeq</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

項次

</td>
</tr>
</tbody>
</table>

### OperateStoreTransferInReorder

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
<td colspan="2" valign="top"><strong id="operatestoretransferinreorder.isshipmentrequired">isShipmentRequired</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否需要出貨

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinreorder.materialcode">materialCode</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

訂單料號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinreorder.photo">photo</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td>

照片

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinreorder.quantity">quantity</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

請購數量

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinreorder.remark">remark</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

備註，放入批/序號

</td>
</tr>
</tbody>
</table>

### OperateStoreTransferInSn

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
<td colspan="2" valign="top"><strong id="operatestoretransferinsn.isbroken">isBroken</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
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
<td colspan="2" valign="top"><strong id="operatestoretransferinsn.photo">photo</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td>

照片

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="operatestoretransferinsn.remark">remark</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

備註

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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.createddate1">createdDate1</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.createddate2">createdDate2</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.inboundstorecode">inBoundStoreCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.legal">legal</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="transferorderfilterinput.transferordercode">transferOrderCode</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
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

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### DateTimeISO

A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### Upload

