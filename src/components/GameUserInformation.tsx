import type { GameUserInformationQuery as GameUserInformationQueryType } from "./__generated__/GameUserInformationQuery.graphql";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Pane, Avatar, Paragraph } from "evergreen-ui";

// Define a query
const UsersQuery = graphql`
  query GameUserInformationQuery($id: ID!) {
    User(id: $id) {
      id
      gold
    }
  }
`;

export const GameUserInformation = ({ userId }: { userId: string }) => {
  const { User } = useLazyLoadQuery<GameUserInformationQueryType>(UsersQuery, {
    id: userId,
  });

  if (!User) {
    return null;
  }

  return (
    <Pane width="100%" display="flex" alignItems="center" gap="16px">
      <Avatar name={User.id} />
      <Paragraph>{User.id}</Paragraph>
      <Paragraph>{User.gold} Gold</Paragraph>
    </Pane>
  );
};
