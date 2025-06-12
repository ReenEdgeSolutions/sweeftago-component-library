import { styled, Tab, Tabs } from "@mui/material";
import { a11yProps } from "./common/helpers";
import { LabelComponent, LabelComponentProps } from "./ui/component";

type AppVerticalTabProps = {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  tabData: LabelComponentProps[];
  active?: boolean;
}

const AppTabs = styled(Tabs)((() => ({
  borderRadius: '10px',
  overflow: "hidden",
  border: `1px solid #D6D4D1`,
})))

const AppTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "active",
})<{
  active: boolean;
}>(({ active }) => ({
  padding: '14.5px 16px',
  alignItems: "start",
  "&:not(:last-of-type)": {
    marginBottom: '24px', 
  },
  ...(active && {
    background: "#FDE4CE",
  }),
  ...(!active && {
    "&:hover": {
      background: "#FDE4CE",
    }
  }),
}));

export function AppVerticalTab({
  value,
  handleChange,
  tabData
}: AppVerticalTabProps) {
  return (
    <AppTabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      aria-label="Vertical Tabs"
      slotProps={{
        indicator: {
          style: {
            display: 'none'
          }
        }
      }}
    >
      {tabData.map((item, index) => (
        <AppTab
          key={index}
          label={<LabelComponent tabTitle={item.tabTitle} icon={item.icon} />}
          {...a11yProps(index)}
          active={value === index ? true : false }
        />
      ))}
    </AppTabs>
  )
}
