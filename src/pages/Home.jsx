export default function Home() {
  return (
    <main className="home">
      <div className="stamp stamp-photo">
        <img src="/assets/home-image.jpg" alt="A Sector 71 letter on a desk with a cup of coffee" />
      </div>

      <div className="stamp stamp-card">
        <h1>Welcome to Sector 71!</h1>
        <p>
          My writing, a handwritten letter, and a small gift straight in your
          mailbox &ndash; every month.
        </p>
        <button onClick={() => window.open('https://buy.stripe.com/3cIaEXdPl9JUcYjdjl8ww00', '_blank')} className="signup-btn">Sign up!</button>
      </div>
    </main>
  )
}
