import meuMequi from '../../../assets/meuMequi.svg'
import mequiIfood from '../../../assets/mequiIfood.svg'
import mequiZap from '../../../assets/mequiZap.svg'
import grafite from '../../../assets/grafite.svg'
import app from '../../../assets/app.svg'
import retire from '../../../assets/retire.svg'
import drive from '../../../assets/drive.svg'
import useMequi from '../../../assets/useMequi.svg'
import delivery from '../../../assets/delivery.svg'
import valeMequi from '../../../assets/valeMequi.svg'
import portasAbertas from '../../../assets/portasAbertas.svg'
import * as HoverCard from '@radix-ui/react-hover-card';
import { HoverCards } from './styles';
import ItemsMenu from '../componets/ItemsMenu';

const MequiParaVoce = () => {
  return (
    <>
      <HoverCard.Root openDelay={200} closeDelay={10}>
        <HoverCard.Trigger asChild>
          <li>Méqui pra Você</li>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCards>
            <div>
              <ItemsMenu src={meuMequi} title='Meu Méqui' />
              <ItemsMenu src={mequiIfood} title='Méqui no iFood' />
              <ItemsMenu src={mequiZap} title='Méqui no Zap' />
              <ItemsMenu src={grafite} title='Projeto Grafite' />
            </div>
            <div>
              <ItemsMenu src={app} title='App do Méqui' />
              <ItemsMenu src={retire} title='Peça e Retire' />
              <ItemsMenu src={drive} title='Drive-Tudo' />
              <ItemsMenu src={useMequi} title='Use Méqui' />
            </div>

            <div>
              <ItemsMenu src={delivery} title='McDelivery' />
              <ItemsMenu src={valeMequi} title='Vale Méqui' />
              <ItemsMenu src={portasAbertas} title='Portas Abertas' />
            </div>
          </HoverCards>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  )
}

export default MequiParaVoce