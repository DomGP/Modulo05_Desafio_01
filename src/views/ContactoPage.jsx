import TextField from '@mui/material/TextField';

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
        </div>
    )
}

export default ContactoPage