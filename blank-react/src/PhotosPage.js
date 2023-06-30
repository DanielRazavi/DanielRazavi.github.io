import Box from "./Box";
import image1 from "./Images/test1.JPG";
import image2 from "./Images/test2.JPG";
import image3 from "./Images/test3.JPG";
import image4 from "./Images/test4.JPG";
import image5 from "./Images/test5.JPG";
import image6 from "./Images/test6.JPG";
import image7 from "./Images/test7.JPG";
import image8 from "./Images/test8.JPG";
import image9 from "./Images/test9.JPG";
import image10 from "./Images/test10.JPG";
import image11 from "./Images/test11.JPG";
import image12 from "./Images/test12.JPG";
import image13 from "./Images/test13.JPG";
import image14 from "./Images/test14.JPG";
import image15 from "./Images/test15.JPG";
import image16 from "./Images/test16.JPG";
import image17 from "./Images/test17.JPG";
import image18 from "./Images/test18.JPG";
import image19 from "./Images/test19.JPG";
import image20 from "./Images/test20.JPG";
import image21 from "./Images/test21.JPG";
import image22 from "./Images/test22.JPG";
import image23 from "./Images/test23.JPG";
import image24 from "./Images/test24.JPG";
import image25 from "./Images/test25.JPG";
import image26 from "./Images/test26.JPG";
import image27 from "./Images/test27.JPG";

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

      <img src={image1} />
      <img src={image2} />
      <img src={image3} />
      <img src={image4} />
      <img src={image5} />
      <img src={image6} />
      <img src={image7} />
      <img src={image8} />
      <img src={image9} />
      <img src={image10} />
      <img src={image11} />
      <img src={image12} />
      <img src={image13} />
      <img src={image14} />
      <img src={image15} />
      <img src={image16} />
      <img src={image17} />
      <img src={image18} />
      <img src={image19} />
      <img src={image20} />
      <img src={image21} />
      <img src={image22} />
      <img src={image23} />
      <img src={image24} />
      <img src={image25} />
      <img src={image26} />
      <img src={image27} />
    </div>
  );
}

export default PhotosPage;
