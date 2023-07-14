function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name}  ${isOpen && "popup_is-opened"}`}>
      <div className="popup__container">
        <button className="popup_close" type="button" onClick={onClose}></button>
        <form classname="popup__form" name={name}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm