/**
 * @generated SignedSource<<609ef7ef32be15e74139e4eab9e7fb40>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserInput = {
  id: string;
  item_on_slot?: number | null;
  gold?: number | null;
  created_at?: string | null;
  last_updated_at?: string | null;
  inventory?: string | null;
};
export type UpdateUserMutation$variables = {
  input: UpdateUserInput;
};
export type UpdateUserMutationVariables = UpdateUserMutation$variables;
export type UpdateUserMutation$data = {
  readonly updateUser: {
    readonly id: string;
    readonly gold: number;
  };
};
export type UpdateUserMutationResponse = UpdateUserMutation$data;
export type UpdateUserMutation = {
  variables: UpdateUserMutationVariables;
  response: UpdateUserMutation$data;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "updateUser",
    "plural": false,
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
        "name": "gold",
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
    "name": "UpdateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7b68dd444b198528ca1e92b007569e8e",
    "id": null,
    "metadata": {},
    "name": "UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserMutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(input: $input) {\n    id\n    gold\n  }\n}\n"
  }
};
})();

(node as any).hash = "d5e1fba6f7a2fa9b9c4bcd607ebef14f";

export default node;
