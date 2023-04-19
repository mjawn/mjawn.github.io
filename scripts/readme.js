const fs = require("fs");

fs.copyFile("dist/readme.md", "readme.md", (err) => {
    if (err) throw err;
});
