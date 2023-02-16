function Box({ src, alt, title, price, code }) {
  return (
    <>
      <div className="box">
        <div className="img-boxContainer">
          <img className="img-box" src={src} alt={alt} />
        </div>
        <div className="text-wrapper">
          <div className="title-box ">{title}</div>
          <div className="code-box subtitles">{code}</div>
          <div className="subtitles ">
            Precio: <span className="price-box">${price}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Box
