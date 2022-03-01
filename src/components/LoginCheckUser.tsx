import { LoginCheckUserQuery as LoginCheckUserQueryType } from "./__generated__/LoginCheckUserQuery.graphql";
import { ChangeEvent, Suspense, useEffect, useRef, useState } from "react";
import { Button, Paragraph, TextInput, Pane } from "evergreen-ui";
import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery, useQueryLoader } from "react-relay/hooks";
import { useNavigate } from "react-router-dom";
import { Fallback } from "./Fallback";
const LoginCheckUserQuery = graphql`
  query LoginCheckUserQuery($id: ID!) {
    User(id: $id) {
      id
    }
  }
`;

export const LoginCheckUser = (props: any) => {
  const [queryRef, loadQuery] = useQueryLoader(LoginCheckUserQuery);
  const inputRef = useRef("US01FWEF4B8GX99GGHWXM3VA1CZA");
  const [checkedId, setCheckedId] = useState("");

  return (
    <Pane width="100%" display="flex" alignItems="center" gap="8px">
      <TextInput
        required
        disabled={!!checkedId}
        defaultValue={inputRef.current || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          inputRef.current = e.target.value;
        }}
      />
      {!checkedId && (
        <Button
          onClick={() => {
            loadQuery({ id: inputRef.current });
          }}
        >
          Check id
        </Button>
      )}
      <Suspense fallback={<Fallback />}>
        {queryRef && (
          <CheckUserResult queryRef={queryRef} setCheckedId={setCheckedId} />
        )}
      </Suspense>
    </Pane>
  );
};

const CheckUserResult = ({
  queryRef,
  setCheckedId,
}: {
  queryRef: any;
  setCheckedId: (id: string) => void;
}) => {
  const navigate = useNavigate();
  const data = usePreloadedQuery<LoginCheckUserQueryType>(
    LoginCheckUserQuery,
    queryRef
  );

  useEffect(() => {
    if (data?.User?.id) {
      setCheckedId(data.User.id);
    } else {
      setCheckedId("");
    }
  }, [data?.User?.id, setCheckedId]);

  if (!data?.User?.id) {
    return <Paragraph>user does not exist</Paragraph>;
  }

  const handleClickGo = () => {
    if (data?.User?.id) {
      navigate(`/users/${data.User.id}`);
    }
  };

  return (
    <Button appearance="primary" onClick={handleClickGo}>
      Go!
    </Button>
  );
};
