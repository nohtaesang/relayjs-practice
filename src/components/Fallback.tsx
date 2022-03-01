import { Overlay, Pane, Spinner } from "evergreen-ui";

export const Fallback = ({ isShown = true }: { isShown?: boolean }) => {
  return (
    <Overlay isShown={isShown}>
      <Pane
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Pane>
    </Overlay>
  );
};
