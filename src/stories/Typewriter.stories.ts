import type { Meta, StoryObj } from "@storybook/react";
import Typewriter from "./Typewriter";

const meta = {
  title: "Example/Typewriter",
  component: Typewriter,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "object" },
  },
  args: {
    text: [
      { label: "Welcome to the app" },
      { label: "This is where magic happens", color: "orange" },
      { label: "This is where typing stops", color: "pink", stop: true },
    ],
  },
} satisfies Meta<typeof Typewriter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Centered: Story = {
  args: {
    className: "text-center",
  },
};
