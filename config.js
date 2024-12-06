const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "bJ9kASZb#WCwqjlYrIV9_U7z8cg12sQ15xK551tF-wr5KcAlVmqo",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/61NN6GJ/b6d8fd95-c7e9-472a-8f0e-2ba9c744b14b.jpg"
};
