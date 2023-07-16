import React from 'react'
import api from '../utils/Api'
import Card from './Card'

function Main(props) {
  const [userName, setUserName] = React.useState("")
  const [userDescription, setUserDescription] = React.useState("")
  const [userAvatar, setUserAvatar] = React.useState("")
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then(([info, cards]) => {
        setUserName(info.name)
        setUserDescription(info.about)
        setUserAvatar(info.avatar)
        setCards(cards)
      }).catch(console.error)
  }, []);

  return (
    <main className="main">

      <section className="profile">
        <button className="profile__avatar-button"
          onClick={props.onEditAvatar}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
        </button>
        <div className="profile__profile-info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button link-effect"
              onClick={props.onEditProfile} type="button"></button>
          </div>
          <p className="profile__status">{userDescription}</p>
        </div>
        <button className="profile__add-button"
          onClick={props.onAddPlace} type="button"></button>
      </section>

      <section className="elements">
        {cards.map((item) => (
          <Card key={item._id} card={item} onCardClick={props.onCardClick} />
        ))}
      </section>

    </main>
  )
}

export default Main