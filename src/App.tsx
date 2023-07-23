import Cabecalho from './components/Cabecalho';
import { CotainerCustom } from './components/Container/styles';
import Grafico from './components/Graficos';
import Rodape from './components/Rodape';
import Tabela from './components/Table';
import Titulo from './components/Titulos';
import GetConsultas from './useApi/useApiGetConsulta';
import GetProfissionais from './useApi/useApiGetProfissionais';



function App() {

  const {dados: consultar , erro: consultasErro} = GetConsultas();
  const {dados: Profissionais  , erro: ProfissionaisErro } = GetProfissionais();

  if(consultasErro || ProfissionaisErro){
    console.log("Ocirreu um erro na consulta aos dados!")
  }

  return (
    <>
      <Cabecalho />
      <CotainerCustom>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas={consultar}/>
        <Grafico consultas={consultar} profissionais={Profissionais} />
      </CotainerCustom>
      <Rodape/>
    </>
  );
}

export default App;
