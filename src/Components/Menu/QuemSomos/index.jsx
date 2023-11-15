import institucional from '../../../assets/institucional.svg'
import privacidade from '../../../assets/privacidade.svg'
import franquias from '../../../assets/franquias.svg'
import compromisso from '../../../assets/compromisso.svg'
import trabalheConosco from '../../../assets/trabalheConosco.svg'
import publicidade from '../../../assets/publicidade.svg'
import * as HoverCard from '@radix-ui/react-hover-card';
import { HoverCards } from './styles';
import ItemsMenu from '../componets/ItemsMenu';

const QuemSomos = () => {
  return (
    <>
      <HoverCard.Root openDelay={200} closeDelay={10}>
        <HoverCard.Trigger asChild>
          <li>Quem Somos</li>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCards>
            <div>
              <ItemsMenu src={institucional} title="Institucional" />
              <ItemsMenu src={privacidade} title="Privacidade" />
            </div>

            <div>
              <ItemsMenu src={franquias} title="Franquias" />
              <ItemsMenu src={compromisso} title="Desenvolvimento Sustentável e Compromisso Social" />
            </div>

            <div>
              <ItemsMenu src={trabalheConosco} title="Trabalhe Conosco" />
              <ItemsMenu src={publicidade} title="Publicidade Responsável" />
            </div>
          </HoverCards>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  )
}

export default QuemSomos