function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}  ${props.isOpen && "popup_is-opened"}`}>
      <div className="popup__container">
        <button className="popup__close  link-effect" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name}>
          {props.children}
          <button className="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm