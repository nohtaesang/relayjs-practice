/**
 * @generated SignedSource<<c557cec002dc57535861f63bcebda2e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AdminRenderUsersQuery$variables = {};
export type AdminRenderUsersQueryVariables = AdminRenderUsersQuery$variables;
export type AdminRenderUsersQuery$data = {
  readonly Users: ReadonlyArray<{
    readonly id: string;
  }>;
};
export type AdminRenderUsersQueryResponse = AdminRenderUsersQuery$data;
export type AdminRenderUsersQuery = {
  variables: AdminRenderUsersQueryVariables;
  response: AdminRenderUsersQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "Users",
    "plural": true,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AdminRenderUsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AdminRenderUsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8bbaeb74c6d0a03a4f6fdcf228690a93",
    "id": null,
    "metadata": {},
    "name": "AdminRenderUsersQuery",
    "operationKind": "query",
    "text": "query AdminRenderUsersQuery {\n  Users {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "41400ddd8b8599e93ec3cc5bbd605668";

export default node;
