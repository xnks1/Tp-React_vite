import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  return (
<>
   <Carousel>
      <Carousel.Item interval={1000}>
         <img 
            className="d-block w-100"
            style={{maxHeight: "500px" , objectFit:'cover'}}
            src="https://cdn1.c1rca.com.ar/shop/modules/anthemeblocks/images/64e77c97c300c.jpg"
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
            src="https://cdn2.c1rca.com.ar/shop/modules/anthemeblocks/images/64f8b4a256f0d.jpg"
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
            src="https://cdn3.c1rca.com.ar/shop/modules/anthemeblocks/images/649aedc9e1610.jpg.webp"
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
