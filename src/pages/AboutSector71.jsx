export default function AboutSector71() {
  return (
    <main className="about-sector71">
      <h1>About Sector 71</h1>
      <div className="about-grid">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/5_VYlFEOhqE"
            title="Sector 71"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <p>
            Sector 71, named after the neighborhood in Punjab where my
            grandparents lived, is a monthly mail club. </p>
          <br />
          <p>Each month, subscribers receive:</p>
          <br />

          <ul>
            <li>a handwritten letter</li>
            <li>
              a piece of original writing (essay, short story, and/or poetry)
            </li>
            <li>and a little gift chosen with care</li>
          </ul>
          <br />

          <p>
            Every month has a theme. Past themes have been connection, love,
            creativity, happiness, desire, and New York.
          </p>
          <button
            onClick={() =>
              window.open(
                'https://buy.stripe.com/3cIaEXdPl9JUcYjdjl8ww00',
                '_blank'
              )
            }
            className="signup-btn"
          >
            Purchase a subscription
          </button>
        </div>
      </div>

      <div className="pricing"  >
        <h1>Pricing</h1>
        <p>
          Sector 71 operates on a pay&ndash;scale, meaning you pay what feels right to
          you. For a 6&ndash;month subscription, the cost range is $60&ndash;$100.
        </p>
        <br />
        <p>I make almost no profit from this right now. I do it because I love it. I hope you do too.</p>
      </div>
    </main>
  );
}
