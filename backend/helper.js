import fs from "fs";


function read() {
    try {
        const data = fs.readFileSync("./db.json", 'utf8');
        const parsedData = JSON.parse(data);
        return parsedData;
    } catch (err) {
        throw new Error("Error reading file: ", err)
    }
}


function write(data) {
    try {
        const jsonString = JSON.stringify(data);
        fs.writeFileSync('./db.json', jsonString, 'utf8');
        return;
    } catch (error) {
        throw new Error('This is Error:', error)
    }
}


export default { read, write }