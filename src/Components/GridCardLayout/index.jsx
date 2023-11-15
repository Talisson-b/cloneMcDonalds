import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.svg'
import card3 from '../../assets/card3.svg'
import card4 from '../../assets/card4.svg'
import card5 from '../../assets/card5.svg'
import card6 from '../../assets/card6.svg'
import card7 from '../../assets/card7.svg'
import card8 from '../../assets/card8.svg'
import card9 from '../../assets/card9.svg'
import card10 from '../../assets/card10.svg'
import card11 from '../../assets/card11.svg'
import card12 from '../../assets/card12.svg'
import card13 from '../../assets/card13.svg'
import card14 from '../../assets/card14.svg'
import Card from "../Card"
import { GridContainerLayout, GridContainerLayout1 } from './styles'

const GridCardLayout = () => {
  return (
    <>
      <GridContainerLayout>
        <div>
          <Card title='Todo mundo se dá bem na Méqui Friday' src={card1} description='A Méqui Friday começou e são ofertas imperdíveis. Corre pro App' titleButton='Baixe o app' />

          <Card title='McCrispy Chicken Elite.' src={card2} description='Sabia que chegou um sabor no Méqui que é todo cheio de enigmas???? Ele é doce, mas também é suavemente picante. Crocante, mas também é suculento. Tem sentido isso?? Descubra provando o novo McCrispy Chicken Elite.' titleButton='Peça agora e descubra.' />

          <Card title='Chegou o novo Brabo Empanado de Queijo Minas. ' src={card3} description='A maior carne do Méqui, cebola crispy, Méquinese e um empanado de queijo minas crocante, derretendo por dentro.  ' titleButton='Peça o seu.' />

          <Card title='Celebrando a magia da Disney no McLanche Feliz' src={card4} description='Os seus personagens favoritos da Disney chegaram no Méqui pra encantar toda família.' titleButton='Vamos nessa?' />

          <Card title='Menos fila, mais Méqui' src={card5} description='Se você não gosta de fila, então pega essa.' titleButton='Consulte Restaurantes' />

          <Card title='Méqui da Madruga' src={card6} description='Quer saber quais os restaurantes têm Drive 24H pra matar sua fome da madrugada?' titleButton='Clique aqui.' />
        </div>


        <div>
          <Card title='Meu Méqui' src={card7} description='Chegou o programa de fidelidade do Méqui! A cada R$1 gasto, você ganha 100 pontos. É Méqui que vira ponto, que vira mais Méqui!  ' titleButton='Saiba Mais' />


          <Card title='Atenção! Se olhar pro McFlurry não vai ter mais jeito, vai ter que provar.' src={card8} description='O McFlurry Kit Kat com o Leite em Pó mais querido do Brasil chegou com tudo no Méqui pra matar a sua fome geladinha.' titleButton='Experimente' />


          <Card title='O novo sabor inesquecível' src={card9} description='Frango suculento, bacon crocante, pão fofinho, cebola crispy e o molho do CBO. Experimente o novo McCrispy Chicken Legend.' titleButton='Prove agora' />

          <Card title='Use Méqui' src={card10} description='Conheça aqui todas as novidades e a linha completa de roupas e acessórios do Méqui.' titleButton='Saiba mais.' />

          <Card title='Já add o Méqui Zap?' src={card11} description='Aquele contato do whatsapp que nunca te deixa no vácuo e sempre manda promoção boa é o nosso.' titleButton='Clique aqui' />
        </div>
      </GridContainerLayout>

      <GridContainerLayout1>
        <div>
          <Card title='Que tal um #MéquiNoSofá?' src={card12} description='Faça agora seu pedido e receba em casa pelo delivery.' titleButton='Clique aqui' />
        </div>
        <div>

          <Card title='Confira as medidas que o Méqui adotou!' src={card13} description='Juntos, vamos sair dessa ainda mais fortes, preparados e unidos.' titleButton='Clique aqui' />
        </div>
        <div>

          <Card title='Encontre o Méqui mais próximo de vc' src={card14} description='Deixamos ainda mais fácil! Ative sua geolocalização e mostraremos o restaurante McDonalds mais próximo de você.' titleButton='Clique aqui' />
        </div>
      </GridContainerLayout1>
    </>
  )
}

export default GridCardLayout