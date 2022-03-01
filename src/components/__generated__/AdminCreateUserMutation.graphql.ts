/**
 * @generated SignedSource<<42f2be88424ce63ab74f19110ee19d6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserInput = {
  gold: number;
};
export type AdminCreateUserMutation$variables = {
  input: CreateUserInput;
};
export type AdminCreateUserMutationVariables = AdminCreateUserMutation$variables;
export type AdminCreateUserMutation$data = {
  readonly createUser: {
    readonly gold: number;
  };
};
export type AdminCreateUserMutationResponse = AdminCreateUserMutation$data;
export type AdminCreateUserMutation = {
  variables: AdminCreateUserMutationVariables;
  response: AdminCreateUserMutation$data;
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
  "name": "gold",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AdminCreateUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "createUser",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "AdminCreateUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "createUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "cacheID": "4bd63dda97bfee5e4f7d2c05c04c6a94",
    "id": null,
    "metadata": {},
    "name": "AdminCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation AdminCreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    gold\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "7a236c6bce40fd55e9346fd04706cffb";

export default node;
