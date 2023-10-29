import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  return (
<>
   <Carousel>
      <Carousel.Item interval={1000}>
         <img 
            className="d-block w-100"
            style={{maxHeight: "500px" , objectFit:'cover'}}
            src="src/assets/images/imgC1.jpg"
            alt="first" 
         
         />




         <Carousel.Caption>
       <h3>First slide label</h3>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
      </Carousel.Item>


    <Carousel.Item interval={500}>
    <img 
            className="d-block w-100"
            style={{maxHeight: "500px" , objectFit:'cover'}}
            src="src/assets/images/imgC2.jpg"
            alt="second" 
         
         />

         <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
    </Carousel.Item>



      <Carousel.Item>
      <img 
            className="d-block w-100"
            style={{maxHeight: "500px" , objectFit:'cover'}}
            src="src/assets/images/imgC3.jpg"
            alt="third" 
         
         />

         
         <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
         </Carousel.Caption>
    </Carousel.Item>
 </Carousel>



</>

  );
};
export default CarouselHome;