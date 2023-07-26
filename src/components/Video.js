import style from "./Media.module.css";

const Video = ({ title, url }) => {
  return (
    <div className="video-box">
      <h1 className={style.title}>{title}</h1>
      <div className={style.youtubeDisclaimer}>
        <p>
          Disclaimer: YouTube won't store information about visitors on the
          website unless they play the video.
        </p>
      </div>
      <div className={style.iframeContainer}>
        <iframe
          width="840"
          height="473"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Video;
