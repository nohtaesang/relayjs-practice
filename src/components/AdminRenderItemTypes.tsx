import type { AdminRenderItemTypesQuery as AdminRenderItemTypesQueryType } from "./__generated__/AdminRenderItemTypesQuery.graphql";
import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery, useQueryLoader } from "react-relay/hooks";
import { Suspense, useEffect } from "react";
import { Button, Pane, Table, toaster } from "evergreen-ui";

const ItemTypesQuery = graphql`
  query AdminRenderItemTypesQuery {
    ItemTypes {
      id
      name
      damage
      speed
    }
  }
`;

type AdminRenderItemTypesType = {
  isItemTypeCreated: boolean;
};

export const AdminRenderItemTypes = ({
  isItemTypeCreated,
}: AdminRenderItemTypesType) => {
  const [queryReference, loadQuery] = useQueryLoader(ItemTypesQuery);

  useEffect(() => {
    if (!isItemTypeCreated) {
      return;
    }
    loadQuery({}, { fetchPolicy: "store-and-network" });
  }, [isItemTypeCreated, loadQuery]);

  return (
    <Pane display="flex" flexDirection="column" gap="16px">
      <Button
        onClick={() => {
          loadQuery({}, { fetchPolicy: "store-and-network" });
        }}
      >
        load item types
      </Button>
      <Suspense fallback="user list loading...">
        {queryReference && <UserList queryReference={queryReference} />}
      </Suspense>
    </Pane>
  );
};

const UserList = ({ queryReference }: { queryReference: any }) => {
  const data = usePreloadedQuery<AdminRenderItemTypesQueryType>(
    ItemTypesQuery,
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
      <Table.Body>
        <Table.Head>
          <Table.TextCell flexBasis={350} flexShrink={0} flexGrow={0}>
            ID
          </Table.TextCell>
          <Table.TextCell>Name</Table.TextCell>
          <Table.TextCell>Damage</Table.TextCell>
          <Table.TextCell>Speed</Table.TextCell>
        </Table.Head>
      </Table.Body>
      {data.ItemTypes.map((itemType: any) => {
        const handleClickCopy = () => {
          var tempElem = document.createElement("textarea");
          tempElem.value = itemType.id;
          document.body.appendChild(tempElem);

          tempElem.select();
          document.execCommand("copy");
          document.body.removeChild(tempElem);
          toaster.success(`${itemType.id} copied`);
        };

        return (
          <Table.Row
            key={itemType.id}
            display="flex"
            alignItems="center"
            gap={8}
          >
            <Table.TextCell flexBasis={350} flexShrink={0} flexGrow={0}>
              {itemType.id}
              <Button onClick={handleClickCopy} marginLeft={8}>
                Copy
              </Button>
            </Table.TextCell>
            <Table.TextCell>{itemType.name}</Table.TextCell>
            <Table.TextCell>{itemType.damage}</Table.TextCell>
            <Table.TextCell>{itemType.speed}</Table.TextCell>
          </Table.Row>
        );
      })}
    </Pane>
  );
};
