import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay/hooks";

import { Button, TextInputField, Pane, toaster } from "evergreen-ui";

import { useForm } from "react-hook-form";
import { AdminRenderUsers } from "./AdminRenderUsers";

const userMutation = graphql`
  mutation AdminCreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      gold
    }
  }
`;

type FormData = {
  gold: number;
};

export const AdminCreateUser = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [commit, isInFlight] = useMutation(userMutation);

  const handleClickCreateUser = handleSubmit((data) => {
    const { gold } = data;
    commit({
      variables: { input: { gold: Number(gold) } },
      onCompleted: () => {
        toaster.success(`User created`);
      },
    });
  });

  return (
    <Pane display="flex" flexDirection="column" gap={16}>
      <Pane elevation={1} padding={16}>
        <form onSubmit={handleClickCreateUser}>
          <TextInputField
            {...register("gold")}
            type="number"
            label="gold"
            placeholder="gold"
            defaultValue={0}
            required
          />
          <Button type="submit">Create user</Button>
        </form>
      </Pane>
      <Pane elevation={1} padding={16}>
        <AdminRenderUsers isUserCreated={!isInFlight} />
      </Pane>
    </Pane>
  );
};
