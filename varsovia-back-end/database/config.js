const mongoose = require('mongoose');


const dbConection = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log(`Base de datos online`.green);

    } catch (error) {
        console.log(error);
        throw new Error(`Error a la hora de iniciar la base de datos,  Conectalo a mongoose`.red);
    }


}


module.exports = {
    dbConection
}
