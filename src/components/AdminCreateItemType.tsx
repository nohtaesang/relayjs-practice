import graphql from "babel-plugin-relay/macro";
import { useMutation } from "react-relay/hooks";
import { Button, TextInputField, Pane, toaster } from "evergreen-ui";
import { useForm } from "react-hook-form";
import { AdminRenderItemTypes } from "./AdminRenderItemTypes";

const userMutation = graphql`
  mutation AdminCreateItemTypeMutation($input: CreateItemTypeInput!) {
    createItemType(input: $input) {
      name
      damage
      speed
    }
  }
`;

type FormData = {
  name: string;
  damage: number;
  speed: number;
};

export const AdminCreateItemType = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [commit, isInFlight] = useMutation(userMutation);

  const handleClickCreateItemType = handleSubmit((data) => {
    const { name, damage, speed } = data;
    commit({
      variables: {
        input: {
          name,
          damage: Number(damage),
          speed: Number(speed),
          // gold_per_second: Number(gold_per_second),
        },
      },
      onCompleted: (data) => {
        toaster.success(`Item type created`);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  });

  return (
    <Pane display="flex" flexDirection="column" gap={16}>
      <Pane elevation={1} padding={16}>
        <form onSubmit={handleClickCreateItemType}>
          <TextInputField
            {...register("name")}
            type="text"
            label="name"
            placeholder="name"
            required
          />
          <TextInputField
            {...register("damage")}
            type="number"
            label="damage"
            placeholder="damage"
            required
          />
          <TextInputField
            {...register("speed")}
            type="number"
            label="speed"
            placeholder="speed"
            required
          />
          {/* <TextInputField
            {...register("gold_per_second")}
            type="number"
            label="gold_per_second"
            placeholder="gold_per_second"
            required
          /> */}
          <Button type="submit">Create item type</Button>
        </form>
      </Pane>
      <Pane elevation={1} padding={16}>
        <AdminRenderItemTypes isItemTypeCreated={!isInFlight} />
      </Pane>
    </Pane>
  );
};
