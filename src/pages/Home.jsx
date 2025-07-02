import { Carousel} from 'react-bootstrap'
const Home = () => {
    return ( 
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="Perrito" />
                </Carousel.Item>
            </Carousel>
        </div>
     );
}
 
export default Home;