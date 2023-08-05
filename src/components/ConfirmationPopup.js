function ConfirmationPopup() {
  return (
    <div className="popup  confirm-delete">
      <div className="popup__container">
        <button className="popup__close  link-effect" type="button"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form className="popup__form" name="form" noValidate>
          <button className="popup__submit" type="submit">Да</button>
        </form>
      </div>
    </div>
  )
}

export default ConfirmationPopup