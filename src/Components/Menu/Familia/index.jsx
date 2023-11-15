import lancamentosFamila from '../../../assets/lancamentosFamilia.svg'
import compromissoFamilia from '../../../assets/compromissoFamilia.svg'
import mcLanche from '../../../assets/mcLanche.svg'
import box from '../../../assets/box.svg'
import * as HoverCard from '@radix-ui/react-hover-card';
import { HoverCards } from './styles';
import ItemsMenu from '../componets/ItemsMenu';

const Famila = () => {
  return (
    <>
      <HoverCard.Root openDelay={200} closeDelay={10}>
        <HoverCard.Trigger asChild>
          <li>Família</li>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCards>
            <div>
              <ItemsMenu src={lancamentosFamila} title='Lançamentos' />
              <ItemsMenu src={compromissoFamilia} title='Compromissos com as Famílias' />
            </div>

            <div>
              <ItemsMenu src={mcLanche} title='McLancheFeliz' />
            </div>

            <div>
              <ItemsMenu src={box} title='Méqui Box' />
            </div>
          </HoverCards>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  )
}

export default Famila