const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");
const watchlistDataFile = "watchlist.json";

// function to read data from json file
function readWatchlistData() {
    try {
        const data = fs.readFileSync(watchlistDataFile, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// function to write data to the json file
function writeWatchlistData(watchlist) {
    const data = JSON.stringify(watchlist, null, 2);
    fs.writeFileSync(watchlistDataFile, data);
}

// get
exports.find = (req, res) => {
    const watchlist = readWatchlistData();

    res.json(watchlist);
};

// post
exports.create = (req, res) => {
    const watchlist = readWatchlistData();
    const newData = req.body;
    console.log(newData);

    // newData.id = uuidv4();
    watchlist.push(newData);
    writeWatchlistData(watchlist);

    res
        .status(201)
        .json({ message: "watchlist created succesfully", data: newData });
};

// delete
exports.delete = (req, res) => {
    const watchlist = readWatchlistData();
    const dataIndex = watchlist.findIndex((emp) => emp.id === req.params.id);

    if (dataIndex === -1) {
        res.status(400).json({ error: "movie not found" });
    } else {
        watchlist.splice(dataIndex, 1);
        writeWatchlistData(watchlist);
        res.json({ message: "movie deleted successfully", id: req.params.id });
    }
};
