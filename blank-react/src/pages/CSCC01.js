import Box from "../components/Box";
import AnimatedPage from "./AnimatedPage";

function CSCC01() {
  const body =
    "Hi guys, it was really nice to meet you guys and I really appericiate you guys having me. If you have any questions, feel free to NOT ask me and ask Ilir XD since he can definitly help you out more. That being said if you have any questions about PEY and what I did, by all means, add me on linkedin and let me know. Good luck with the rest of the semester and hopefully I'll see you guys again :).(to the person who asked for the spongebob episode, I got you)";

  const buttons = [
    { label: "Week 4 Lecture Slides.", href: "/" },
    { label: "What is Pert Video.", href: "/" },
    { label: "Cohesion and Coupling.", href: "/" },
    {
      label: "The Spongebob Episode.",
      href: "https://www.youtube.com/watch?v=bSOOIr0uytM",
    },
  ];

  return (
    <AnimatedPage>
      <div className="cscc01Page">
        <Box
          hint="CSCC01."
          title="CSCC01 Week 04."
          body={body}
          buttons={buttons}
        />
      </div>
    </AnimatedPage>
  );
}

export default CSCC01;
