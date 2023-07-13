import avatar from '../logo.svg'

function handleEditAvatarClick() {
  document.querySelector('.edit-avatar').classList.add('popup_is-opened')
}

function handleEditProfileClick() {
  document.querySelector('.edit-profile').classList.add('popup_is-opened')
}

function handleAddPlaceClick() {
  document.querySelector('.add-place').classList.add('popup_is-opened')
}

function Main() {
  return (
    <main className="main">

      <section className="profile">
        <button className="profile__avatar-button"
          onClick={handleEditAvatarClick}>
          <img className="profile__avatar" src={avatar} alt="аватар" />
        </button>
        <div className="profile__profile-info">
          <div className="profile__container">
            <h1 className="profile__name textcut">Java Script</h1>
            <button className="profile__edit-button link-effect"
              onClick={handleEditProfileClick} type="button"></button>
          </div>
          <p className="profile__status textcut">React</p>
        </div>
        <button className="profile__add-button"
          onClick={handleAddPlaceClick} type="button"></button>
      </section>

      <section className="elements">

      </section>
    </main>
  )
}

export default Main