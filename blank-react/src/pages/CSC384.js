import Box from "../components/Box";
import AnimatedPage from "./AnimatedPage";

function CSC384() {
  const bodyTitle = [
    "Hi guys! Welcome to Introduction to Artifical Inteligence. My name is Daniel Razavi and I'm going to be a TA for this class. I'm not gonna use this page much but only for giving out some stuff and I say 'stuff' since I still don't know what but as time goes on throughout the semester, we'll see. I'm eager to talk to you guys and get to know you more throughout the semester, don't be shy to hit me up, looking forward to it! :)",
  ];

  const bodyA1 = [
    "Hi guys, so a lot of people had questions regarding the marking that we did for A1. As you know, in the first 4 questions we asked the students to implement DFS, BFS, UCS and A*(with a constant heuristic) and we asked for each of those algorithms to return the actions necessary to get from point A to point B. The auto-grader that was given to you, checked your solution against what the solution should be and gave a mark based on that.",
    "The auto-grader that we used did that AND MORE. Let there exist a test/map has only one solution, regardless of what algorithm you use, the output will always be the same, a student could put for example DFS in place of BFS and get that mark. So it was our task to create a marking system that will mark solutions based on more then just the list of actions. That's when it was decided to also check what states your agent has visited and seen (seen = states that have been a pushed to your stack/queue/priority-queue at one time or another) to see if it is correctly traversing the states to find its solutions.",
    "The specific states that you have visited/seen and their specific orders are unique to the algorithm you have used, DFS, BFS, UCS and A* all have their own signature visited and seen state lists, so if your algorithms were defined and created correctly, they should also share the same exact visited and seen. That's what we checked for when marking: the actual solution of the test, a list of visited states for the test, and a list of seen states for the test. Each solution needs to satisfy those conditions in order to get the 1 mark for said test. And to give more chances to your code, we also gave the implementation more tests to perform in, as it was expected.",
    "In order to achieve such information collection of your code, changing your code would have been wrong of us to do, so we changed the functionality of the autograder.py, grade_helpers.py and game_state_handler.py so that whenever you call any function in said files, we also get a copy of what you accessed.",
    "Regarding questions 5 and 6, in order to mark those questions, there was no easy and pragmatic way to classify what a good/bad heuristic is so we decided to create a benchmark of what the minimum performance we expect is (number of actions taken and the number of states visiting) and if the student's performance is better or equal, then they are awarded the mark, and if not, they are not. We also made sure that your heuristics are marked based on a correct search_algorithm.py, so even if your A* is incorrect, your heuristics marks are not affected (hence why the autograder in the marking environment is split in half).",
    "The marking environment is given to you and you can try it out yourself, to see your mark (since we are not providing you with the correct search_algorithm.py code, the autograder might give you marks that are not accurate). Feel free to share any feedback you have so that if there is a concern with the marking, our team can take the necessary steps to fix or explain the situation.",
    "-Sincerely, CSC384-2021 Team :)",
  ];

  const buttonsA1 = [
    {
      label: "Download: A1-Marking-Environment.zip.",
      href: "/assets/csc384environments/A1-Marking-Environment.zip",
      type: "Download",
    },
  ];

  const bodyA2 = [
    "Hi Again! Lets get down to it (hopefully in less writing then for A1 haha). When it came to marking A2 we did the same thing as Assignment 1 where we added tracking functions in other classes and also added new tests.",
    "Similar to Assignment 1, we made sure that no one was penalized for the same thing twice, so the files were all marked with the counterfiles being perfect (you can see this in the provided code). Similar to Assignment 1, we will not be providing the perfect solutions, so the autograders will not be giving the same mark as your final mark. Feel free to share any feedback you have so that if there is a concern with the marking, our team can take the necessary steps to fix or explain the situation.",
    "-Sincerely, CSC384-2021 Team :)",
  ];

  const buttonsA2 = [
    {
      label: "Download: A2-Marking-Environment.zip.",
      href: "/assets/csc384environments/A2-Marking-Environment.zip",
      type: "Download",
    },
  ];

  const bodyA3 = [
    "Hey there! When it came to marking A3, we were very straight forward with the marking and we did not implement any new tactics in the other files for marking. We added the necessary new tests and ran your codes. Looking at the given code you will see IN_DEPTH_MARKING that is set to False which is the remains of a marking system that we decided against using.",
    "Some of you may have noticed that the mark you have received is higher than the assignment total mark. This is due to the fact that we've given students the ability to receive bonus marks on their mark. The assignment is worth 9% of the final mark, but the students have the oppertunity to recieve up to 11%.",
    "For example, if a student recieves the mark 30/28, that means in the assignment they have recieved a mark of 107%. As far their final mark is concerned, they have recieved 9.6% towards their final mark, rather than the 9% that the assignment is worth, so 0.6% bonus.",
    "Similar to Assignment 1 and 2, we made sure that no one was penalized for the same thing twice, so the files were all marked with the counterfiles being perfect (you can see this in the provided code). Similar to Assignment 1 and 2, we will not be providing the perfect solutions, so the autograders might not be giving the same mark as your final mark. Feel free to share any feedback you have so that if there is a concern with the marking, our team can take the necessary steps to fix or explain the situation.",
    "-Sincerely, CSC384-2021 Team :)",
  ];

  const buttonsA3 = [
    {
      label: "A3-Marking-Environment.zip",
      href: "/assets/csc384environments/A3-Marking-Environment.zip",
      type: "Download",
    },
  ];

  const bodyA4 = [
    "Hey there! When it came to marking A4, we did absolutely nothing for our marking!! Let me clarify, we didn't add any new tests and did not add any trackers in any other files. We believe that all the necessary tests were given to the students and the tests should be enough to check the authenticity of the students' code. Similar to all other assignments, we made sure that no one was penalized for the same thing twice, so the files were all marked with the counterfiles being perfect (you can see this in the provided code). We will not be providing the perfect solutions, so the autograders might not be giving the same mark as your final mark. Feel free to share any feedback you have so that if there is a concern with the marking, our team can take the necessary steps to fix or explain the situation.",
    "-Sincerely, CSC384-2020 Team :)",
  ];

  const buttonsA4 = [
    {
      label: "A4-Marking-Environment.zip",
      // href: "/assets/csc384environments/A4-Marking-Environment.zip",
      href: "",
      type: "Download",
    },
  ];

  return (
    <AnimatedPage>
      <div className="csc384Page">
        <Box hint="CSC384." title="Welcome to CSC384!" body={bodyTitle} />

        <Box
          hint="CSC384 A1."
          title="CSC384 Assignment 1 Announcement."
          body={bodyA1}
          buttons={buttonsA1}
        />

        <Box
          hint="CSC384 A2."
          title="CSC384 Assignment 2 Announcement."
          body={bodyA2}
          buttons={buttonsA2}
        />

        <Box
          hint="CSC384 A3."
          title="CSC384 Assignment 3 Announcement."
          body={bodyA3}
          buttons={buttonsA3}
        />

        <Box
          hint="CSC384 A4."
          title="CSC384 Assignment 4 Announcement."
          body={bodyA4}
          buttons={buttonsA4}
        />
      </div>
    </AnimatedPage>
  );
}

export default CSC384;
