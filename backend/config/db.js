const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set('strictQuery', false);
// This line sets the strictQuery option of Mongoose to false, which will allow Mongoose to use non-strict query mode.


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log(`Mongoose connection error: ${err}`);
    } else {
        console.log('Successfully connected to Mongoose!');

        const db = mongoose.connection;

        db.on('disconnected', () => {
            console.log('Mongoose connection disconnected');
        });

        
        process.on('SIGINT', () => {
            // This line sets up a listener for the "SIGINT" event of the Node.js process. When the event is emitted, the callback function will execute and close the connection to Mongoose.
        
            mongoose.connection.close(() => {
                // This line closes the connection to Mongoose.
                console.log('Mongoose connection disconnected through app termination');
                process.exit(0);
                // This line exits the Node.js process with an exit code of 0.
            });
        });
    }
});
