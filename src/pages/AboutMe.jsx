export default function AboutMe() {
  return (
    <main className="about">
      <h1>About Me</h1>

      <div className="about-grid">
        <aside className="note">
          <h2>Navya Kaur</h2>
          <ul>
            <li>based in Boston</li>
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
          <p>Those who know me know I've always loved mail. Mail is the antithesis to how we communicate in our modern, digital world, because it requires patience as it arrives and deliberation as it is read.</p>
          <p>This mail club combines my love for mail and my love for writing. In each envelope, you’ll find an unedited piece of me – a thought, a feeling, or a new style of writing I’m trying to explore.</p>
          <p>This is my way of communicating directly with each of you. Please write me back!</p>
          <p>Sincerely,</p>
          <p>Navya</p>
          <p>P.S. My work has been featured in Oyster River Pages and The San Franciscan, but my main credentials come from my sixth grade teacher, Mr. Rivera, who told me I was going to be a writer one day.</p>
        </div>
      </div>
    </main>
  );
}
