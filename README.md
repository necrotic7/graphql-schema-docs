### Source
[graphql-markdown](https://github.com/exogen/graphql-markdown)

### Install
```
$ npm i graphql-markdown
```

### Usage
```
$ graphql-markdown ./path/to/schema.graphql > schema.md
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