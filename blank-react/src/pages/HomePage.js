import Box from "../components/Box";
import AnimatedPage from "./AnimatedPage";

function HomePage() {
  const body = [
    "My name is Daniel Razavi and this is my little place on the web. A little about me is that I've attended University of Toronto for Computer Science, Mathematics and Statistics. I love taking photos, making some great playlists and putting together puzzles of any and all kinds. In a sea of projects that I've had to do, I'm trying to prioritize the projects I love/want to do. Hopefully this place can be a place where I can showcase my projects and honestly anything else I feel like putting. By the way this place is always under construction, so if a button doesn't work or any other weird thing, email me and let me know :D",
  ];

  const buttons = [
    { label: "Write me a mail.", href: "mailto:danraz1376@gmail.com" },
  ];

  return (
    <AnimatedPage>
      <div className="homePage">
        <Box hint="Blank." title="hi." body={body} buttons={buttons} />
      </div>
    </AnimatedPage>
  );
}

export default HomePage;
