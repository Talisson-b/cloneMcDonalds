import logo from '../../assets/logo.svg'
import phone1 from '../../assets/phone1.svg'
import phone2 from '../../assets/phone2.svg'
import Cardapio from '../Menu/Cardapio';
import Famila from '../Menu/Familia';
import Lancamentos from '../Menu/Lancamentos';
import McDiaFeliz from '../Menu/McDiaFeliz';
import MequiParaVoce from '../Menu/MequiParaVoce';
import Promocoes from '../Menu/Promocoes';
import QuemSomos from '../Menu/QuemSomos';
import { ButtonLeft, ButtonRight, HeaderContainer, NavInfos, NavMenu } from './styles'
const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <nav>
          <NavInfos>
            <li>Trabalhe Conosco</li>
            <li>FALE COM O MÉQUI</li>
            <li>Méqui mais Próximo</li>
          </NavInfos>
          <div>
            <ButtonLeft><img src={phone1} alt="" />Baixe o App</ButtonLeft>

            <ButtonRight> <img src={phone2} alt="" />Peça seu Méqui</ButtonRight>
          </div>
        </nav>
        <nav>
          <NavMenu>
            <Cardapio />
            <Lancamentos />
            <QuemSomos />
            <Famila />
            <Promocoes />
            <MequiParaVoce />
            <McDiaFeliz />
          </NavMenu>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header