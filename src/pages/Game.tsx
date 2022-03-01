import { Pane, Paragraph, Tab, Tablist } from "evergreen-ui";
import { Suspense, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GameUserInformation } from "../components/GameUserInformation";
import { GameUserInventory } from "../components/GameUserInventory";

const TAB_OPTIONS = [
  { label: "Inventory", value: "INVENTORY" },
  { label: "Shop", value: "SHOP" },
];

export const Game = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tabValue, setTabValue] = useState<any>("INVENTORY");

  if (!id) {
    navigate("./");
    return null;
  }

  return (
    <Pane
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      padding={16}
    >
      <Suspense fallback={<Paragraph>loading game page...</Paragraph>}>
        <GameUserInformation userId={id} />
        <Pane display="flex" flexDirection="column" padding={16} gap={16}>
          <Tablist>
            {TAB_OPTIONS.map(({ label, value }) => (
              <Tab
                key={value}
                aria-controls={`panel-${value}`}
                id={value}
                isSelected={tabValue === value}
                onSelect={() => setTabValue(value)}
              >
                {label}
              </Tab>
            ))}
          </Tablist>
          <Pane width={800}>
            <GamePageContent userId={id} tabValue={tabValue} />
          </Pane>
        </Pane>
      </Suspense>
    </Pane>
  );
};

type GamePageContentType = {
  userId: string;
  tabValue: any;
};
const GamePageContent = ({ userId, tabValue }: GamePageContentType) => {
  switch (tabValue) {
    case "INVENTORY":
    default:
      return <GameUserInventory userId={userId} />;
  }
};
