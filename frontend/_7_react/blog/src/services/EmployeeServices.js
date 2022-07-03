import axios from "axios";

//sabit bir URL değişkeni 
const EMLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";


//Employee Class
class EmployeeServices {

//SAVE (@PostMapping)
//SAVE (@PostMapping)
// http://localhost:8080/api/v1/employees
// @PostMapping("/employees")
// public EmployeeDto createEmployee(@RequestBody EmployeeDto employeeDto) {}
createEmployees(employee) {
    return axios.post(EMLOYEE_API_BASE_URL,employee);
}

//LIST (@GetMapping)
//http://localhost:8080/api/v1/employees
//@GetMapping("/employees")
//public List<EmployeeDto> getAllEmployees() {}
getEmployees(){
   return  axios.get(EMLOYEE_API_BASE_URL);
}


//FIND (@GetMapping)
// http://localhost:8080/api/v1/employees/2
// @GetMapping("/employees/{id}")
// public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable(name = "id") Long id) {}
getEmployeeById(employeeId){
    return axios.get(EMLOYEE_API_BASE_URL+"/"+employeeId)
}


//UPDATE (@PutMapping)
//http://localhost:8080/api/v1/employees/2
//@PutMapping("/employees/{id}")
//public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable(name = "id") Long id, @RequestBody)EmployeeDto employeeDto) {}
updateEmployee(employeeId,employee){
    return axios.put(EMLOYEE_API_BASE_URL+"/"+employeeId,employee);
}


//DELETE (@DeleteMapping)
//http://localhost:8080/api/v1/employees/2
//@DeleteMapping("/employees/{id}")
//public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable(name = "id") Long id) {}
deleteEmployee(employeeId){
    return axios.delete(EMLOYEE_API_BASE_URL+"/"+employeeId)
}

}
export default new EmployeeServices()

//Package.json
// "dependencies": {
//     "@testing-library/jest-dom": "^5.16.4",
//     "@testing-library/react": "^13.3.0",
//     "@testing-library/user-event": "^13.5.0",
//     "axios": "^0.27.2",
//     "bootstrap": "^5.1.3",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-router-dom": "^6.3.0",
//     "react-scripts": "5.0.1",
//     "web-vitals": "^2.1.4"
//   }

//npm i