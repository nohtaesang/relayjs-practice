/**
 * @generated SignedSource<<b0848b0801b9b5fb53f7ad0dcb801760>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GameShopUserQuery$variables = {
  id: string;
};
export type GameShopUserQueryVariables = GameShopUserQuery$variables;
export type GameShopUserQuery$data = {
  readonly User: {
    readonly inventory: {
      readonly id: string;
    };
  } | null;
};
export type GameShopUserQueryResponse = GameShopUserQuery$data;
export type GameShopUserQuery = {
  variables: GameShopUserQueryVariables;
  response: GameShopUserQuery$data;
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
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Inventory",
  "kind": "LinkedField",
  "name": "inventory",
  "plural": false,
  "selections": [
    (v2/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GameShopUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "User",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GameShopUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "User",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5b965cef1e90977ade702535d89e335b",
    "id": null,
    "metadata": {},
    "name": "GameShopUserQuery",
    "operationKind": "query",
    "text": "query GameShopUserQuery(\n  $id: ID!\n) {\n  User(id: $id) {\n    inventory {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8cf109e8733e317383c6fb4c5f38923f";

export default node;
