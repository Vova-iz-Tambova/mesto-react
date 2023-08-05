import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
  const nameRef = React.useRef()
  const linkRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault()
    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    })
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <div className="popup__field">
            <input required
              id="name"
              name="name"
              type="text"
              minLength="2"
              maxLength="30"
              ref={nameRef}
              className="popup__input  popup__input_mesto_name"
              placeholder="Название" />
            <span id="name-error" className="popup__error"></span>
          </div>
          <div className="popup__field">
            <input required
              id="link"
              name="link"
              type="url"
              ref={linkRef}
              className="popup__input  popup__input_mesto_link"
              placeholder="Ссылка на картинку" />
            <span id="link-error" className="popup__error"></span>
          </div>
        </>
      }
    />
  )
}

export default AddPlacePopup