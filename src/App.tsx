import Avalicao from './components/Avaliacao';
import Botao from './components/Botao';
import Cabecalho from './components/Cabecalho';
import { CotainerCustom } from './components/Container/styles';
import Grafico from './components/Graficos';
import Rodape from './components/Rodape';
import SubTitulo from './components/Subtitulo';
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
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela consultas={consultar} />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <SubTitulo>Dezembro/22</SubTitulo>
        <Grafico consultas={consultar} profissionais={Profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avalicao profissionais={Profissionais} />
      </CotainerCustom>
      <Rodape/>
    </>
  );
}

export default App;
