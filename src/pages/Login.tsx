import { Heading, Pane } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import { LoginCheckUser } from "../components/LoginCheckUser";

export const Login = (props: any) => {
  return (
    <Pane
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      gap={16}
      padding={16}
    >
      <Heading>Login Page</Heading>
      <LoginCheckUser />
    </Pane>
  );
};
