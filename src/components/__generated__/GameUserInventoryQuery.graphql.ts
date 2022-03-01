/**
 * @generated SignedSource<<c8a2ef0f468578a7df7cefc9de7e436e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GameUserInventoryQuery$variables = {
  id: string;
};
export type GameUserInventoryQueryVariables = GameUserInventoryQuery$variables;
export type GameUserInventoryQuery$data = {
  readonly User: {
    readonly inventory: {
      readonly id: string;
      readonly created_at: string;
      readonly last_updated_at: string;
      readonly items: ReadonlyArray<{
        readonly id: string;
        readonly damage: number;
        readonly speed: number;
        readonly current_enhance: number;
        readonly price: number;
      } | null>;
    };
  } | null;
};
export type GameUserInventoryQueryResponse = GameUserInventoryQuery$data;
export type GameUserInventoryQuery = {
  variables: GameUserInventoryQueryVariables;
  response: GameUserInventoryQuery$data;
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
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created_at",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "last_updated_at",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "items",
      "plural": true,
      "selections": [
        (v2/*: any*/),
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "current_enhance",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "price",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GameUserInventoryQuery",
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
    "name": "GameUserInventoryQuery",
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
    "cacheID": "f573b94aff2bb8b9a23680b24bf27f97",
    "id": null,
    "metadata": {},
    "name": "GameUserInventoryQuery",
    "operationKind": "query",
    "text": "query GameUserInventoryQuery(\n  $id: ID!\n) {\n  User(id: $id) {\n    inventory {\n      id\n      created_at\n      last_updated_at\n      items {\n        id\n        damage\n        speed\n        current_enhance\n        price\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "afa23162fdf5ec3c616df2aa6a4b5e48";

export default node;
