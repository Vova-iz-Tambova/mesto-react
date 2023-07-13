import avatar from '../logo.svg'

function Main() {
  return (
    <main className="main">

        <section className="profile">
          <button className="profile__avatar-button">
            <img className="profile__avatar" src={ avatar } alt="аватар" />
          </button>
          <div className="profile__profile-info">
            <div className="profile__container">
              <h1 className="profile__name textcut">Java Script</h1>
              <button className="profile__edit-button link-effect" type="button"></button>
            </div>
            <p className="profile__status textcut">React</p>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>

        <section className="elements">

        </section>
      </main>
  )
}

export default Main