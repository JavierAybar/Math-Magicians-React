import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FetchQuotes = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = 'https://api.api-ninjas.com/v1/quotes?category=alone';
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': 'pB33PTqHltghkmhwcxN9dw==XpkYpcTp7PCuAB1v',
          },
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (error) return <div className="error">Something went wrong!</div>;

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container__quotes">
      <h2 className="title__quotes">Quotes</h2>
      <ul className="quotes">
        {data.map((item, index) => (/* eslint-disable-next-line react/no-array-index-key */
          <div className="section-quotes" key={uuidv4() + index}>
            <li>{item.quote}</li>
            <li>
              <strong>Author:</strong>
              {' '}
              {item.author}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FetchQuotes;
