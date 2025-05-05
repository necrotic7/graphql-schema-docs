# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Area](#area)
    * [City](#city)
    * [Company](#company)
    * [Department](#department)
    * [District](#district)
    * [MaterialKeywordDetail](#materialkeyworddetail)
    * [MaterialKeywordWrap](#materialkeywordwrap)
    * [Role](#role)
    * [SleepTestGroup](#sleeptestgroup)
    * [Store](#store)
    * [StoreBusinessHour](#storebusinesshour)
    * [StoreInvoicePool](#storeinvoicepool)
    * [StoreTransferOrder](#storetransferorder)
    * [StoreTransferOrderItem](#storetransferorderitem)
    * [StoreTransferOrderItemSN](#storetransferorderitemsn)
    * [StoreTransferOrderPurchase](#storetransferorderpurchase)
    * [StoreTransferOrderReturn](#storetransferorderreturn)
    * [StoreTransferOrderWrap](#storetransferorderwrap)
    * [User](#user)
    * [UserRole](#userrole)
    * [Zone](#zone)
    * [Zone2](#zone2)
  * [Inputs](#inputs)
    * [OperateStoreTransferInInput](#operatestoretransferininput)
    * [OperateStoreTransferInItem](#operatestoretransferinitem)
    * [OperateStoreTransferInPurchase](#operatestoretransferinpurchase)
    * [OperateStoreTransferInSn](#operatestoretransferinsn)
    * [TransferOrderFilterInput](#transferorderfilterinput)
  * [Enums](#enums)
    * [EnumConfirmationCode](#enumconfirmationcode)
    * [EnumOperateStoreTransferInBrokenType](#enumoperatestoretransferinbrokentype)
    * [EnumStoreBusinessHourDayOfWeek](#enumstorebusinesshourdayofweek)
    * [EnumStoreTransferOrderReturnReason](#enumstoretransferorderreturnreason)
    * [EnumStoreTransferOrderStatus](#enumstoretransferorderstatus)
    * [EnumStoreType](#enumstoretype)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [DateTime](#datetime)
    * [Float](#float)
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
<td colspan="2" valign="top"><strong id="query.storematerialsbykeyword">storeMaterialsByKeyword</strong></td>
<td valign="top"><a href="#materialkeywordwrap">MaterialKeywordWrap</a>!</td>
<td>

門市產品關鍵字查詢

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">keyword</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

料號或品名關鍵字

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">offset</td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
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
<td colspan="2" valign="top"><strong id="mutation.cancelstoretransferout">cancelStoreTransferOut</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

調撥單銷退

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">createdUserCode</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">legal</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">relatedTransferOrderCode</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
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
<tr>
<td colspan="2" valign="top"><strong id="mutation.poststoretransferinconfirm">postStoreTransferInConfirm</strong> ⚠️</td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

調撥單撥入確認

<p>⚠️ <strong>DEPRECATED</strong></p>
<blockquote>

請使用新版調撥單撥入操作(operateStoreTransferIn)

</blockquote>
</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">createdUserCode</td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">storeCode</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">transferOrderCode</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### Area

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
<td colspan="2" valign="top"><strong id="area.cities">cities</strong></td>
<td valign="top">[<a href="#city">City</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="area.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="area.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="area.vieworder">viewOrder</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### City

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
<td colspan="2" valign="top"><strong id="city.area">area</strong></td>
<td valign="top"><a href="#area">Area</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="city.districts">districts</strong></td>
<td valign="top">[<a href="#district">District</a>]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="city.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="city.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="city.vieworder">viewOrder</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### Company

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
<td colspan="2" valign="top"><strong id="company.code">code</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="company.enabled">enabled</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="company.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="company.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="company.phone">phone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
</tbody>
</table>

### Department

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
<td colspan="2" valign="top"><strong id="department.code">code</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="department.company">company</strong></td>
<td valign="top"><a href="#company">Company</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="department.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="department.isactive">isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="department.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### District

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
<td colspan="2" valign="top"><strong id="district.city">city</strong></td>
<td valign="top"><a href="#city">City</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="district.code">code</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="district.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="district.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="district.vieworder">viewOrder</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### MaterialKeywordDetail

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
<td colspan="2" valign="top"><strong id="materialkeyworddetail.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

料號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="materialkeyworddetail.issnmanage">isSnManage</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否序號管理

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="materialkeyworddetail.name">name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

品名

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="materialkeyworddetail.specification">specification</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

規格

</td>
</tr>
</tbody>
</table>

### MaterialKeywordWrap

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
<td colspan="2" valign="top"><strong id="materialkeywordwrap.count">count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="materialkeywordwrap.materials">materials</strong></td>
<td valign="top">[<a href="#materialkeyworddetail">MaterialKeywordDetail</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### Role

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
<td colspan="2" valign="top"><strong id="role.allowallcnstores">allowAllCNStores</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.allowallclinicostores">allowAllClinicoStores</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.allowallhearingcenters">allowAllHearingCenters</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.allowallibelivestores">allowAllIbeliveStores</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.allowallskdstores">allowAllSkdStores</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.filterstores">filterStores</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.filtersubzones">filterSubZones</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.filterzones">filterZones</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="role.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SleepTestGroup

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
<td colspan="2" valign="top"><strong id="sleeptestgroup.createdat">createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sleeptestgroup.createduser">createdUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

建立人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sleeptestgroup.description">description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sleeptestgroup.groupname">groupName</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

群組名稱

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sleeptestgroup.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sleeptestgroup.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="sleeptestgroup.updateduser">updatedUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

最後修改人

</td>
</tr>
</tbody>
</table>

### Store

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
<td colspan="2" valign="top"><strong id="store.guinumber">GUINumber</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

統編

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.address">address</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.area">area</strong></td>
<td valign="top"><a href="#area">Area</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.city">city</strong></td>
<td valign="top"><a href="#city">City</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.closingdate">closingDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

閉幕日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.code">code</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.company">company</strong></td>
<td valign="top"><a href="#company">Company</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.createduser">createdUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

建立人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.dailylimitbookingline">dailyLimitBookingLine</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

每日預約人數限制 - line 預約

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.daysuntilbooking">daysUntilBooking</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

幾天後可預約

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.department">department</strong></td>
<td valign="top"><a href="#department">Department</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.district">district</strong></td>
<td valign="top"><a href="#district">District</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.email">email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.invoicepool">invoicePool</strong></td>
<td valign="top">[<a href="#storeinvoicepool">StoreInvoicePool</a>!]</td>
<td>

統一發票池

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.ipbxstoreid">ipbxStoreId</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

IPBX 門市 ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.ismaintenancecenter">isMaintenanceCenter</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.isposavailable">isPosAvailable</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否有POS

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.isshoppingcenter">isShoppingCenter</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否是購物中心

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.isshowinlinebooking">isShowInLineBooking</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否顯示在 line@ 預約

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.isshowinmorear">isShowInMorear</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否顯示在Morear 合作夥伴頁面

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.isshowinresmedbooking">isShowInResmedBooking</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否顯示在睡得美（ResMed）預約頁面

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.lat">lat</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

緯度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.lng">lng</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td>

經度

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.openingdate">openingDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

開幕日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.phone">phone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.picture">picture</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

圖片（連結）

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.sleeptechnologistuser">sleepTechnologistUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

睡眠技師

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.sleeptestgroup">sleepTestGroup</strong></td>
<td valign="top"><a href="#sleeptestgroup">SleepTestGroup</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.storebusinesshours">storeBusinessHours</strong></td>
<td valign="top">[<a href="#storebusinesshour">StoreBusinessHour</a>!]</td>
<td>

門市營業及午休時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.type">type</strong></td>
<td valign="top"><a href="#enumstoretype">EnumStoreType</a></td>
<td>

門市類型 預設為 null, 到府門市: HomeSvc

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.updateduser">updatedUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

最後修改人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.zone">zone</strong></td>
<td valign="top"><a href="#zone">Zone</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="store.zone2">zone2</strong></td>
<td valign="top"><a href="#zone2">Zone2</a></td>
<td></td>
</tr>
</tbody>
</table>

### StoreBusinessHour

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
<td colspan="2" valign="top"><strong id="storebusinesshour.closingtime">closingTime</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

店面關閉時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storebusinesshour.dayofweek">dayOfWeek</strong></td>
<td valign="top"><a href="#enumstorebusinesshourdayofweek">EnumStoreBusinessHourDayOfWeek</a>!</td>
<td>

星期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storebusinesshour.endbreaktime">endBreakTime</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

午休結束時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storebusinesshour.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storebusinesshour.openingtime">openingTime</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

店面開放時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storebusinesshour.startbreaktime">startBreakTime</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

午休開始時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storebusinesshour.store">store</strong></td>
<td valign="top"><a href="#store">Store</a></td>
<td></td>
</tr>
</tbody>
</table>

### StoreInvoicePool

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
<td colspan="2" valign="top"><strong id="storeinvoicepool.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storeinvoicepool.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

發票池名稱

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="storeinvoicepool.store">store</strong></td>
<td valign="top"><a href="#store">Store</a>!</td>
<td></td>
</tr>
</tbody>
</table>

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

### User

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
<td colspan="2" valign="top"><strong id="user.active">active</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.code">code</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.company">company</strong></td>
<td valign="top"><a href="#company">Company</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.deleted">deleted</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.department">department</strong></td>
<td valign="top"><a href="#department">Department</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.email">email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.isactive">isActive</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.isaudiologist">isAudiologist</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.ishearingaidengineer">isHearingAidEngineer</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.isoutsourcing">isOutsourcing</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.name">name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.store">store</strong></td>
<td valign="top"><a href="#store">Store</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="user.userroles">userRoles</strong></td>
<td valign="top">[<a href="#userrole">UserRole</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### UserRole

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
<td colspan="2" valign="top"><strong id="userrole.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="userrole.role">role</strong></td>
<td valign="top"><a href="#role">Role</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="userrole.user">user</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
</tbody>
</table>

### Zone

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
<td colspan="2" valign="top"><strong id="zone.company">company</strong></td>
<td valign="top"><a href="#company">Company</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="zone.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="zone.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="zone.stores">stores</strong></td>
<td valign="top">[<a href="#store">Store</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="zone.vieworder">viewOrder</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="zone.zone2s">zone2s</strong></td>
<td valign="top">[<a href="#zone2">Zone2</a>!]</td>
<td></td>
</tr>
</tbody>
</table>

### Zone2

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
<td colspan="2" valign="top"><strong id="zone2.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="zone2.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="zone2.stores">stores</strong></td>
<td valign="top">[<a href="#store">Store</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="zone2.vieworder">viewOrder</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="zone2.zone">zone</strong></td>
<td valign="top"><a href="#zone">Zone</a>!</td>
<td></td>
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

項次實收數量

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

### OperateStoreTransferInPurchase

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
<td colspan="2" valign="top"><strong id="operatestoretransferinpurchase.photo">photo</strong></td>
<td valign="top"><a href="#upload">Upload</a></td>
<td>

照片

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
<td colspan="2" valign="top"><strong id="operatestoretransferinpurchase.remark">remark</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

備註

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

### EnumStoreBusinessHourDayOfWeek

星期

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Friday</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Monday</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Saturday</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Sunday</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Thursday</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Tuesday</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Wednesday</strong></td>
<td></td>
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

### EnumStoreType

門市類型

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ClinicoSound</strong></td>
<td>

Clinico Sound

</td>
</tr>
<tr>
<td valign="top"><strong>HomeSvc</strong></td>
<td>

到府門市

</td>
</tr>
<tr>
<td valign="top"><strong>HomeSvcRS</strong></td>
<td>

到府門市(Resmed)

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### DateTime

The javascript `Date` as string. Type represents date and time as the ISO Date string.

### Float

The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

### Upload

The `Upload` scalar type represents a file upload.

