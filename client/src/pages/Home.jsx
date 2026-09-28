import "../styles/Home.css";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-text">

          <h1>Money Exchange System</h1>

          <h2>Secure Peer-to-Peer Currency Exchange</h2>

          <p>
            Exchange currencies safely, quickly, and securely with our modern
            money exchange platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>

        </div>

        <div className="hero-image">

          💱

        </div>

      </section>
      <section className="features">

        <h2>Why Choose Our Platform?</h2>

        <div className="feature-container">

        <div className="feature-card">
        <h3>🔒 Secure Transactions</h3>
        <p>
          All exchanges are protected with secure authentication and trusted users.
        </p>
        </div>

        <div className="feature-card">
        <h3>⚡ Fast Exchange</h3>
        <p>
          Exchange currencies quickly with an easy-to-use interface.
        </p>
      </div>

      <div className="feature-card">
        <h3>🌍 Multiple Currencies</h3>
        <p>
          Support for exchanging multiple international currencies.
        </p>
      </div>

    </div>

  </section>
  <footer className="footer">
  <p>© 2026 Money Exchange System. All Rights Reserved.</p>
</footer>
  </>
  );
}

export default Home;