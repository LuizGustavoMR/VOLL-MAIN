import logo from './assets/logo.png';
import perfil from './assets/perfil.png'

import { CabecalhoHeader, Container, Link } from './styles';

function Cabecalho() {

    return (
        <CabecalhoHeader>
            <img src={logo} alt='Logo Empresa Voll' />
            <Container>
                <img src={perfil} alt='Imagem de perfil do usuario' />
                <Link href="#">
                    Sair
                </Link>
            </Container>
        </CabecalhoHeader>
    )
}

export default Cabecalho;