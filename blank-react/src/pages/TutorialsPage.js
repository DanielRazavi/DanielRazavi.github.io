import Box from "../components/Box";
import AnimatedPage from "./AnimatedPage";

function TutorialsPage() {
  return (
    <AnimatedPage>
      <Box hint="Tutorials.">
        <h1>You're One of My Students? Welcome!</h1>
        <p>
          You've made it here! First Question though, where do you know me from?
          :)
        </p>
        <button type="iLink" url="/tutorials/csc236">
          CSC236.
        </button>
        <button type="iLink" url="/tutorials/cscc01">
          CSCC01.
        </button>
        <button type="iLink" url="/tutorials/csc384">
          CSC384.
        </button>
      </Box>
    </AnimatedPage>
  );
}

export default TutorialsPage;
