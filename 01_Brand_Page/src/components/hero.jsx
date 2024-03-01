const HeroSection = () => {
    return (
      <main className="hero">
        <div className="heroContent">
          <h1>Your Money Deserves Better Investment</h1>
          <p>
            Discover the future of finance with our curated selection of
            cryptocurrency insights. From market analysis to investment
            strategies, we provide the tools and expertise to help you make
            smarter decisions and maximize your returns. Your money deserves the
            best, and we're here to deliver.
          </p>
  
          <div className="heroButton">
            <button>
              <a href="https://www.coinbase.com/">Buy Now</a>
            </button>
            <button className="second-btn">
              <a href="https://www.coinbase.com/cbeth/whitepaper">Whitepaper</a>
            </button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brandIcons">
              <a href="https://www.coingecko.com/">
                <img src="/images/coingecko.png" alt="coingecko-logo" />
              </a>
              <a href="https://www.binance.com/en-IN">
                <img src="/images/binance-logo.png" alt="BnbIcon-logo" />
              </a>
            </div>
          </div>
        </div>
  
        <div className="heroImage">
          <img src="/images/image.png" alt="" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;
  