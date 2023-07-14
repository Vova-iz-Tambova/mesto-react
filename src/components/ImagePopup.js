function ImagePopup() {
  return (
    <div className="popup  fullscreen">
      <div className="popup__container-photo">
        <button className="popup__close  link-effect" type="button"></button>
        <img src="#" alt="" className="popup__fullscreen-photo" />
        <h3 className="popup__fullscreen-title">Место</h3>
      </div>
    </div>
  )
}
