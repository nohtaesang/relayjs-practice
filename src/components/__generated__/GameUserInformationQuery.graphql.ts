/**
 * @generated SignedSource<<103947730384f6f23a30166a26cc3844>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type GameUserInformationQuery$variables = {
  id: string;
};
export type GameUserInformationQueryVariables = GameUserInformationQuery$variables;
export type GameUserInformationQuery$data = {
  readonly User: {
    readonly id: string;
    readonly gold: number;
  } | null;
};
export type GameUserInformationQueryResponse = GameUserInformationQuery$data;
export type GameUserInformationQuery = {
  variables: GameUserInformationQueryVariables;
  response: GameUserInformationQuery$data;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "User",
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
    "name": "GameUserInformationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GameUserInformationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e6bdd239f1799571c5a514bcc9ef2e39",
    "id": null,
    "metadata": {},
    "name": "GameUserInformationQuery",
    "operationKind": "query",
    "text": "query GameUserInformationQuery(\n  $id: ID!\n) {\n  User(id: $id) {\n    id\n    gold\n  }\n}\n"
  }
};
})();

(node as any).hash = "317b2c51b0d8802121d883cab8013080";

export default node;
