import Box from "../components/Box";
import ImageComponent from "../components/Image";

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

      <ImageComponent path="test1.JPG" alt="ax1" />
      <ImageComponent path="test2.JPG" alt="ax2" />
      <ImageComponent path="test3.JPG" alt="ax3" />
      <ImageComponent path="test4.JPG" alt="ax4" />
      <ImageComponent path="test5.JPG" alt="ax5" />
      <ImageComponent path="test6.JPG" alt="ax6" />
      <ImageComponent path="test7.JPG" alt="ax7" />
      <ImageComponent path="test8.JPG" alt="ax8" />
      <ImageComponent path="test9.JPG" alt="ax9" />
      <ImageComponent path="test10.JPG" alt="ax10" />
      <ImageComponent path="test11.JPG" alt="ax11" />
      <ImageComponent path="test12.JPG" alt="ax12" />
      <ImageComponent path="test13.JPG" alt="ax13" />
      <ImageComponent path="test14.JPG" alt="ax14" />
      <ImageComponent path="test15.JPG" alt="ax15" />
      <ImageComponent path="test16.JPG" alt="ax16" />
      <ImageComponent path="test17.JPG" alt="ax17" />
      <ImageComponent path="test18.JPG" alt="ax18" />
      <ImageComponent path="test19.JPG" alt="ax19" />
      <ImageComponent path="test20.JPG" alt="ax20" />
      <ImageComponent path="test21.JPG" alt="ax21" />
      <ImageComponent path="test22.JPG" alt="ax22" />
      <ImageComponent path="test23.JPG" alt="ax23" />
      <ImageComponent path="test24.JPG" alt="ax24" />
      <ImageComponent path="test25.JPG" alt="ax25" />
      <ImageComponent path="test26.JPG" alt="ax26" />
      <ImageComponent path="test27.JPG" alt="ax27" />
    </div>
  );
}

export default PhotosPage;
