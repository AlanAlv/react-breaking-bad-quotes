import React from 'react';
import styled from '@emotion/styled';

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

const callAPI = () => {
  console.log('Calling');
}

function App() {
  return (
    <Container>
      <Button
        onClick={callAPI}
      >
        Get Quote
      </Button>
    </Container>
  );
}

export default App;
