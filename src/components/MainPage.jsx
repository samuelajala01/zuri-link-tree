import Link from "./Link"
import TweetPic from "../assets/70098418.png" 

const MainPage = () => {
    return(
        <>
          <img src={TweetPic} className='tweet__pic' id="profile__img"/>
          <p id="twitter">samuelajala01</p>
          <span id="slack" hidden>Samuel Ajala</span>
          <section>
          <Link id='btn__zuri' href='https://training.zuri.team' name="Zuri Team" />
          <Link id='books' href='https://books.zuri.team' name="Zuri Books" />
          <Link id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=myslackusername' name="Python Books" />
          <Link id='pitch' href='https://background.zuri.team' name="Background Check" />
          <Link id='book__design' href='https://books.zuri.team/design-rules' name="Books on Design" />
          </section>
        </>
    )
}

export default MainPage