const app = require('.'); 
const { connectDb } = require('./config/db');

const PORT = 8080;


app.get('/', (req, res) => {
    res.send("WELCOME TO COMNET");
});

app.listen(PORT, async () => {
    try {
        await connectDb();
        console.log("Connected to MongoDB");
        console.log("Server listening on PORT:", PORT);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); 
    }
});
