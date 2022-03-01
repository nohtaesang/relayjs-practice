/**
 * @generated SignedSource<<299dd6e6ecd18ba90ac51b87a97663cb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateItemTypeInput = {
  name: string;
  damage?: number | null;
  speed?: number | null;
  gold_per_second?: number | null;
  created_at?: string | null;
  last_updated_at?: string | null;
};
export type AdminCreateItemTypeMutation$variables = {
  input: CreateItemTypeInput;
};
export type AdminCreateItemTypeMutationVariables = AdminCreateItemTypeMutation$variables;
export type AdminCreateItemTypeMutation$data = {
  readonly createItemType: {
    readonly name: string;
    readonly damage: number;
    readonly speed: number;
  };
};
export type AdminCreateItemTypeMutationResponse = AdminCreateItemTypeMutation$data;
export type AdminCreateItemTypeMutation = {
  variables: AdminCreateItemTypeMutationVariables;
  response: AdminCreateItemTypeMutation$data;
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "damage",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "speed",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AdminCreateItemTypeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemType",
        "kind": "LinkedField",
        "name": "createItemType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
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
    "name": "AdminCreateItemTypeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemType",
        "kind": "LinkedField",
        "name": "createItemType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "82c39ac19dda508c82558cb85e9ad4e5",
    "id": null,
    "metadata": {},
    "name": "AdminCreateItemTypeMutation",
    "operationKind": "mutation",
    "text": "mutation AdminCreateItemTypeMutation(\n  $input: CreateItemTypeInput!\n) {\n  createItemType(input: $input) {\n    name\n    damage\n    speed\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "ef250637aa5da218e5642acf5542b1df";

export default node;
