import React from 'react'
import api from '../utils/Api'
import Card from './Card'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Main(props) {
  const [cards, setCards] = React.useState([])
  const currentUser = React.useContext(CurrentUserContext)

  React.useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res)
      })
      .catch(console.error)
  }, [])

  return (
    <main className="main">

      <section className="profile">
        <button className="profile__avatar-button"
          onClick={props.onEditAvatar}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} />
        </button>
        <div className="profile__profile-info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button link-effect"
              onClick={props.onEditProfile} type="button"></button>
          </div>
          <p className="profile__status">{currentUser.about}</p>
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