export default function AboutMe() {
  return (
    <main className="about">
      <h1>About Me</h1>

      <div className="about-grid">
        <aside className="note">
          <h2>Navya Kaur</h2>
          <ul>
            <li>based in Boston</li>
            <li>journaling since 7th grade</li>
            <li>knitter and crocheter</li>
            <li>ice cream lover (but not after 9 p.m.)</li>
            <li>always curious</li>
          </ul>
          <p className="building">and founder of <br />Sector 71!</p>
        </aside>

        <figure className="about-photo">
          <div className="stars">
            <img src="/assets/gold-star.png" alt="" />
            <img src="/assets/gold-star.png" alt="" />
            <img src="/assets/gold-star.png" alt="" />
          </div>
          <img
            className="portrait"
            src="/assets/profile-picture.jpg"
            alt="Portrait of Navya Kaur"
          />
        </figure>

        <div className="about-body">
          <p>Dear reader,</p>
          <p>Those who know me know I've always loved sending and receiving mail. In my opinion, handwritten letters are a lost art and one of the truest ways to communicate, because of the deliberation and anticipation they require.</p>
          <p>I started this mail club to reintroduce care and intimacy into how we connect. In a digital world where everything is always at our fingertips, there's something special about letting things take their time to come to you.</p>
          <p>My work has been featured in Oyster River Pages and The San Franciscan, but my main credentials come from my sixth grade elementary school teacher who told me I was going to be a writer one day. Mr. Rivera, you got it so right.</p>
          <p>Sincerely,</p>
          <p>Navya</p>
        </div>
      </div>
    </main>
  );
}
