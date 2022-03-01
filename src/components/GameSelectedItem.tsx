import { Heading, Pane } from "evergreen-ui";

export const GameSelectedItem = ({ itemId }: { itemId?: string }) => {
  return (
    <Pane display="flex" flexDirection="column" gap="8px">
      <Heading>Selected Item</Heading>
    </Pane>
  );
};
