import NewBox from "../components/NewBox";
import AnimatedPage from "./AnimatedPage";

function HomePage() {
  return (
    <AnimatedPage>
      <div className="homePage">
        <NewBox hint="Blank.">
          <h1>hi.</h1>
          <p>
            My name is Daniel Razavi and this is my little place on the web. A
            little about me is that I've attended University of Toronto for
            Computer Science, Mathematics and Statistics. I love taking photos,
            making some great playlists and putting together puzzles of any and
            all kinds. In a sea of projects that I've had to do, I'm trying to
            prioritize the projects I love/want to do. Hopefully this place can
            be a place where I can showcase my projects and honestly anything
            else I feel like putting. By the way this place is always under
            construction, so if a button doesn't work or any other weird thing,
            email me and let me know :D
          </p>
          <button type="eLink" url="mailto:danraz1376@gmail.com">
            Write me a mail.
          </button>
        </NewBox>
      </div>
    </AnimatedPage>
  );
}

export default HomePage;
