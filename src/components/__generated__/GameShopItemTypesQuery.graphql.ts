/**
 * @generated SignedSource<<20214ef9a2d979ee114e3abdb4db84e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GameShopItemTypesQuery$variables = {};
export type GameShopItemTypesQueryVariables = GameShopItemTypesQuery$variables;
export type GameShopItemTypesQuery$data = {
  readonly ItemTypes: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly damage: number;
    readonly speed: number;
  }>;
};
export type GameShopItemTypesQueryResponse = GameShopItemTypesQuery$data;
export type GameShopItemTypesQuery = {
  variables: GameShopItemTypesQueryVariables;
  response: GameShopItemTypesQuery$data;
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
        "name": "damage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "speed",
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
    "name": "GameShopItemTypesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GameShopItemTypesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b7213f5e21c35c191e676c9ab14358a7",
    "id": null,
    "metadata": {},
    "name": "GameShopItemTypesQuery",
    "operationKind": "query",
    "text": "query GameShopItemTypesQuery {\n  ItemTypes {\n    id\n    name\n    damage\n    speed\n  }\n}\n"
  }
};
})();

(node as any).hash = "344796c06e5faedba35f26bf5b57c300";

export default node;
