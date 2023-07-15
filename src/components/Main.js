import avatar from '../logo.svg'

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="main">

      <section className="profile">
        <button className="profile__avatar-button"
          onClick={onEditAvatar}>
          <img className="profile__avatar" src={avatar} alt="аватар" />
        </button>
        <div className="profile__profile-info">
          <div className="profile__container">
            <h1 className="profile__name textcut">Java Script</h1>
            <button className="profile__edit-button link-effect"
              onClick={onEditProfile} type="button"></button>
          </div>
          <p className="profile__status textcut">React</p>
        </div>
        <button className="profile__add-button"
          onClick={onAddPlace} type="button"></button>
      </section>

      <section className="elements">

      </section>
    </main>
  )
}

export default Main