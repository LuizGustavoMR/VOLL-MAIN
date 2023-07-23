import Cabecalho from './components/Cabecalho';
import { CotainerCustom } from './components/Container/styles';
import Rodape from './components/Rodape';
import Tabela from './components/Table';
import Titulo from './components/Titulos';
import { GetConsultas } from './useApi/useApiGetDados';


function App() {

  const {dados , erro} = GetConsultas();

  return (
    <>
      <Cabecalho />
      <CotainerCustom>
        <Titulo>Área Administrativa</Titulo>
        {/* <Tabela consultas={dados ? dados : null}/> */}
      </CotainerCustom>
      <Rodape/>
    </>
  );
}

export default App;
