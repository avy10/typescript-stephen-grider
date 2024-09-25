"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var URL = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(URL).then(function (res) {
    var todo = res.data;
    var ID = todo.ID, title = todo.title, finished = todo.finished;
    console.log("\n        The Todo with ID : ".concat(ID, "\n        Has a title of: ").concat(title, "\n        Is it finished? ").concat(finished));
});
