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
