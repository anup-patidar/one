const mongoose = require("mongoose");

const url =
    "mongodb://himanshu:sPa2ncQR5yzTN1i8@ac-hv6ztaq-shard-00-00.kr0vwe6.mongodb.net:27017,ac-hv6ztaq-shard-00-01.kr0vwe6.mongodb.net:27017,ac-hv6ztaq-shard-00-02.kr0vwe6.mongodb.net:27017/askaro?ssl=true&replicaSet=atlas-eic1pq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

module.exports.connect = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => console.log("Error: ", error));
};