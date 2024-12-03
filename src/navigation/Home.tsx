import Paper from "../stories/Paper";
import Typewriter from "../stories/Typewriter";

function Home() {
  return (
    <Paper>
      <Typewriter
        className="text-center"
        text={[
          { label: "Welcome to the app" },
          { label: "This is where magic happens", color: "orange" },
          { label: "This is where typing stops", color: "pink", stop: true },
        ]}
      />
    </Paper>
  );
}

export default Home;
