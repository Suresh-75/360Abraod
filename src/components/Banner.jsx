const Banner = ({ classN, images, speed = 5000 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className={classN} key={id}>
              <img className={classN} src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className={classN} key={id}>
              <img className={classN} src={image} alt={id} />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className={classN} key={id}>
              <img className={classN} src={image} alt={id} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
