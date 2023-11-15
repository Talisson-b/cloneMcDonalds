import lancamentos from '../../../assets/lancamentos.svg'
import tasty from '../../../assets/tasty.svg'
import mequi1000 from '../../../assets/mequi1000.svg'
import bebidasFrias from '../../../assets/bebidasFrias.svg'
import ofertas from '../../../assets/ofertas.svg'
import brabus from '../../../assets/brabus.svg'
import chicken from '../../../assets/chicken.svg'
import acompanhamentos from '../../../assets/acompanhamentos.svg'
import cafe from '../../../assets/cafe.svg'
import box from '../../../assets/box.svg'
import * as HoverCard from '@radix-ui/react-hover-card';
import { HoverCards } from './styles';
import ItemsMenu from '../componets/ItemsMenu';

const Cardapio = () => {
  return (
    <>
      <HoverCard.Root openDelay={200} closeDelay={10}>
        <HoverCard.Trigger asChild>
          <li>Cardápio</li>
        </HoverCard.Trigger>
        <HoverCard.Portal >
          <HoverCards >
            <div>
              <ItemsMenu src={lancamentos} title='Lançamentos' />
              <ItemsMenu src={tasty} title='Família Tasty' />
              <ItemsMenu src={mequi1000} title='Méqui 1000' />
              <ItemsMenu src={bebidasFrias} title='Bebidas Frias' />
              <ItemsMenu src={ofertas} title='McOferta' />
            </div>

            <div>
              <ItemsMenu src={brabus} title='Brabus do Méqui' />
              <ItemsMenu src={chicken} title='Sanduíches de Frango' />
              <ItemsMenu src={acompanhamentos} title='Acompanhamentos' />
              <ItemsMenu src={cafe} title='Café da Manhã' />
              <ItemsMenu src={box} title='Méqui Box' />
            </div>
            <div>
              <ItemsMenu src={lancamentos} title='Lançamentos' />
              <ItemsMenu src={tasty} title='Família Tasty' />
              <ItemsMenu src={mequi1000} title='Méqui 1000' />
              <ItemsMenu src={bebidasFrias} title='Bebidas Frias' />
              <ItemsMenu src={ofertas} title='McOferta' />
            </div>

          </HoverCards>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  )
}

export default Cardapio