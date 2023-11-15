import causa from '../../../assets/causa.svg'
import contato from '../../../assets/contato.svg'
import participe from '../../../assets/participe.svg'
import receitaFuturo from '../../../assets/receitaFuturo.svg'
import regulamento from '../../../assets/regulamento.svg'
import * as HoverCard from '@radix-ui/react-hover-card';
import { HoverCards } from './styles';
import ItemsMenu from '../componets/ItemsMenu';

const McDiaFeliz = () => {
  return (
    <>
      <HoverCard.Root openDelay={200} closeDelay={10}>
        <HoverCard.Trigger asChild>
          <li>McDia Feliz</li>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCards>
            <div>
              <ItemsMenu src={causa} title='Sobre a causa' />
              <ItemsMenu src={contato} title='Contato' />
            </div>

            <div>
              <ItemsMenu src={participe} title='Participe' />
              <ItemsMenu src={receitaFuturo} title='Receita do Futuro' />
            </div>

            <div>
              <ItemsMenu src={regulamento} title='Regulamento e Restaurantes Participantes' />
            </div>
          </HoverCards>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  )
}

export default McDiaFeliz