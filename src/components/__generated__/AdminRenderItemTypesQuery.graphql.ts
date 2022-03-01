/**
 * @generated SignedSource<<4c49cd5352a179bb37a262b8bd33f9c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AdminRenderItemTypesQuery$variables = {};
export type AdminRenderItemTypesQueryVariables = AdminRenderItemTypesQuery$variables;
export type AdminRenderItemTypesQuery$data = {
  readonly ItemTypes: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly damage: number;
    readonly speed: number;
  }>;
};
export type AdminRenderItemTypesQueryResponse = AdminRenderItemTypesQuery$data;
export type AdminRenderItemTypesQuery = {
  variables: AdminRenderItemTypesQueryVariables;
  response: AdminRenderItemTypesQuery$data;
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
    "name": "AdminRenderItemTypesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AdminRenderItemTypesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6f3c289a8c3118fbc643e6dfc08be6e2",
    "id": null,
    "metadata": {},
    "name": "AdminRenderItemTypesQuery",
    "operationKind": "query",
    "text": "query AdminRenderItemTypesQuery {\n  ItemTypes {\n    id\n    name\n    damage\n    speed\n  }\n}\n"
  }
};
})();

(node as any).hash = "5ef2a69e62b0682ee74bba68de406f34";

export default node;
