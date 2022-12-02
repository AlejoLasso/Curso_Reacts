import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carusel from './components/Carusel/Carusel';
import CardWidget from './components/CardWidget/CardWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Card from './components/Card/Card';

const cards =[
  {
    titulo:"Jojos Tomo 1",
    precio:"$1800",
    descripcion:"Manga de ivrea de 48 tomos",
    img:"https://images.cdn2.buscalibre.com/fit-in/360x360/67/75/6775ee453d23f7caf0db20e0563d1aa7.jpg",
    btnText:"Ver Mas",
  },  
  {
    titulo:"Funko Deadpool",
    precio:"$4500",
    descripcion:"Funko de deadpool marvel",
    img:"https://http2.mlstatic.com/D_NQ_NP_966960-MLA40284492285_122019-O.jpg",
    btnText:"Ver Mas",
  },  
  {
    titulo:"Taza",
    precio:"$1000",
    descripcion:"Taza de anime fotos a eleccion",
    img:"https://http2.mlstatic.com/D_NQ_NP_812324-MLA25982398487_092017-O.jpg",
    btnText:"Ver Mas",
  },  
  {
    titulo:"Figura Naruto",
    precio:"$12.000",
    descripcion:"Figuras de Kakashi, serie Naruto",
    img:"https://http2.mlstatic.com/D_NQ_NP_861544-MLA49999516987_052022-O.jpg",
    btnText:"Ver Mas",
  }
  
]



function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Este es un mensaje de ItemListContainer' />  
      {cards.map(({titulo,descripcion,precio,img,btnText},index)=> 
      <Card 
      key={index}
      titulo={titulo}
      descripcion={descripcion}
      precio={precio}
      img={img}
      btnText={btnText}
      />)}
    </div>
  );
}

export default App;
