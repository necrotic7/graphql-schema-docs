# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Mutation](#mutation)
  * [Objects](#objects)
    * [Area](#area)
    * [Campaign](#campaign)
    * [CampaignMutationResponse](#campaignmutationresponse)
    * [CampaignPotentialTargetFieldRelations](#campaignpotentialtargetfieldrelations)
    * [CampaignSource](#campaignsource)
    * [CampaignWrap](#campaignwrap)
    * [City](#city)
    * [Company](#company)
    * [Department](#department)
    * [District](#district)
    * [PotentialCustomer](#potentialcustomer)
    * [PotentialTargetFields](#potentialtargetfields)
    * [PotentialTargetFieldsWrap](#potentialtargetfieldswrap)
    * [QuestionnaireMetaLeadAd](#questionnairemetaleadad)
    * [QuestionnaireSurveycake](#questionnairesurveycake)
    * [Role](#role)
    * [SleepTestGroup](#sleeptestgroup)
    * [Store](#store)
    * [StoreBusinessHour](#storebusinesshour)
    * [StoreInvoicePool](#storeinvoicepool)
    * [User](#user)
    * [UserRole](#userrole)
    * [Zone](#zone)
    * [Zone2](#zone2)
  * [Inputs](#inputs)
    * [CampaignFilterInput](#campaignfilterinput)
    * [CreateCampaignFormFieldInput](#createcampaignformfieldinput)
    * [CreateCampaignInput](#createcampaigninput)
    * [CreateQuestionnaireMetaInput](#createquestionnairemetainput)
    * [CreateQuestionnaireSurveycakeInput](#createquestionnairesurveycakeinput)
    * [SearchPotentialTargetFieldsInput](#searchpotentialtargetfieldsinput)
    * [UpdateCampaignInput](#updatecampaigninput)
  * [Enums](#enums)
    * [EnumCampaignSourceCode](#enumcampaignsourcecode)
    * [EnumCampaignStatus](#enumcampaignstatus)
    * [EnumMemberGender](#enummembergender)
    * [EnumStoreBusinessHourDayOfWeek](#enumstorebusinesshourdayofweek)
    * [EnumStoreType](#enumstoretype)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [DateTime](#datetime)
    * [Float](#float)
    * [ID](#id)
    * [Int](#int)
    * [String](#string)
  * [Unions](#unions)
    * [CampaignQuestionnaire](#campaignquestionnaire)

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
<td colspan="2" valign="top"><strong id="query.campaigns">campaigns</strong></td>
<td valign="top">[<a href="#campaign">Campaign</a>!]!</td>
<td>

活動查詢

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filters</td>
<td valign="top"><a href="#campaignfilterinput">CampaignFilterInput</a></td>
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
<td colspan="2" valign="top"><strong id="query.campaignswrap">campaignsWrap</strong></td>
<td valign="top"><a href="#campaignwrap">CampaignWrap</a>!</td>
<td>

活動列表查詢

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filters</td>
<td valign="top"><a href="#campaignfilterinput">CampaignFilterInput</a></td>
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
<td colspan="2" valign="top"><strong id="query.potentialtargetfields">potentialTargetFields</strong></td>
<td valign="top">[<a href="#potentialtargetfields">PotentialTargetFields</a>!]</td>
<td>

潛客資料欄位

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filters</td>
<td valign="top"><a href="#searchpotentialtargetfieldsinput">SearchPotentialTargetFieldsInput</a></td>
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
<td colspan="2" valign="top"><strong id="query.potentialtargetfieldswrap">potentialTargetFieldsWrap</strong></td>
<td valign="top"><a href="#potentialtargetfieldswrap">PotentialTargetFieldsWrap</a></td>
<td>

潛客資料欄位列表

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">filters</td>
<td valign="top"><a href="#searchpotentialtargetfieldsinput">SearchPotentialTargetFieldsInput</a></td>
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
<td colspan="2" valign="top"><strong id="mutation.createcampaign">createCampaign</strong></td>
<td valign="top"><a href="#campaignmutationresponse">CampaignMutationResponse</a>!</td>
<td>

創建活動

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#createcampaigninput">CreateCampaignInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.deletecampaign">deleteCampaign</strong></td>
<td valign="top"><a href="#campaignmutationresponse">CampaignMutationResponse</a>!</td>
<td>

刪除活動

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">campaignId</td>
<td valign="top"><a href="#float">Float</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="mutation.updatecampaign">updateCampaign</strong></td>
<td valign="top"><a href="#campaignmutationresponse">CampaignMutationResponse</a>!</td>
<td>

更新活動

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">input</td>
<td valign="top"><a href="#updatecampaigninput">UpdateCampaignInput</a>!</td>
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

### Campaign

行銷活動

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
<td colspan="2" valign="top"><strong id="campaign.campaignpotentialtargetfield">campaignPotentialTargetField</strong></td>
<td valign="top">[<a href="#campaignpotentialtargetfieldrelations">CampaignPotentialTargetFieldRelations</a>!]</td>
<td>

活動表單潛客資料欄位

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.company">company</strong></td>
<td valign="top"><a href="#company">Company</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.createdat">createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

建立日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.enddate">endDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

活動結束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.link">link</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

活動連結

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

活動名稱

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.potentialcustomer">potentialCustomer</strong></td>
<td valign="top">[<a href="#potentialcustomer">PotentialCustomer</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.questionnaires">questionnaires</strong></td>
<td valign="top"><a href="#campaignquestionnaire">CampaignQuestionnaire</a></td>
<td>

活動表單配置

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.source">source</strong></td>
<td valign="top"><a href="#campaignsource">CampaignSource</a></td>
<td>

活動來源

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.startdate">startDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

活動開始日

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.status">status</strong></td>
<td valign="top"><a href="#enumcampaignstatus">EnumCampaignStatus</a></td>
<td>

活動狀態

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

更新日期

</td>
</tr>
</tbody>
</table>

### CampaignMutationResponse

操作活動結果

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
<td colspan="2" valign="top"><strong id="campaignmutationresponse.campaignid">campaignId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

活動id

</td>
</tr>
</tbody>
</table>

### CampaignPotentialTargetFieldRelations

活動表單對應潛客欄位關聯表

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
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.campaign">campaign</strong></td>
<td valign="top"><a href="#campaign">Campaign</a>!</td>
<td>

關聯活動

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.createdat">createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

建立時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.createduser">createdUser</strong></td>
<td valign="top"><a href="#user">User</a>!</td>
<td>

建立人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.formtag">formTag</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

各表單的欄位自定義標籤

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.potentialtargetfield">potentialTargetField</strong></td>
<td valign="top"><a href="#potentialtargetfields">PotentialTargetFields</a>!</td>
<td>

關聯潛客資料欄位

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

更新時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.updateduser">updatedUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

更新人

</td>
</tr>
</tbody>
</table>

### CampaignSource

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
<td colspan="2" valign="top"><strong id="campaignsource.campaign">campaign</strong></td>
<td valign="top">[<a href="#campaign">Campaign</a>!]</td>
<td>

關聯活動

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignsource.code">code</strong></td>
<td valign="top"><a href="#enumcampaignsourcecode">EnumCampaignSourceCode</a>!</td>
<td>

活動來源代號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignsource.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignsource.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

來源名稱

</td>
</tr>
</tbody>
</table>

### CampaignWrap

活動列表

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
<td colspan="2" valign="top"><strong id="campaignwrap.campaigns">campaigns</strong></td>
<td valign="top">[<a href="#campaign">Campaign</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignwrap.count">count</strong></td>
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

### PotentialCustomer

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
<td colspan="2" valign="top"><strong id="potentialcustomer.address">address</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.age">age</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.campaign">campaign</strong></td>
<td valign="top"><a href="#campaign">Campaign</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.createdat">createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.email">email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.gender">gender</strong></td>
<td valign="top"><a href="#enummembergender">EnumMemberGender</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.leftearhearingdb">leftEarHearingDB</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.line">line</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.mobile">mobile</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.rightearhearingdb">rightEarHearingDB</strong></td>
<td valign="top"><a href="#float">Float</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.telephone">telephone</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialcustomer.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
</tbody>
</table>

### PotentialTargetFields

潛客資料欄位

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
<td colspan="2" valign="top"><strong id="potentialtargetfields.createdat">createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

建立時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialtargetfields.description">description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

欄位描述

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialtargetfields.field">field</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

欄位代號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialtargetfields.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialtargetfields.required">required</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

是否必填

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialtargetfields.type">type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

欄位類型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialtargetfields.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td>

更新時間

</td>
</tr>
</tbody>
</table>

### PotentialTargetFieldsWrap

潛客資料欄位列表

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
<td colspan="2" valign="top"><strong id="potentialtargetfieldswrap.count">count</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialtargetfieldswrap.potentialtargetfields">potentialTargetFields</strong></td>
<td valign="top">[<a href="#potentialtargetfields">PotentialTargetFields</a>!]!</td>
<td></td>
</tr>
</tbody>
</table>

### QuestionnaireMetaLeadAd

問卷 meta lead ad

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
<td colspan="2" valign="top"><strong id="questionnairemetaleadad.campaign">campaign</strong></td>
<td valign="top"><a href="#campaign">Campaign</a></td>
<td>

活動

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairemetaleadad.campaignid">campaignId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairemetaleadad.createdat">createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairemetaleadad.createduser">createdUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

建立人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairemetaleadad.deleted">deleted</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairemetaleadad.formid">formId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairemetaleadad.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairemetaleadad.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairemetaleadad.updateduser">updatedUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

最後修改人

</td>
</tr>
</tbody>
</table>

### QuestionnaireSurveycake

問卷 surveycakes

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
<td colspan="2" valign="top"><strong id="questionnairesurveycake.campaign">campaign</strong></td>
<td valign="top"><a href="#campaign">Campaign</a></td>
<td>

活動

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.campaignid">campaignId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

關聯活動id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.company">company</strong></td>
<td valign="top"><a href="#company">Company</a></td>
<td>

通路

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.companyid">companyId</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td>

公司id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.createdat">createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

建立時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.createduser">createdUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

建立人

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.decodehashkey">decodeHashKey</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.decodeivkey">decodeIvKey</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.svid">svid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.type">type</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

更新時間

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="questionnairesurveycake.updateduser">updatedUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

最後修改人

</td>
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

### CampaignFilterInput

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
<td colspan="2" valign="top"><strong id="campaignfilterinput.companyid">companyId</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

公司id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignfilterinput.enddate">endDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

活動日期(迄)結束

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignfilterinput.id">id</strong></td>
<td valign="top"><a href="#id">ID</a></td>
<td>

活動編號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignfilterinput.name">name</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

活動名稱

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignfilterinput.sourcecode">sourceCode</strong></td>
<td valign="top"><a href="#enumcampaignsourcecode">EnumCampaignSourceCode</a></td>
<td>

活動來源代號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignfilterinput.startdate">startDate</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td>

活動日期(起)起始

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignfilterinput.status">status</strong></td>
<td valign="top"><a href="#enumcampaignstatus">EnumCampaignStatus</a></td>
<td>

活動狀態

</td>
</tr>
</tbody>
</table>

### CreateCampaignFormFieldInput

創建活動-潛客資料欄位參數

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
<td colspan="2" valign="top"><strong id="createcampaignformfieldinput.field">field</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

潛客資料欄位代號

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createcampaignformfieldinput.tag">tag</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

表單自定義欄位標籤(欄位key值)

</td>
</tr>
</tbody>
</table>

### CreateCampaignInput

創建活動參數

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
<td colspan="2" valign="top"><strong id="createcampaigninput.campaignsourcecode">campaignSourceCode</strong></td>
<td valign="top"><a href="#enumcampaignsourcecode">EnumCampaignSourceCode</a>!</td>
<td>

活動來源

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createcampaigninput.companyid">companyId</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

公司id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createcampaigninput.enddate">endDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

結束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createcampaigninput.formfields">formFields</strong></td>
<td valign="top">[<a href="#createcampaignformfieldinput">CreateCampaignFormFieldInput</a>!]</td>
<td>

表單欄位

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createcampaigninput.link">link</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

活動連結

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createcampaigninput.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

活動名稱

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createcampaigninput.questionnairemeta">questionnaireMeta</strong></td>
<td valign="top"><a href="#createquestionnairemetainput">CreateQuestionnaireMetaInput</a></td>
<td>

Meta表單設定

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createcampaigninput.questionnairesurveycake">questionnaireSurveyCake</strong></td>
<td valign="top"><a href="#createquestionnairesurveycakeinput">CreateQuestionnaireSurveycakeInput</a></td>
<td>

SurveyCake表單設定

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createcampaigninput.startdate">startDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

開始日期

</td>
</tr>
</tbody>
</table>

### CreateQuestionnaireMetaInput

創建活動-Meta表單設置參數

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
<td colspan="2" valign="top"><strong id="createquestionnairemetainput.formid">formId</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

表單id

</td>
</tr>
</tbody>
</table>

### CreateQuestionnaireSurveycakeInput

創建活動-SurveyCake表單設置參數

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
<td colspan="2" valign="top"><strong id="createquestionnairesurveycakeinput.decodehashkey">decodeHashKey</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createquestionnairesurveycakeinput.decodeivkey">decodeIvKey</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createquestionnairesurveycakeinput.svid">svid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### SearchPotentialTargetFieldsInput

查詢潛客資料欄位條件

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
<td colspan="2" valign="top"><strong id="searchpotentialtargetfieldsinput.field">field</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

欄位代號

</td>
</tr>
</tbody>
</table>

### UpdateCampaignInput

更新表單參數

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
<td colspan="2" valign="top"><strong id="updatecampaigninput.enddate">endDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

結束日期

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="updatecampaigninput.formfields">formFields</strong></td>
<td valign="top">[<a href="#createcampaignformfieldinput">CreateCampaignFormFieldInput</a>!]</td>
<td>

表單欄位

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="updatecampaigninput.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

表單id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="updatecampaigninput.link">link</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

活動連結

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="updatecampaigninput.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

活動名稱

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="updatecampaigninput.questionnairemeta">questionnaireMeta</strong></td>
<td valign="top"><a href="#createquestionnairemetainput">CreateQuestionnaireMetaInput</a></td>
<td>

Meta表單設定

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="updatecampaigninput.questionnairesurveycake">questionnaireSurveyCake</strong></td>
<td valign="top"><a href="#createquestionnairesurveycakeinput">CreateQuestionnaireSurveycakeInput</a></td>
<td>

SurveyCake表單設定

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="updatecampaigninput.startdate">startDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

開始日期

</td>
</tr>
</tbody>
</table>

## Enums

### EnumCampaignSourceCode

行銷活動來源代號

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>APP</strong></td>
<td>

App

</td>
</tr>
<tr>
<td valign="top"><strong>FB</strong></td>
<td>

Facebook

</td>
</tr>
<tr>
<td valign="top"><strong>GoogleForm</strong></td>
<td>

Google 表單

</td>
</tr>
<tr>
<td valign="top"><strong>Official</strong></td>
<td>

官網

</td>
</tr>
<tr>
<td valign="top"><strong>Resmed</strong></td>
<td>

Resmed租借

</td>
</tr>
<tr>
<td valign="top"><strong>SurveyCake</strong></td>
<td></td>
</tr>
</tbody>
</table>

### EnumCampaignStatus

活動狀態

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>ENDED</strong></td>
<td>

已結束

</td>
</tr>
<tr>
<td valign="top"><strong>ONGOING</strong></td>
<td>

進行中

</td>
</tr>
<tr>
<td valign="top"><strong>PREPARING</strong></td>
<td>

準備中

</td>
</tr>
</tbody>
</table>

### EnumMemberGender

性別

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>Female</strong></td>
<td></td>
</tr>
<tr>
<td valign="top"><strong>Man</strong></td>
<td></td>
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


## Unions

### CampaignQuestionnaire

<table>
<thead>
<tr>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong><a href="#questionnairemetaleadad">QuestionnaireMetaLeadAd</a></strong></td>
<td valign="top">

問卷 meta lead ad

</td>
</tr>
<tr>
<td valign="top"><strong><a href="#questionnairesurveycake">QuestionnaireSurveycake</a></strong></td>
<td valign="top">

問卷 surveycakes

</td>
</tr>
</tbody>
</table>
