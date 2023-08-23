import { useFetchCards } from '../api/useFetchCards'
import { CardItem } from '../components/CardItem'
export const Cards = () => {  
  const {cards}=useFetchCards()
  if(cards){
    return (
      <div className='container'>
        <div className='row-cols-1-sm row-cols-2-md row-cols-3-lg'>
            {cards?.map(item=><CardItem {...item} key={item._id}/>)}
        </div>
      </div>
    )
  }
}
