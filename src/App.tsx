import Cabecalho from './components/Cabecalho';
import { CotainerCustom } from './components/Container/styles';
import Rodape from './components/Rodape';
import Titulo from './components/Titulos';


function App() {
  return (
    <>
      <Cabecalho />
      <CotainerCustom>
        <Titulo>Área Administrativa</Titulo>
      </CotainerCustom>
      <Rodape/>
    </>
  );
}

export default App;
