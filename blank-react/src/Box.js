const Box = ({ hint, title, body, images, buttons }) => {
  return (
    <div className="box">
      <h1 className="hint">{hint}</h1>
      <h1>{title}</h1>
      <p>{body}</p>

      {images && (
        <div className="box-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`ax ${index}`} />
          ))}
        </div>
      )}

      {buttons && (
        <div className="box-buttons">
          {buttons.map((button, index) => (
            <a key={index} href={button.href}>
              <button>{button.label}</button>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Box;
