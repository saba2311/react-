import Table from "react-bootstrap/Table";

function RBTables() {
  const employees = [
    {
      name: "Joseph Oden",
      department: "Sales",
      icon: "bi bi-cart",
      salary: "$64,000",
      date: "Aug 3, 2024",
      payment: "PENDING",
      paymentClass: "primary",
      employment: "Full-Time",
    },
    {
      name: "Carol Brown",
      department: "Support",
      icon: "bi bi-telephone",
      salary: "$82,000",
      date: "Aug 6, 2024",
      payment: "NEGOTIATING",
      paymentClass:"orange",
      employment: "Part-Time",
    },
    {
      name: "Peggy Castello",
      department: "Design",
      icon: "bi bi-pen",
      salary: "$120,000",
      date: "Aug 13, 2024",
      payment: "FAILED",
      paymentClass: "danger",
      employment: "Full-Time",
    },
    {
      name: "Katherine Grey",
      department: "Sales",
      icon: "bi bi-cart",
      salary: "$75,000",
      date: "Aug 19, 2024",
      payment: "PAID",
      paymentClass: "success",
      employment: "Full-Time",
    },
    {
      name: "Sandra Palace",
      department: "Design",
      icon: "bi bi-pen",
      salary: "$54,000",
      date: "Aug 22, 2024",
      payment: "PENDING",
      paymentClass: "primary",
      employment: "Contractor",
    },
    {
      name: "Nelson Metz",
      department: "Sales",
      icon: "bi bi-cart",
      salary: "$28,000",
      date: "Aug 27, 2024",
      payment: "OVERDUE",
      paymentClass: "purple",
      employment: "Part-Time",
    },
    {
      name: "Roger Ryder",
      department: "Sales",
      icon: "bi bi-cart",
      salary: "$93,000",
      date: "Aug 31, 2024",
      payment: "PAID",
      paymentClass: "success",
      employment: "Contractor",
    },
    {
      name: "Evan Walter",
      department: "Support",
      icon: "bi bi-telephone",
      salary: "$55,000",
      date: "Sep 5, 2024",
      payment: "NEGOTIATING",
      paymentClass: "orange",
      employment: "Full-Time",
    },
    {
      name: "Julien Saint",
      department: "Design",
      icon: "bi bi-pen",
      salary: "$87,000",
      date: "Sep 11, 2024",
      payment: "OVERDUE",
      paymentClass: "purple",
      employment: "Full-Time",
    },
   
  ];

  return (
    <div className="component-page">
      <h1 className="component-title">Tables</h1>

      {/* Non Responsive Table */}

      <div className="table-section">
        <h2>Non Responsive Table</h2>

        <Table
          bordered
          hover
          className="badge-table"
        >
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Payment Date</th>
              <th>Payment Status</th>
              <th>Employment Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className="employee-name">{employee.name}</td>

                 <td>
                  <i className={`${employee.icon} department-icon`}></i>
                  {employee.department}
                </td>


                <td>{employee.department}</td>

                <td>{employee.salary}</td>

                <td>{employee.date}</td>

                <td>
                  <span className={`status-badge ${employee.paymentClass}`}>
                    {employee.payment}
                  </span>
                </td>

                <td>{employee.employment}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Responsive Table */}

      <div className="table-section">
        <h2>Responsive Table</h2>

        <Table
          responsive
          bordered
          hover
          className="badge-table"
        >
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Payment Date</th>
              <th>Payment Status</th>
              <th>Employment Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td className="employee-name">{employee.name}</td>

                 <td>
                  <i className={`${employee.icon} department-icon`}></i>
                  {employee.department}
                </td>


                <td>{employee.department}</td>

                <td>{employee.salary}</td>

                <td>{employee.date}</td>

                <td>
                  <span className={`status-badge ${employee.paymentClass}`}>
                    {employee.payment}
                  </span>
                </td>

                <td>{employee.employment}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default RBTables;