import type { AdminRenderUsersQuery as AdminRenderUsersQueryType } from "./__generated__/AdminRenderUsersQuery.graphql";
import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery, useQueryLoader } from "react-relay/hooks";
import { Suspense, useEffect } from "react";
import { Button, Pane, TextInput, toaster } from "evergreen-ui";

const UsersQuery = graphql`
  query AdminRenderUsersQuery {
    Users {
      id
    }
  }
`;

type AdminRenderUsersType = {
  isUserCreated: boolean;
};
export const AdminRenderUsers = ({ isUserCreated }: AdminRenderUsersType) => {
  const [queryReference, loadQuery] = useQueryLoader(UsersQuery);

  useEffect(() => {
    if (!isUserCreated) {
      return;
    }
    loadQuery({}, { fetchPolicy: "store-and-network" });
  }, [isUserCreated, loadQuery]);

  return (
    <Pane display="flex" flexDirection="column" gap="16px">
      <Button
        onClick={() => {
          loadQuery({}, { fetchPolicy: "store-and-network" });
        }}
      >
        load user list
      </Button>
      <Suspense fallback="user list loading...">
        {queryReference && <Users queryReference={queryReference} />}
      </Suspense>
    </Pane>
  );
};

const Users = ({ queryReference }: { queryReference: any }) => {
  const data = usePreloadedQuery<AdminRenderUsersQueryType>(
    UsersQuery,
    queryReference
  );

  return (
    <Pane
      display="flex"
      flexDirection="column"
      gap={8}
      elevation={2}
      padding={16}
    >
      {data.Users.map((user: any) => {
        const handleClickCopy = () => {
          var tempElem = document.createElement("textarea");
          tempElem.value = user.id;
          document.body.appendChild(tempElem);

          tempElem.select();
          document.execCommand("copy");
          document.body.removeChild(tempElem);
          toaster.success(`${user.id} copied`);
        };

        return (
          <Pane key={user.id} display="flex" alignItems="center" gap={8}>
            <TextInput defaultValue={user.id} disabled={true} />
            <Button onClick={handleClickCopy}>Copy</Button>
          </Pane>
        );
      })}
    </Pane>
  );
};
