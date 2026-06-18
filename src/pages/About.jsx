export default function About() {
  return (
    <main className="about">
      <h1>About Me &amp; Sector 71</h1>

      <div className="about-grid">
        <aside className="note">
          <h2>ABOUT ME</h2>
          <ul>
            <li>Navya Kaur</li>
            <li>Chief of Staff</li>
            <li>Based in Boston</li>
            <li>Loves knitting</li>
            <li>Always curious</li>
          </ul>
          <p className="building">And founder of Sector 71!</p>
        </aside>

        <figure className="about-photo">
          <div className="stars">
            <img src="/assets/gold-star.png" alt="" />
            <img src="/assets/gold-star.png" alt="" />
            <img src="/assets/gold-star.png" alt="" />
          </div>
          <img className="portrait" src="/assets/profile-picture.jpg" alt="Portrait of Navya Kaur" />
          <figcaption className="caption">stay tuned for more!</figcaption>
        </figure>

        <div className="about-body">
          <p>
            Navya Kaur is the Chief of Staff to the General Counsel at
            compliance-startup Ethena. Before finding her home in early-stage
            tech, she worked in government and consulting &mdash; a winding road
            she credits to an American Studies degree and a hearty curiosity
            about everything. Outside of work, she designs and knits her own
            clothes, is a published writer, and recently started her own monthly
            mail subscription called Sector 71.
          </p>
          <p>
            Sector 71 is a small labor of love: every month, subscribers receive
            a handwritten letter, a piece of original writing, and a little gift
            chosen with care. It&rsquo;s an experiment in slowing down, making
            things by hand, and keeping the lost art of mail alive &mdash; one
            envelope at a time.
          </p>
        </div>
      </div>
    </main>
  )
}
