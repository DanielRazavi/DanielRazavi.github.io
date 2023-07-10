import style from "./Media.module.css";

const Slides = ({ title, url }) => {
  return (
    <div className="video-box">
      <h1 class={style.title}>{title}</h1>
      <div class={style.iframeContainer}>
        <iframe
          src={url}
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"></iframe>
      </div>
    </div>
  );
};

export default Slides;
