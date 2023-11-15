import ifood from '../../../assets/ifood.svg'
import phone2 from '../../../assets/phone2.svg'
import * as HoverCard from '@radix-ui/react-hover-card';
import { HoverCards } from './styles';
import ItemsMenu from '../componets/ItemsMenu';

const Promocoes = () => {
  return (
    <>
      <HoverCard.Root openDelay={200} closeDelay={10}>
        <HoverCard.Trigger asChild>
          <li>Promoções</li>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCards>
            <div>
              <ItemsMenu src={ifood} title='Promoções iFood' />
            </div>
            <div>
              <ItemsMenu src={phone2} title='Promoções iFood' />
            </div>
          </HoverCards>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  )
}

export default Promocoes