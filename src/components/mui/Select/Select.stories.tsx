import { Meta, Story } from "@storybook/react";
import Select from "./Select";
import MenuItem from "@mui/material/MenuItem";

export default {
  title: "Mui/Select",
  component: Select,
} as Meta;

const Template: Story = () => (
  <Select value="" onChange={() => {}}>
    <MenuItem value="">None</MenuItem>
    <MenuItem value="option1">Option 1</MenuItem>
    <MenuItem value="option2">Option 2</MenuItem>
    <MenuItem value="option3">Option 3</MenuItem>
  </Select>
);

export const Default = Template.bind({});
