/**
 * @generated SignedSource<<36d8f95af28e99df178ed1f2f19572b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type LoginCheckUserQuery$variables = {
  id: string;
};
export type LoginCheckUserQueryVariables = LoginCheckUserQuery$variables;
export type LoginCheckUserQuery$data = {
  readonly User: {
    readonly id: string;
  } | null;
};
export type LoginCheckUserQueryResponse = LoginCheckUserQuery$data;
export type LoginCheckUserQuery = {
  variables: LoginCheckUserQueryVariables;
  response: LoginCheckUserQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "User",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginCheckUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginCheckUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "40fa4fc41d345cbed90e1a77ee4add8b",
    "id": null,
    "metadata": {},
    "name": "LoginCheckUserQuery",
    "operationKind": "query",
    "text": "query LoginCheckUserQuery(\n  $id: ID!\n) {\n  User(id: $id) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0299495b82990e2c1c1797a3f17b021e";

export default node;
