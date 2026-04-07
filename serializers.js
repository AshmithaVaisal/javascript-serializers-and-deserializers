import fs from 'fs'
const employee = {
    "empName":"rajesh",
    "empId":102,
    "phone": {
        "mobile":7418412242,
        "landline":978990393
    },
    "skills":["manual testing","automation testing","coding"]

}

// SERIALIZE OBJECT INTO JSON STRING
const jsonData = JSON.stringify(employee,null,4)

fs.writeFileSync('emp2.json',jsonData)
console.log("json file created successfully")