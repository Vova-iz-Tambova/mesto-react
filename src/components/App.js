import React from "react"
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'



function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false)

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }

  function handleEditAvatarClick() { setisEditAvatarPopupOpen(true) }

  function handleEditProfileClick() { setIsEditProfilePopupOpen(true) }

  function handleAddPlaceClick() { setIsAddPlacePopupOpen(true) }

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />

      <PopupWithForm
        title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}

      ></PopupWithForm>

      <div className="popup  edit-avatar">
        <div className="popup__container">
          <button className="popup__close  link-effect" type="button" onClick={closeAllPopups}></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="form" novalidate>
            <div className="popup__field">
              <input id="profileAvatar" required name="profileAvatar" type="url"
                className="popup__input  popup__input_avatar_link" placeholder="Ссылка на картинку" />
              <span id="profileAvatar-error" className="popup__error"></span>
            </div>
            <button className="popup__submit" type="submit" disabled>Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup  edit-profile  popup">
        <div className="popup__container">
          <button className="popup__close  link-effect" type="button" onClick={closeAllPopups}></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="form" novalidate>
            <div className="popup__field">
              <input id="profileName" required name="profileName" type="text" minlength="2" maxlength="40"
                className="popup__input  popup__input_profile_name" placeholder="Введите имя" />
              <span id="profileName-error" className="popup__error"></span>
            </div>
            <div className="popup__field">
              <input id="profileStatus" required name="profileStatus" type="text" minlength="2" maxlength="200"
                className="popup__input  popup__input_profile_job" placeholder="Введите статус" />
              <span id="profileStatus-error" className="popup__error"> </span>
            </div>
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup  add-place">
        <div className="popup__container">
          <button className="popup__close  link-effect" type="button" onClick={closeAllPopups}></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="form" novalidate>
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
            <button className="popup__submit" type="submit" disabled>Создать</button>
          </form>
        </div>
      </div>

      <div className="popup  confirm-delete">
        <div className="popup__container">
          <button className="popup__close  link-effect" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" name="form" novalidate>
            <button className="popup__submit" type="submit">Да</button>
          </form>
        </div>
      </div>



      <template className="card" id="card-template">
        <div className="elements__element">
          <img src="#" alt="Место" className="elements__photo" />
          <h2 className="elements__tag  textcut">Место</h2>
          <div className="elements__likegroup">
            <button className="elements__like" type="button"></button>
            <p className="elements__likecount">0</p>
          </div>
          <button className="elements__delete-button  link-effect" type="button"></button>
        </div>
      </template>
    </div>
  )
}

export default App;
