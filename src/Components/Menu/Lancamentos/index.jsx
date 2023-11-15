
import * as HoverCard from '@radix-ui/react-hover-card';

const Lancamentos = () => {
  return (
    <>
      <HoverCard.Root openDelay={10}>
        <HoverCard.Trigger asChild>
          <li>Lançamentos</li>
        </HoverCard.Trigger>
        <HoverCard.Portal>
        </HoverCard.Portal>
      </HoverCard.Root>
    </>
  )
}

export default Lancamentos