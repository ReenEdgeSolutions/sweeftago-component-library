export function a11yProps(index: number): { id: string; "aria-controls": string } {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
