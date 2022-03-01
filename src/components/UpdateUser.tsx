import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay/hooks";
import { useState } from "react";

const userMutation = graphql`
  mutation UpdateUserMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      gold
    }
  }
`;

export const UpdateUser = ({ userId }: { userId: string }) => {
  const [gold, setGold] = useState(500);
  const [commit, isInFlight] = useMutation(userMutation);

  return (
    <div>
      <h1>Update User</h1>
      <input
        value={gold}
        onChange={(e) => setGold(Number(e.target.value))}
        type="number"
      />
      <button
        onClick={() => {
          commit({
            variables: { input: { id: userId, gold } },
            onCompleted: (data) => {
              console.log(data);
            },
            onError: (error) => {
              console.log(error);
            },
          });
        }}
      >
        update
      </button>
    </div>
  );
};
