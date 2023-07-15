import React from 'react'
import api from '../utils/Api'

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = React.useState("")
  const [userDescription, setUserDescription] = React.useState("")
  const [userAvatar, setUserAvatar] = React.useState("")

  api.getUserInfo()
    .then((res) => {
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    })
    .catch(console.error)

  return (
    <main className="main">

      <section className="profile">
        <button className="profile__avatar-button"
          onClick={onEditAvatar}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
        </button>
        <div className="profile__profile-info">
          <div className="profile__container">
            <h1 className="profile__name textcut">{userName}</h1>
            <button className="profile__edit-button link-effect"
              onClick={onEditProfile} type="button"></button>
          </div>
          <p className="profile__status textcut">{userDescription}</p>
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