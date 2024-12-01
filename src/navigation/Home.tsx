import Paper from "../components/Paper";
import Typewriter from "../components/Typewriter";

function Home() {
  return (
    <Paper>
      <h2>Home Page</h2>
      <Typewriter
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
