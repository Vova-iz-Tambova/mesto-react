
function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name}  ${isOpen && "popup_is-opened"}`}>
      <div className="popup__container">
        <button className="popup__close  link-effect" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name}>
          {children}
          <button className="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm