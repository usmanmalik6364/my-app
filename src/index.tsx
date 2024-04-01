import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import React Query
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient(); // Create a new QueryClient instance

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Wrap App with QueryClientProvider */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
//function for parsing the flag 
// function solveRampChallenge(htmlString) {
//   // Parse the HTML string
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, 'text/html');

//   // Select all the 'i' elements with class 'char'
//   const charElements = Array.from(doc.querySelectorAll('i.char'));

//   // Filter the elements based on the rules provided
//   const filteredElements = charElements.filter((element) => {
//     // Check if the parent nodes match the pattern
//     const spanElement = element.parentElement;
//     const divElement = spanElement?.parentElement;
//     const codeElement = divElement?.parentElement;

//     const isSpanValid = spanElement && /.*21.*/.test(spanElement.getAttribute('data-id'));
//     const isDivValid = divElement && /.*93/.test(divElement.getAttribute('data-tag'));
//     const isCodeValid = codeElement && /23.*/.test(codeElement.getAttribute('data-class'));

//     return isSpanValid && isDivValid && isCodeValid;
//   });

//   // Extract the values and join them to form the URL
//   const url = filteredElements.map((element) => element.getAttribute('value')).join('');

//   return url;
// }
// const htmlString = document.documentElement.innerHTML;
// const url = solveRampChallenge(htmlString);
// console.log(url);

// VM5612:3 https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/726562

// ran this in the browser