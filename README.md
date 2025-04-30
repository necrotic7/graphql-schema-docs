### Source
[graphql-markdown](https://github.com/exogen/graphql-markdown)
[graphql-voyager](https://github.com/graphql-kit/graphql-voyager)

### Install
```bash
$ npm i
```

### Usage
1. 在 src/project 底下創建一個資料夾
2. 將 gql 或 graphql 檔案放在該資料夾內，可以參考 src/project/example
3. 啟動程式
```bash
$ npm run start
```
4. src/project 底下含有 gql schema 的資料夾會自動產生 markdown 文檔
5. log 會印出每個 schema 的 voyager 的路徑，可以前往該 api 路徑查看 voyager
```bash
# log 範例

# 代表 markdown 文件建立完成
$ [2025/04/30 17:34:11][info] [GqlmdExecRender] file(/home/necrotic7/graphql-schema-docs/src/project/example/example.gql) render exec finish
# voyager 的 url 路徑為 /example/voyager
$ [2025/04/30 17:34:11][info] [VoyagerBuilder] API (/example/voyager) built.
# 如果在 local 跑就到 http://localhost:4000/example/voyager 看結果，在 sandbox 執行的話要到 sandbox 的 host 看結果
$ [2025/04/30 17:34:11][info] [VoyagerStart] Voyager is running at http://localhost:4000
```
### Notice
gql檔裡，以下內容必填，否則無法產生文檔
```graphql
schema {
    query: Query
}

type Query {
    """ 無任何Query時需新增，防噴錯 """
    dummy: String
}
```