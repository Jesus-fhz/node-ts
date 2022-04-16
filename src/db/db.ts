import mongoose, { ConnectOptions } from "mongoose";
import config from "../config/defualt";
import log from "../logger";

const connection = async () => {
    // const db = mongoose.connect(`${config.db}`, {useNewUrlParser: true} as ConnectOptions)
    //            .then(()=> log.info("Connection established"))
    //            .catch((err)=> {
    //                log.info(err)
    //                 process.exit(1);
    //             });
    // return db;
    try {
        const db = await mongoose.connect(`${config.db}`, {useNewUrlParser: true} as ConnectOptions)
        log.info("Connection established")
        return db;
    } catch (error) {
        log.info(error)
    }

}


export default connection;