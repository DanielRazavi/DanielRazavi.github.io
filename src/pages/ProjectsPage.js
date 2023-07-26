import Box from "../components/Box";
import AnimatedPage from "./AnimatedPage";

function ProjectsPage() {
  return (
    <AnimatedPage>
      <Box hint="Projects.">
        <h1>Welcome.</h1>
        <p>
          Welcome to my programming portfolio. obviously not all my projects are
          here but the projects here are the ones that I am really proud of.
          Some are still under construction so please be wary of that if you
          download. My resume is also on this page, incase if you were
          wondering.
        </p>
        <p>
          This page is constantly getting updated and redesigned for a better
          flow with the UI of the site. You can check out some of my other
          projects at Github itself.
        </p>
        <button type="eLink" url="https://github.com/DanielRazavi">
          My Github Profile.
        </button>
      </Box>

      <Box hint="Contacts.">
        <h1> Methods of Contact.</h1>
        <p>
          Feel free to checkout my Linkedin profile and/or email me with your
          questions.
        </p>
        <button type="eLink" url="mailto:danraz1376@gmail.com">
          My Personal Email.
        </button>
        <button type="eLink" url="https://www.linkedin.com/in/danielrazavi">
          Linkedin Profile.
        </button>
      </Box>

      <Box hint="Calculator.">
        <h1> Apple Calculator on Android.</h1>
        <p>
          This android app is a clone of the calculator app on iOS. I have used
          the Shunting-Yard algorithm to get the information from the user and I
          have used Postfix algorithm to grab that information and calculate
          it's the output. I have also designed the calculator in a modular
          fashion where adding new operations to the calculator can be done
          easily. Similar to the iOS calculator app, more operations are
          preseneted once application is set in landscape.
        </p>
        <div className="imageContainer">
          {/* <img
            className="image"
            src="/assets/Projects/Apple Calculator Github Dark Mode.png"
          /> */}
          {/* <img className="image" src="/assets/Projects/test.jpg" /> */}
        </div>

        <button
          type="eLink"
          url="https://github.com/DanielRazavi/Apple-Calculator">
          Apple Calculator Repo.
        </button>
      </Box>

      <Box hint="Blank.">
        <h1> "Blank." The Website.</h1>
        <p>
          This is my personal website and where you are currently reading this
          from! It is a place that I have created to showcase some of my
          projects in a more pleasent way, to show off my photos, maybe post
          some music and to (sometimes) provide resources for some of my
          students. Its my place on the web. Using pure HTML and CSS at first
          but as time went on, I moved on to jQuery, only to find out that no
          after all the learning and debugging, no one like jQuery anymore, so I
          moved on to react and here we are.
        </p>
        <div className="imageContainer">
          {/* <img
            className="image"
            src="/assets/Projects/Blank Github Dark Mode.png"
          /> */}
        </div>

        <button
          type="eLink"
          url="https://github.com/DanielRazavi/DanielRazavi.github.io">
          Blank. Repo.
        </button>
      </Box>

      <Box hint="Pixel Royale">
        <h1> "Pixel Royale" The Game.</h1>
        <p>
          A 2D game heavily inspired by Fortnite, with a paintjob of the retro
          80s! A little game created with Javascript, Node.JS, and rest API. You
          can play against AI agents that similar to you, can pick up weapons
          and can try to kill you. With a randomly generated map everytime you
          play the game. This Collaboration with Alex Luu, took us nearly a week
          to reach the minimum gaming experience and was less about formatting
          and more about learning since it is the first attempt at the said
          technology.
        </p>
        <div className="imageContainer">
          {/* <img
            className="image"
            src="/assets/Projects/PixelRoyale Github Dark Mode.png"
          /> */}
        </div>

        <button type="eLink" url="https://github.com/DanielRazavi/Pixel-Royale">
          Pixel-Royale Repo.
        </button>
      </Box>
    </AnimatedPage>
  );
}

export default ProjectsPage;
