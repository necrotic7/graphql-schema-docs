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
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
<td valign="top"><a href="#int">Int</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="query.campaignswrap">campaignsWrap</strong></td>
<td valign="top"><a href="#campaignwrap">CampaignWrap</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">limit</td>
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
<td colspan="2" valign="top"><strong id="mutation.create">create</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
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
<td colspan="2" valign="top"><strong id="mutation.delete">delete</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
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
<td colspan="2" valign="top"><strong id="mutation.update">update</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
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
<td valign="top">[<a href="#campaignpotentialtargetfieldrelations">CampaignPotentialTargetFieldRelations</a>!]!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.company">company</strong></td>
<td valign="top"><a href="#company">Company</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.createdat">createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.enddate">endDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.link">link</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.potentialcustomer">potentialCustomer</strong></td>
<td valign="top">[<a href="#potentialcustomer">PotentialCustomer</a>!]</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.questionnaires">questionnaires</strong></td>
<td valign="top"><a href="#campaignquestionnaire">CampaignQuestionnaire</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.source">source</strong></td>
<td valign="top"><a href="#campaignsource">CampaignSource</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.startdate">startDate</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaign.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a></td>
<td></td>
</tr>
</tbody>
</table>

### CampaignPotentialTargetFieldRelations

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
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.createuser">createUser</strong></td>
<td valign="top"><a href="#user">User</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.createdat">createdAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
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
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.updateuser">updateUser</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignpotentialtargetfieldrelations.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
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
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignsource.code">code</strong></td>
<td valign="top"><a href="#enumcampaignsourcecode">EnumCampaignSourceCode</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignsource.id">id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="campaignsource.name">name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### CampaignWrap

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
<td></td>
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
<td colspan="2" valign="top"><strong id="potentialtargetfields.type">type</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

欄位類型

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="potentialtargetfields.updatedat">updatedAt</strong></td>
<td valign="top"><a href="#datetime">DateTime</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Inputs

### CreateCampaignInput

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
<td></td>
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
<td valign="top"><a href="#json">JSON</a></td>
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
<td colspan="2" valign="top"><strong id="createquestionnairemetainput.campaignsource">campaignSource</strong></td>
<td valign="top"><a href="#enumcampaignsourcecode">EnumCampaignSourceCode</a>!</td>
<td>

活動來源

</td>
</tr>
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
<td colspan="2" valign="top"><strong id="createquestionnairesurveycakeinput.campaignsource">campaignSource</strong></td>
<td valign="top"><a href="#enumcampaignsourcecode">EnumCampaignSourceCode</a>!</td>
<td>

活動來源

</td>
</tr>
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
<td colspan="2" valign="top"><strong id="createquestionnairesurveycakeinput.idalias">idAlias</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createquestionnairesurveycakeinput.idsn">idSn</strong></td>
<td valign="top"><a href="#int">Int</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createquestionnairesurveycakeinput.svid">svid</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong id="createquestionnairesurveycakeinput.type">type</strong></td>
<td valign="top"><a href="#enumquestionnairesurveycaketype">EnumQuestionnaireSurveycakeType</a>!</td>
<td></td>
</tr>
</tbody>
</table>

### UpdateCampaignInput

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
<td valign="top"><a href="#json">JSON</a></td>
<td>

表單欄位

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


### EnumQuestionnaireSurveycakeType

問卷類型

<table>
<thead>
<tr>
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top"><strong>visitTracking</strong></td>
<td>

客戶來店追蹤

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
<td>Meta表單配置</td>
</tr>
<tr>
<td valign="top"><strong><a href="#questionnairesurveycake">QuestionnaireSurveycake</a></strong></td>
<td>SurveyCake表單配置</td>
</tr>
</tbody>
</table>
