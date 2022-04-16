import express  from "express";
import config from "./config/defualt"
import log from "./logger";
import connection from "./db/db";

const port = config.port as number;
const host = config.host as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`);
    connection();
})
 