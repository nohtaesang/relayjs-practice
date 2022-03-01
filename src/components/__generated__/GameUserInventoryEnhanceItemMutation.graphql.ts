/**
 * @generated SignedSource<<667bafbb802e9a9c0150b92ca7c2c1c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateEnhanceInput = {
  item: string;
};
export type GameUserInventoryEnhanceItemMutation$variables = {
  input: CreateEnhanceInput;
};
export type GameUserInventoryEnhanceItemMutationVariables = GameUserInventoryEnhanceItemMutation$variables;
export type GameUserInventoryEnhanceItemMutation$data = {
  readonly createEnhance: {
    readonly item: {
      readonly id: string;
    };
  };
};
export type GameUserInventoryEnhanceItemMutationResponse = GameUserInventoryEnhanceItemMutation$data;
export type GameUserInventoryEnhanceItemMutation = {
  variables: GameUserInventoryEnhanceItemMutationVariables;
  response: GameUserInventoryEnhanceItemMutation$data;
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
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Item",
  "kind": "LinkedField",
  "name": "item",
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
    "name": "GameUserInventoryEnhanceItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Enhance",
        "kind": "LinkedField",
        "name": "createEnhance",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "GameUserInventoryEnhanceItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Enhance",
        "kind": "LinkedField",
        "name": "createEnhance",
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
    "cacheID": "17b00cbc5a466c91d7e2530a4eeba1c9",
    "id": null,
    "metadata": {},
    "name": "GameUserInventoryEnhanceItemMutation",
    "operationKind": "mutation",
    "text": "mutation GameUserInventoryEnhanceItemMutation(\n  $input: CreateEnhanceInput!\n) {\n  createEnhance(input: $input) {\n    item {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4295fa60eb99777c155f00de91545daa";

export default node;
