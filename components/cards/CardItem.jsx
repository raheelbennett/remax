import Image from 'next/image'
import Link from 'next/link'
const CardItem = ({card}) => {

  console.log({card})

  return (
    <div>
<Link href="/cards/[id]" as={`/cards/${card.id}`}>
      <Image     
      src={`/assets/img/card/${card.img_url}`}
 
      width={200}
      height={200}
      />
      {card.name}
      </Link>
  </div>
  )
}

export default CardItem