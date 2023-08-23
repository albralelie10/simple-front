import { useFetchCards } from '../api/useFetchCards'

export const CardItem = (props) => {
  const {deleteCards}=useFetchCards()
  const {title,author,_id}=props
  return (
    <div className='col'>
      <div className='card'>
        <div className="card-image">
            <div className='text-center ' >
            <div className='spinner-border ' style={{width:"4rem",height:"4rem"}}>
              <span className='visually-hidden'></span>
            </div>
            </div>
        </div>
      <div className='card-header'>
        <div className='card-title'>
          <div className='d-flex justify-content-space-around '>
            <span className='me-auto'><b>Titulo:</b>{title}</span>
            <span><b>Autor:</b>{author}</span>
          </div>
        </div>
      </div>
      <div className='card-body'>
          <button 
          onClick={()=>deleteCards(_id)}
          className='w-100 btn btn-danger m-3'>Remove Card</button>
      </div>
      </div>
    </div>
  )
}
