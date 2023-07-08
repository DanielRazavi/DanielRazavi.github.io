import Box from "../components/Box";
import AnimatedPage from "./AnimatedPage";

function TutorialPage() {
  const body = [
    "You've made it here! First Question though, where do you know me from? :)",
  ];

  const buttons = [
    { label: "CSC236.", href: "/", type: "Link" },
    { label: "CSCC01.", href: "/tutorials/cscc01", type: "Link" },
    { label: "CSC384.", href: "/tutorials/csc384", type: "Link" },
  ];

  return (
    <AnimatedPage>
      <div className="homePage">
        <Box
          hint="Tutorials."
          title="You're One of My Students? Welcome!"
          body={body}
          buttons={buttons}
        />
      </div>
    </AnimatedPage>
  );
}

export default TutorialPage;
