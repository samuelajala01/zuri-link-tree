import TweetPic from "../assets/70098418.png"
import SlackLogo from "../assets/slack.svg"
import GitLogo from "../assets/Icon.svg"
import shareDesktop from '../assets/share-btn-desktop.svg'
import shareMobile from '../assets/share-btn-mobile.svg'
import Footer from "./Footer"


const MainPage = () => {
  return (
    <section id="main-page">
      <img src={TweetPic} className='tweet__pic' id="profile__img" />
      <img src={shareDesktop} className='shareDesktop' />
      <img src={shareMobile} className='shareMobile' />
      <p id="twitter">samuelajala01</p>
      <span id="slack" hidden>Samuel Ajala</span>
      <section>
        <a id='btn__zuri' href='https://training.zuri.team'>Zuri Team</a>
        <a id='books' href='https://books.zuri.team'>Zuri Books</a>
        <a id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=cy63rx'>Python Books</a>
        <a id='pitch' href='https://background.zuri.team'>Background check for coders</a>
        <a id='book__design' href='https://books.zuri.team/design-rules' >Design Books</a>
        <a id="contact" href="/contact">Contact</a>
      </section>
      <span className="logo__div"><img src={SlackLogo} /><a href="https://github.com/samuelajala01"><img src={GitLogo} /></a></span>
      <Footer />
    </section>
  )
}

export default MainPage