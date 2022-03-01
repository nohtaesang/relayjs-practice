import type { GameUserInventoryQuery as GameUserInventoryQueryType } from "./__generated__/GameUserInventoryQuery.graphql";
import type { GameUserInventoryEnhanceItemMutation as GameUserInventoryEnhanceItemMutationType } from "./__generated__/GameUserInventoryEnhanceItemMutation.graphql";

import graphql from "babel-plugin-relay/macro";
import {
  useLazyLoadQuery,
  useMutation,
  useQueryLoader,
  usePreloadedQuery,
} from "react-relay/hooks";
import { Pane, Paragraph, Button, toaster } from "evergreen-ui";
import { useEffect } from "react";

const UserInventoryQuery = graphql`
  query GameUserInventoryQuery($id: ID!) {
    User(id: $id) {
      inventory {
        id
        created_at
        last_updated_at

        items {
          id
          damage
          speed
          current_enhance
          price
        }
      }
    }
  }
`;

const EnhanceItemMutation = graphql`
  mutation GameUserInventoryEnhanceItemMutation($input: CreateEnhanceInput!) {
    createEnhance(input: $input) {
      item {
        id
      }
    }
  }
`;

export const GameUserInventory = ({ userId }: { userId: string }) => {
  const [queryReference, loadQuery] = useQueryLoader(UserInventoryQuery);

  const [commit, isInFlight] =
    useMutation<GameUserInventoryEnhanceItemMutationType>(EnhanceItemMutation);

  useEffect(() => {
    if (isInFlight) {
      return;
    }
    loadQuery({ id: userId }, { fetchPolicy: "store-and-network" });
  }, [isInFlight]);

  return (
    <Pane display="flex" gap={16} flexWrap="wrap">
      {queryReference && (
        <UserItems queryReference={queryReference} commit={commit} />
      )}
    </Pane>
  );
};

const UserItems = ({ queryReference, commit }: any) => {
  const { User } = usePreloadedQuery<GameUserInventoryQueryType>(
    UserInventoryQuery,
    queryReference
  );

  const handleClickEnhance = (item: any) => () => {
    commit({
      variables: {
        input: {
          item: item.id,
        },
      },
      onCompleted: (data: any) => {
        toaster.success(`Item type created`);
      },
      onError: (error: any) => {},
    });
  };

  if (!User?.inventory?.items) {
    return null;
  }

  if (User.inventory.items.length === 0) {
    return <Pane>you have no items</Pane>;
  }

  return (
    <>
      {User.inventory.items.map((item: any) => (
        <Pane
          key={item.id}
          display="flex"
          flexDirection="column"
          width={150}
          gap={4}
        >
          <Paragraph>{`damage: ${item.damage}`}</Paragraph>
          <Paragraph>{`speed: ${item.speed}`}</Paragraph>
          <Paragraph>{`price: ${item.price}`}</Paragraph>
          <Paragraph>{`current enhance: ${item.current_enhance}`}</Paragraph>
          <Button onClick={handleClickEnhance(item)}>Enhance</Button>
        </Pane>
      ))}
    </>
  );
};
