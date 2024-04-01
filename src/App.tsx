import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const App: React.FC = () => {
  const [displayedFlag, setDisplayedFlag] = useState<string>('');
  //using index to keep track of the rendering
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  //using reactquery to manage error state and success state
  const { data, isLoading, isError } = useQuery('flagData', async () => {
    const response = await axios.get('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/726562');
    return response.data;
  });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
        if (currentIndex === data.length) {
          clearInterval(intervalId);
        }
      }, 500);
      return () => clearInterval(intervalId);
    }
  }, [isLoading, isError, data, currentIndex]);

  useEffect(() => {
    setDisplayedFlag(data?.substring(0, currentIndex));
  }, [data, currentIndex]);

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : isError ? (
        'Error fetching data'
      ) : (
        <>
        <ul>
          {displayedFlag && displayedFlag.split('').map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
        </>
      )}
    </div>
  );
};

export default App;
