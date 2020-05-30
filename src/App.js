import React, {useState} from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote'

const Container = styled.div`
display: flex;
align-items: center;
padding-top: 5px;
flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-repeating-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  // Quote state
  const [ quote, saveQuote ] = useState({});

  
  const callAPI = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await api.json();
    saveQuote(quote[0]);
  }

  return (
    <Container>
      <Quote 
        quote={quote}
      />
      <Button
        onClick={callAPI}
      >
        Get Quote
      </Button>
    </Container>
  );
}

export default App;
