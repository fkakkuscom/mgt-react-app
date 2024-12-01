import Paper from "../components/Paper";
import { Button } from "../stories/Button";

function Storybook() {
  return (
    <Paper>
      <h2 className="text-2xl font-bold mb-4">Storybook Components</h2>
      <div className="flex justify-start items-center flex-wrap gap-2 mb-4">
        <Button children="Primary" primary />
        <Button children="Primary" primary size="large" />
        <Button children="Primary" primary size="small" />
        <Button children="Disabled" primary disabled />
      </div>
      <div className="flex justify-start items-center flex-wrap gap-2 mb-4">
        <Button children="Secondary" />
        <Button children="Secondary" size="large" />
        <Button children="Secondary" size="small" />
        <Button children="Disabled" disabled />
      </div>
    </Paper>
  );
}

export default Storybook;
