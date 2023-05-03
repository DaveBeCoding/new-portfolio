import React, { useEffect } from 'react';

const TradingView = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "description": "",
          "proName": "NASDAQ:AAPL"
        },
        {
          "description": "",
          "proName": "BINANCE:DOGEUSDT"
        },
        {
          "description": "",
          "proName": "NASDAQ:TSLA"
        },
        {
          "description": "",
          "proName": "NASDAQ:QQQ"
        }
      ],
      "showSymbolLogo": true,
      "colorTheme": "light",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "en"
    });
    document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        {/* <a href="https://www.tradingview.com/markets/" rel="noopener" target="_blank">
          <span className="blue-text">Markets today</span>
        </a> by TradingView */}
      </div>
    </div>
  );
};

export default TradingView;
