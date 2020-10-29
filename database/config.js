const mongoose = require('mongoose');

const dbConnnection  = async () => {
    
    try {
        
        await mongoose.connect( process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true
        });
        console.log('Conexión exitosa');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }

}
module.exports = {
    dbConnnection
}