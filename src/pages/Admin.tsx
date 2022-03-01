import { useState } from "react";
import { Pane, Tablist, Tab } from "evergreen-ui";
import { AdminCreateItemType } from "../components/AdminCreateItemType";
import { AdminCreateUser } from "../components/AdminCreateUser";

const TAB_OPTIONS = [
  { label: "Create User", value: "CREATE_USER" },
  { label: "Create Item", value: "CREATE_ITEM" },
];

export const Admin = () => {
  const [tabValue, setTabValue] = useState("CREATE_USER");

  return (
    <Pane
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      gap={16}
      padding={16}
    >
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
        <AdminPageContent tabValue={tabValue} />
      </Pane>
    </Pane>
  );
};

const AdminPageContent = ({ tabValue }: { tabValue: any }) => {
  switch (tabValue) {
    case "CREATE_USER":
      return <AdminCreateUser />;
    case "CREATE_ITEM":
      return <AdminCreateItemType />;
    default:
      return null;
  }
};
