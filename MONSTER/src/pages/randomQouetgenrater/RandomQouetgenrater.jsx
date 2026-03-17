import React from 'react';
import axios from 'axios';

const RandomQouetgenrater = () => {
  const [loading, setLoading] = React.useState(false);
  const [quote, setQoute] = React.useState(null);

  const featchQuote = async () => {
    try {
      setLoading(true);
      const apiResponse = await axios.get(
        'https://api.allorigins.win/raw?url=https://zenquotes.io/api/random',
      );
      const result = apiResponse.data;

      if (result && result.length > 0) {
        setLoading(false);
        setQoute(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    featchQuote();
  }, []);

  console.log(quote);

  return (
    <div>
      <h1 className="text-4xl">random qoute</h1>
      <p>
        {quote && quote.length > 0 ? (
          <>
            {quote.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <p>{item.q}</p>
                    <p>{item.a}</p>
                  </div>
                </>
              );
            })}
          </>
        ) : null}
      </p>
      <button
        disabled={loading}
        onClick={() => {
          featchQuote();
        }}
      >
        random
      </button>
    </div>
  );
};

export default RandomQouetgenrater;
