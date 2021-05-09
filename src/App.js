import './App.css';
import DisplayComponent from './components/display';
import styled from 'styled-components';

const Main = styled.div`
  margin: 10px;
`

function App() {
  return (
    <Main>
      <DisplayComponent />
    </Main>
  );
}

export default App;
