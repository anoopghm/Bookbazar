import Navbar from '../Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import FeaturedBooks from '../../Components/FeaturedBooks/FeaturedBooks';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar/>
      <Slider/>
      <FeaturedBooks/>
    </div>
  )
}

export default Home;