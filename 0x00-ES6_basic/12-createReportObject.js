export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (let i = 0; i < employeesList.length; i++) {
    const employee = employeesList[i];
    if (!allEmployees[employee.department]) {
      allEmployees[employee.department] = [];
    }
    allEmployees[employee.department].push(employee.name);
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}
