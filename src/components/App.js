import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)

  function handleEditAvatarClick() { setIsEditAvatarPopupOpen(true) }
  function handleEditProfileClick() { setIsEditProfilePopupOpen(true) }
  function handleAddPlaceClick() { setIsAddPlacePopupOpen(true) }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm
        title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
        children={
          <div className="popup__field">
            <input id="profileAvatar" name="profileAvatar" type="url" required
              className="popup__input  popup__input_avatar_link" placeholder="Ссылка на картинку" />
            <span id="profileAvatar-error" className="popup__error"></span>
          </div>
        }
      />

      <PopupWithForm
        title="Редактировать профиль" name="edit-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
        children={
          <>
            <div className="popup__field">
              <input id="profileName" name="profileName" type="text" minlength="2" maxlength="40" required
                className="popup__input  popup__input_profile_name" placeholder="Введите имя" />
              <span id="profileName-error" className="popup__error"></span>
            </div>
            <div className="popup__field">
              <input id="profileStatus" name="profileStatus" type="text" minlength="2" maxlength="200" required
                className="popup__input  popup__input_profile_job" placeholder="Введите статус" />
              <span id="profileStatus-error" className="popup__error"> </span>
            </div>
          </>
        }
      />

      <PopupWithForm
        title="Новое место" name="add-place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
        children={
          <>
            <div className="popup__field">
              <input id="name" required name="name" type="text" minlength="2" maxlength="30"
                className="popup__input  popup__input_mesto_name" placeholder="Название" />
              <span id="name-error" className="popup__error"></span>
            </div>
            <div className="popup__field">
              <input id="link" required name="link" type="url" className="popup__input  popup__input_mesto_link"
                placeholder="Ссылка на картинку" />
              <span id="link-error" className="popup__error"></span>
            </div>
          </>
        }
      />

      <div className="popup  confirm-delete">
        <div className="popup__container">
          <button className="popup__close  link-effect" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" name="form" novalidate>
            <button className="popup__submit" type="submit">Да</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
