import logoFooter from '../../assets/logoFooter.svg'
import appStore from '../../assets/appStore.svg'
import googlePlay from '../../assets/googlePlay.svg'
import hoverFooter from '../../assets/hoverFooter.svg'
import logo from '../../assets/mcFooter.svg'
import { CiFacebook, CiTwitter, CiInstagram, CiYoutube } from "react-icons/ci";
import { FooterContainer, GridFooter, HoverFooter, SocialContainer, TermosContainer } from "./styles"


const Footer = () => {
  return (
    <>
      <FooterContainer>
        <header>
          <img src={logoFooter} alt="" />
          <div>
            <h3>Já baixou o nosso App?</h3>
            <p>Peça seu delivery, veja o menu, baixe stickers, peça e retire, encontre os restaurantes mais próximos, tenha todos os cupons e muito mais</p>
          </div>
        </header>

      </FooterContainer>
      <HoverFooter>
        <img src={hoverFooter} alt="" />
      </HoverFooter>
      <GridFooter>
        <ul>
          <h4>Quem Somos</h4>
          <li>Instucional</li>
          <li>Franquias</li>
          <li>Trabalhe Conosco</li>
          <li>Privacidade</li>
          <li>Desenvolvimento Sustentável e Compromisso Social</li>
          <li>Portas Abertas</li>
          <li>Publicidade Responsável</li>
        </ul>
        <ul>
          <h4>Família</h4>
          <li>Lançamentos</li>
          <li>McLancheFeliz</li>
          <li>Méqui Box</li>
          <li>Compromisso com as Famílias</li>
        </ul>
        <ul>
          <h4>Méqui pra você</h4>
          <li>App do Méqui</li>
          <li>McDelivery</li>
          <li>Méqui no iFood</li>
          <li>Peça e Retire</li>
          <li>Gift Card</li>
          <li>Méqui Zap</li>
          <li>Drive-Thru</li>
          <li>Use Méqui</li>
        </ul>
        <ul>
          <h4>Méqui pra você</h4>
          <li>Contato</li>
        </ul>
      </GridFooter>
      <SocialContainer>
        <div>
          <CiFacebook size={32} color='#6f6f6f' />
          <CiTwitter size={32} color='#6f6f6f' />
          <CiInstagram size={32} color='#6f6f6f' />
          <CiYoutube size={32} color='#6f6f6f' />
        </div>
        <div>
          <img src={googlePlay} alt="" />
          <img src={appStore} alt="" />
        </div>
      </SocialContainer>
      <TermosContainer>
        <div>
          <p>Privacidade</p>
          <p>Termos e Condições</p>
        </div>
        <p><img src={logo} alt="" /> © McDonald's 2023</p>
      </TermosContainer>
    </>
  )
}

export default Footer