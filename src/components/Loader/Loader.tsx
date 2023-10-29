
import Spinner from 'react-bootstrap/Spinner';
const Loader = () => {
  return (
    <>
        <div className="loader">
             <Spinner animation="border" role="status" variant='info' className='loader-spinner'>
             </Spinner>
        </div>
    </>

  )
}
export default Loader;
