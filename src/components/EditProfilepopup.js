import React from 'react'
import PopupWithForm from './PopupWithForm'
import CurrentUserContext from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const currentUser = React.useContext(CurrentUserContext)

  function handleName(e) { setName(e.target.value) }
  function handleDescription(e) { setDescription(e.target.value) }

  React.useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser])

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateUser({
      name,
      about: description,
    })
  }

  return (
    <PopupWithForm
      title="Редактировать профиль" name="edit-profile" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
      children={
        <>
          <div className="popup__field">
            <input id="profileName" name="profileName" type="text" minLength="2" maxLength="40" required
              className="popup__input  popup__input_profile_name" placeholder="Введите имя" value={name} onChange={handleName} />
            <span id="profileName-error" className="popup__error"></span>
          </div>
          <div className="popup__field">
            <input id="profileStatus" name="profileStatus" type="text" minLength="2" maxLength="200" required
              className="popup__input  popup__input_profile_job" placeholder="Введите статус" value={description} onChange={handleDescription} />
            <span id="profileStatus-error" className="popup__error"> </span>
          </div>
        </>
      }
    />
  )
}

export default EditProfilePopup