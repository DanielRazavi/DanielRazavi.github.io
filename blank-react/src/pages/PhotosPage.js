import Box from "../components/Box";
import image1 from "../assets/Images/test1.JPG";
import image2 from "../assets/Images/test2.JPG";
import image3 from "../assets/Images/test3.JPG";
import image4 from "../assets/Images/test4.JPG";
import image5 from "../assets/Images/test5.JPG";
import image6 from "../assets/Images/test6.JPG";
import image7 from "../assets/Images/test7.JPG";
import image8 from "../assets/Images/test8.JPG";
import image9 from "../assets/Images/test9.JPG";
import image10 from "../assets/Images/test10.JPG";
import image11 from "../assets/Images/test11.JPG";
import image12 from "../assets/Images/test12.JPG";
import image13 from "../assets/Images/test13.JPG";
import image14 from "../assets/Images/test14.JPG";
import image15 from "../assets/Images/test15.JPG";
import image16 from "../assets/Images/test16.JPG";
import image17 from "../assets/Images/test17.JPG";
import image18 from "../assets/Images/test18.JPG";
import image19 from "../assets/Images/test19.JPG";
import image20 from "../assets/Images/test20.JPG";
import image21 from "../assets/Images/test21.JPG";
import image22 from "../assets/Images/test22.JPG";
import image23 from "../assets/Images/test23.JPG";
import image24 from "../assets/Images/test24.JPG";
import image25 from "../assets/Images/test25.JPG";
import image26 from "../assets/Images/test26.JPG";
import image27 from "../assets/Images/test27.JPG";

function PhotosPage() {
  const body =
    "lol don't take that serious, I'm actually a rookie and yeah, no clue how that photoshop thing works, but you know, its fun to just go different places and take some pics, regardless of what camera is being used, if its a phone or a really nice dslr. don't get me wrong though, I will learn all that fancy stuff in time. If you want, you can follow me on instagram :D";

  const buttons = [
    { label: "My Instagram.", href: "https://www.instagram.com/roundglasses/" },
  ];

  return (
    <div className="photosPage">
      <Box
        hint="Photos."
        title="Yeah bro, I'm artsy"
        body={body}
        buttons={buttons}
      />

      <img src={image1} alt="ax 1" />
      <img src={image2} alt="ax 2" />
      <img src={image3} alt="ax 3" />
      <img src={image4} alt="ax 4" />
      <img src={image5} alt="ax 5" />
      <img src={image6} alt="ax 6" />
      <img src={image7} alt="ax 7" />
      <img src={image8} alt="ax 8" />
      <img src={image9} alt="ax 9" />
      <img src={image10} alt="ax 10" />
      <img src={image11} alt="ax 11" />
      <img src={image12} alt="ax 12" />
      <img src={image13} alt="ax 13" />
      <img src={image14} alt="ax 14" />
      <img src={image15} alt="ax 15" />
      <img src={image16} alt="ax 16" />
      <img src={image17} alt="ax 17" />
      <img src={image18} alt="ax 18" />
      <img src={image19} alt="ax 19" />
      <img src={image20} alt="ax 20" />
      <img src={image21} alt="ax 21" />
      <img src={image22} alt="ax 22" />
      <img src={image23} alt="ax 23" />
      <img src={image24} alt="ax 24" />
      <img src={image25} alt="ax 25" />
      <img src={image26} alt="ax 26" />
      <img src={image27} alt="ax 27" />
    </div>
  );
}

export default PhotosPage;
