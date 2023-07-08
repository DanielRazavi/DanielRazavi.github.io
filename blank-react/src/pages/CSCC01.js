import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import AnimatedPage from "./AnimatedPage";
import Video from "../components/Video";
import Slides from "../components/Slides";
import Documents from "../components/Documents";
import Overlay from "../components/Overlay";

function CSCC01() {
  const [showMedia, setShowMedia] = useState([false, false, false]);
  const handleButtonClick = (index) => {
    setShowMedia((prevShowMedia) => {
      const updatedShowMedia = [...prevShowMedia];
      updatedShowMedia[index] = !updatedShowMedia[index];
      return updatedShowMedia;
    });
  };

  const navigate = useNavigate();
  const comeBack = () => {
    navigate("/tutorials/cscc01");
  };

  const body =
    "Hi guys, it was really nice to meet you guys and I really appericiate you guys having me. If you have any questions, feel free to NOT ask me and ask Ilir XD since he can definitly help you out more. That being said if you have any questions about PEY and what I did, by all means, add me on linkedin and let me know. Good luck with the rest of the semester and hopefully I'll see you guys again :).(to the person who asked for the spongebob episode, I got you)";

  const buttons = [
    { label: "Week 4 Lecture Slides.", onClick: () => handleButtonClick(0) },
    { label: "What is Pert Video.", onClick: () => handleButtonClick(1) },
    { label: "Cohesion and Coupling.", onClick: () => handleButtonClick(2) },
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
        {showMedia[0] && (
          <Overlay
            component={
              <Slides
                title="Week 4 Lecture Slides."
                url="https://drive.google.com/file/d/1eaGZSoQ85IOUEY8eH5UImm6El30Cem6z/preview"
              />
            }
            onClose={() => handleButtonClick(0)}
          />
        )}
        {showMedia[1] && (
          <Overlay
            component={
              <Video
                title="What is Pert Video."
                url="https://www.youtube.com/embed/i160aaBX7mE"
              />
            }
            onClose={() => handleButtonClick(1)}
          />
        )}
        {showMedia[2] && (
          <Overlay
            component={
              <Documents
                title="Cohesion and Coupling."
                url="https://drive.google.com/file/d/1_wBkyqtYV1LPVeqpGQXad4a5ojSEcC64/preview"
              />
            }
            onClose={() => handleButtonClick(2)}
          />
        )}
      </div>
    </AnimatedPage>
  );
}

export default CSCC01;
