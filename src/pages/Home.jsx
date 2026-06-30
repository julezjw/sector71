export default function Home() {
  return (
    <main>
      <div className="home-header">
        <h1>a monthly mail club</h1>
      </div>
      <div className="home-body">
        <div className="stamp stamp-photo">
          <img src="/assets/home-image.png" alt="A Sector 71 letter" />
        </div>

        <div className="stamp stamp-card">
          <p>
            Original writing, a handwritten letter, and a small gift in your
            mailbox &mdash; every month.
          </p>
          <button
            onClick={() => (window.location.href = '/about')}
            className="signup-btn"
          >
            Learn more
          </button>
        </div>
      </div>
    </main>
  );
}
