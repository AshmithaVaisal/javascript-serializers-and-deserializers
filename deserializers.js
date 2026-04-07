const employee = {
    "empName":"ashmitha",
    "empId":101,
    "phone": {
        "mobile":8526626252,
        "landline":25636252563
    },
    "skills":["manual testing","automation testing","coding"]

}

const employeejson = JSON.stringify(employee) //serialize
const employeeobj = JSON.parse(employeejson) //deserializing

console.log(employeeobj.phone.mobile)

if (employee.skills.includes("manual testing")){
    console.log("employee has skills")
}else{     
    console.log("No skills found")
}

import employee from './employee.json' with {type: 'json'}
console.log(employee.empName)



