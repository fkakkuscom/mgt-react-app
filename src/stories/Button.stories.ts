import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {},
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    primary: true,
    disabled: true,
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};
