import type { GameShopItemTypesQuery as GameShopItemTypesQueryType } from "./__generated__/GameShopItemTypesQuery.graphql";
import type { GameShopUserQuery as GameShopUserQueryType } from "./__generated__/GameShopUserQuery.graphql";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery, useMutation } from "react-relay/hooks";
import { Pane, Paragraph, Button, toaster } from "evergreen-ui";

// Define a query
const itemTypesQuery = graphql`
  query GameShopItemTypesQuery {
    ItemTypes {
      id
      name
      damage
      speed
    }
  }
`;

const userQuery = graphql`
  query GameShopUserQuery($id: ID!) {
    User(id: $id) {
      inventory {
        id
      }
    }
  }
`;

const createItemMutation = graphql`
  mutation GameShopCreateItemMutation($input: CreateItemInput!) {
    createItem(input: $input) {
      inventory {
        id
      }
      itemtype {
        id
      }
    }
  }
`;

export const GameShop = ({ userId }: { userId: string }) => {
  const { ItemTypes } = useLazyLoadQuery<GameShopItemTypesQueryType>(
    itemTypesQuery,
    {}
  );
  const { User } = useLazyLoadQuery<GameShopUserQueryType>(userQuery, {
    id: userId,
  });
  const [commit, isInFlight] = useMutation(createItemMutation);

  if (!ItemTypes) {
    return <Pane>NPC have no items</Pane>;
  }

  const handleClickBuy = (item: any) => () => {
    if (!User?.inventory) {
      toaster.warning(`Inventory id does not exist!`);
      return;
    }

    commit({
      variables: {
        input: {
          inventory: User.inventory.id,
          itemtype: item.id,
        },
      },
      onCompleted: (data) => {
        toaster.success(`Item type created`);
      },
      onError: (error) => {},
    });
  };

  return (
    <Pane display="flex" flexDirection="row" gap={16} flexWrap="wrap">
      {ItemTypes.map((item) => (
        <Pane
          key={item.id}
          display="flex"
          flexDirection="column"
          width={150}
          gap={4}
        >
          <Paragraph>{`${item.name}`}</Paragraph>
          <Paragraph>{`damage: ${item.damage}`}</Paragraph>
          <Paragraph>{`speed: ${item.speed}`}</Paragraph>
          <Button onClick={handleClickBuy(item)}>Buy</Button>
        </Pane>
      ))}
    </Pane>
  );
};
