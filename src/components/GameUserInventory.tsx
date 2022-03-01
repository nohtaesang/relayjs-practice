import type { GameUserInventoryQuery as GameUserInventoryQueryType } from "./__generated__/GameUserInventoryQuery.graphql";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Pane, Heading } from "evergreen-ui";

// Define a query
const UserInventoryQuery = graphql`
  query GameUserInventoryQuery($id: ID!) {
    User(id: $id) {
      inventory {
        id
        created_at
        last_updated_at

        items {
          id
        }
      }
    }
  }
`;

export const GameUserInventory = ({ userId }: { userId: string }) => {
  const { User } = useLazyLoadQuery<GameUserInventoryQueryType>(
    UserInventoryQuery,
    {
      id: userId,
    }
  );

  if (!User?.inventory?.items) {
    return null;
  }

  if (User.inventory.items.length === 0) {
    return <Pane>you have no items</Pane>;
  }
  return (
    <Pane display="flex" flexDirection="column" gap={16}>
      <Heading>Inventory</Heading>
    </Pane>
  );
};
