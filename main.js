const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('strings.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });


  for await (const line of rl) {
    
    if (!(line.startsWith('<!--') || line === "")) {

        const elements = line.split(" => ");

        const key = "\"" + elements[0] + "\"";

        const value = "\"" + elements[1] + "\"";

        // console.log(key + " = " + value);

        let output = key + " = " + value + ";\n";

        fs.writeFileSync("output.txt", output,
            {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            }
        );

    } else if (line.startsWith('<!--')) {

        const output = "\n// " + line + "\n";

        fs.writeFileSync("output.txt", output,
            {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            }
        );
    }
    
  }
}

processLineByLine();