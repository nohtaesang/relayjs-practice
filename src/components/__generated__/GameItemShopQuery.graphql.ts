/**
 * @generated SignedSource<<ef0cde5135853f77e64ff39d6d48a86c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GameItemShopQuery$variables = {};
export type GameItemShopQueryVariables = GameItemShopQuery$variables;
export type GameItemShopQuery$data = {
  readonly ItemTypes: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly speed: number;
    readonly damage: number;
    readonly gold_per_second: number;
  }>;
};
export type GameItemShopQueryResponse = GameItemShopQuery$data;
export type GameItemShopQuery = {
  variables: GameItemShopQueryVariables;
  response: GameItemShopQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ItemType",
    "kind": "LinkedField",
    "name": "ItemTypes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "speed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "damage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gold_per_second",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GameItemShopQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GameItemShopQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bdfd7cf4c5868d953009d18ce2f2b30a",
    "id": null,
    "metadata": {},
    "name": "GameItemShopQuery",
    "operationKind": "query",
    "text": "query GameItemShopQuery {\n  ItemTypes {\n    id\n    name\n    speed\n    damage\n    gold_per_second\n  }\n}\n"
  }
};
})();

(node as any).hash = "9f5b64d4b81abc5901b440f61a638809";

export default node;
