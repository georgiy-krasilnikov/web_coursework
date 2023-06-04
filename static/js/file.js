const fs = require("fs");

function SendForm(filename) {
  const separator = ";";
  
//   alert(email);
//   let body = { id: id, name: name, email: email };
  alert(body.id);
  fs.writeFileSync(
      filename,
      "hello"
    // exampleData
    //   .map((row) => `${row.id}${separator}${row.name}${separator}${row.age}`)
    //   .join("\n")
  );
}
