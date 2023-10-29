import Alert from 'react-bootstrap/Alert';
//Se especifica cuales son los props y el tipo de dato que el componente hijo puede recibir
type AlertGeneratorProps = {
    message: string;
  };

//El componente hijo tiene "argumentos" del tipo "AlertGeneratorProps" 
const AlertGenerator = ({message}: AlertGeneratorProps) => {

    return(
        <Alert variant="success" className='mt-2 w-25'>
            <Alert.Heading>Mensaje Recibido:</Alert.Heading>
                <p>
                    {message}
                </p>
        </Alert>
    )
}

export default AlertGenerator;
