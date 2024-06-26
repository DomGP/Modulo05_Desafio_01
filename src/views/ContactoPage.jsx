import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ContactoPage = () => {
    return (
        <div className="contactoStyle">
            <h2>¿Cuentanos, ¿En que podemos ayudar?</h2>
            <TextField 
                label="Correo" 
                type='email' 
                variant="outlined" 
                placeholder='name@example.com'
                sx={{mt:3, width:'50%'}}/>
            <TextField
                id="outlined-multiline-static"
                label="Descripción"
                multiline
                placeholder='Escribe un texto...'
                rows={4}
                sx={{mt:5, width:'50%'}}/>
            <Button 
                variant="contained"
                color='error'
                sx={{
                    mt:3,
                    pl:6,
                    pr:6}}>
                <Link
                    to='*'
                    className='text-white text-decoration-none'>Enviar</Link>
            </Button>
        </div>
    )
}

export default ContactoPage