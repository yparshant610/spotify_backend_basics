const moongose = require('mongoose')

async function connectDB() {
    try {
        await moongose.connect(process.env.MONGO_URI)

        console.log('Database connected successfully');
        
    } catch (error) {
        console.log('Database connection error: ', error);
    }
}

module.exports = connectDB