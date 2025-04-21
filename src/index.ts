import 'reflect-metadata';
import { buildSchema } from "type-graphql";
import { TransferOrderResolver } from "./project/issue_117394-門市調撥逆流程/resolver";


(async() => {
  await buildSchema({
    resolvers: [TransferOrderResolver],
    emitSchemaFile: true,
  });
})().catch(err => {
  console.log(err);
}).finally(() => console.log('finish'));
