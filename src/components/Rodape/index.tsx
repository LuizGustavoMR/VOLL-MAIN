import Facebook from './assets/facebook.png';
import Google from './assets/google.png';
import Instagram from './assets/instagram.png';
import WhatsApp from './assets/whatsapp.png';
import { Footer, ListRodape, RodapeUl } from './styles';

function Rodape() {

    return (
        <Footer>
            <RodapeUl>
                <ListRodape>
                    <a href=''>
                        <img src={Facebook} alt='Facebook' />
                    </a>
                </ListRodape>
                <ListRodape>
                    <a href=''>
                        <img src={Google} alt='Google' />
                    </a>
                </ListRodape>
                <ListRodape>
                    <a href=''>
                        <img src={Instagram} alt='Instagram' />
                    </a>
                </ListRodape>
                <ListRodape>
                    <a href=''>
                        <img src={WhatsApp} alt='WhatsApp' />
                    </a>
                </ListRodape>
            </RodapeUl>
            <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
        </Footer>
    )

}

export default Rodape;