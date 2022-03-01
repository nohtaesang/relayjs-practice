/**
 * @generated SignedSource<<ec9beea3da087d08b618a43f835eb82b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateItemInput = {
  inventory: string;
  itemtype: string;
};
export type GameShopCreateItemMutation$variables = {
  input: CreateItemInput;
};
export type GameShopCreateItemMutationVariables = GameShopCreateItemMutation$variables;
export type GameShopCreateItemMutation$data = {
  readonly createItem: {
    readonly inventory: {
      readonly id: string;
    };
    readonly itemtype: {
      readonly id: string;
    };
  };
};
export type GameShopCreateItemMutationResponse = GameShopCreateItemMutation$data;
export type GameShopCreateItemMutation = {
  variables: GameShopCreateItemMutationVariables;
  response: GameShopCreateItemMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Inventory",
  "kind": "LinkedField",
  "name": "inventory",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "ItemType",
  "kind": "LinkedField",
  "name": "itemtype",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GameShopCreateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "createItem",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GameShopCreateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "createItem",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2e29e29f73cf713b388c8e53c95b5875",
    "id": null,
    "metadata": {},
    "name": "GameShopCreateItemMutation",
    "operationKind": "mutation",
    "text": "mutation GameShopCreateItemMutation(\n  $input: CreateItemInput!\n) {\n  createItem(input: $input) {\n    inventory {\n      id\n    }\n    itemtype {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "891a8e7a95874a5071517d397dc77aae";

export default node;
