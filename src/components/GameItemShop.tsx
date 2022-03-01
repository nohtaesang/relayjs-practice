import type { GameItemShopQuery as GameItemShopQueryType } from "./__generated__/GameItemShopQuery.graphql";
import graphql from "babel-plugin-relay/macro";
import { useQueryLoader, usePreloadedQuery } from "react-relay/hooks";
import { Suspense, useEffect } from "react";
import { Heading, Pane, Paragraph } from "evergreen-ui";
import { Fallback } from "./Fallback";

const ItemShopQuery = graphql`
  query GameItemShopQuery {
    ItemTypes {
      id
      name
      speed
      damage
      gold_per_second
    }
  }
`;

export const GameItemShop = () => {
  const [queryReference, loadQuery] = useQueryLoader(ItemShopQuery);

  useEffect(() => {
    loadQuery({});
  }, []);

  return (
    <Pane>
      <Heading>Item List</Heading>
      <Suspense fallback={<Fallback />}>
        {queryReference && <GameItems queryReference={queryReference} />}
      </Suspense>
    </Pane>
  );
};

const GameItems = ({ queryReference }: { queryReference: any }) => {
  const data = usePreloadedQuery<GameItemShopQueryType>(
    ItemShopQuery,
    queryReference
  );

  return (
    <Pane>
      {data.ItemTypes.map((user: any) => (
        <Paragraph key={user.id}>id: {user.id}</Paragraph>
      ))}
    </Pane>
  );
};
