import CardComponent from '../components/CardComponent';
import NavBar from '../components/NavBar';
import image from '../assets/poster2.jpg'
import CardsList from '../components/CardsList';

function MainPage() {
  return (
    <>
      <NavBar />
      <CardsList>
        <CardComponent srcImage={image}/>
        <CardComponent srcImage={image}/>
        <CardComponent srcImage={image}/>
        <CardComponent srcImage={image}/>
        <CardComponent srcImage={image}/>
      </CardsList>
    </>
  );
}

export default MainPage;