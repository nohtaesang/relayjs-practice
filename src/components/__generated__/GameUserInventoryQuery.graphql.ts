/**
 * @generated SignedSource<<c9ead92156b0b6ada884ad04e1fd8db7>>
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
      } | null> | null;
    } | null;
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
        (v2/*: any*/)
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
    "cacheID": "4ce8115297d04c1364725fd667239f92",
    "id": null,
    "metadata": {},
    "name": "GameUserInventoryQuery",
    "operationKind": "query",
    "text": "query GameUserInventoryQuery(\n  $id: ID!\n) {\n  User(id: $id) {\n    inventory {\n      id\n      created_at\n      last_updated_at\n      items {\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d2b5e16e7ab9bd2674a35e60fbb13706";

export default node;
