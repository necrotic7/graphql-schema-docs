### Source
[graphql-markdown](https://github.com/exogen/graphql-markdown)
[graphql-voyager](https://github.com/graphql-kit/graphql-voyager)

### Install
```
$ npm i
```

### Usage
1. 在 src/project 底下創建一個資料夾
2. 將 gql 或 graphql 檔案放在該資料夾內，可以參考src/project/example
3. 啟動程式
```
$ npm run start
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