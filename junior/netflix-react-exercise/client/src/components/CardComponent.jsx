import styled from 'styled-components'

function CardComponent ( srcImage ) {
  return (
    <Card> 
      <Img src={srcImage} alt=''/>
      <Like/>
    </Card>
  )
}

const Card = styled.div`
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,50%);
  color: #fff;
  height: 300px;
  width: 300px;
`

const Img = styled.img`
  height: 300px;
  width: 300px;
`

const Like = styled.div`
  position: absolute;
  max-height: 2rem;
  background-color: red;
`

export default CardComponent;