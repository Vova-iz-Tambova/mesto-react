import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {
  const avatarRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    })
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <div className="popup__field">
          <input required
            type="url"
            id="profileAvatar"
            name="profileAvatar"
            className="popup__input  popup__input_avatar_link"
            placeholder="Ссылка на картинку"
            ref={avatarRef}
          />
          <span
            id="profileAvatar-error"
            className="popup__error">
          </span>
        </div>
      }
    />
  )
}

export default EditAvatarPopup