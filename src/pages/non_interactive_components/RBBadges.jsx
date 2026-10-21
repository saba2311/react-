import { Badge, Table } from "react-bootstrap";

function RBBadges() {
  const employees = [
    {
      name: "Joseph Oden",
      department: "Sales",
      icon: "bi bi-cart",
      salary: "$64,000",
      date: "Aug 3, 2024",
      status: "PENDING",
      statusColor: "primary",
      employment: "Full-Time",
    },
    {
      name: "Carol Brown",
      department: "Support",
      icon: "bi bi-telephone",
      salary: "$82,000",
      date: "Aug 6, 2024",
      status: "NEGOTIATING",
      statusColor: "orange",
      employment: "Part-Time",
    },
    {
      name: "Peggy Castello",
      department: "Design",
      icon: "bi bi-pen",
      salary: "$120,000",
      date: "Aug 13, 2024",
      status: "FAILED",
      statusColor: "danger",
      employment: "Full-Time",
    },
    {
      name: "Katherine Grey",
      department: "Sales",
      icon: "bi bi-cart",
      salary: "$75,000",
      date: "Aug 19, 2024",
      status: "PAID",
      statusColor: "success",
      employment: "Full-Time",
    },
    {
      name: "Sandra Palace",
      department: "Design",
      icon: "bi bi-pen",
      salary: "$54,000",
      date: "Aug 22, 2024",
      status: "PENDING",
      statusColor: "primary",
      employment: "Contractor",
    },
    {
      name: "Nelson Metz",
      department: "Sales",
      icon: "bi bi-cart",
      salary: "$28,000",
      date: "Aug 27, 2024",
      status: "OVERDUE",
      statusColor: "purple",
      employment: "Part-Time",
    },
    {
      name: "Roger Ryder",
      department: "Sales",
      icon: "bi bi-cart",
      salary: "$93,000",
      date: "Aug 31, 2024",
      status: "PAID",
      statusColor: "success",
      employment: "Contractor",
    },
    {
      name: "Evan Walter",
      department: "Support",
      icon: "bi bi-telephone",
      salary: "$55,000",
      date: "Sep 5, 2024",
      status: "NEGOTIATING",
      statusColor: "orange",
      employment: "Full-Time",
    },
    {
      name: "Julien Saint",
      department: "Design",
      icon: "bi bi-pen",
      salary: "$87,000",
      date: "Sep 11, 2024",
      status: "OVERDUE",
      statusColor: "purple",
      employment: "Full-Time",
    },
  ];

  return (
    <div className="component-page">
      <h1 className="component-title">Badges</h1>

      <div className="badge-table-wrapper">
        <Table
          responsive
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
                <td>
                  <strong>{employee.name}</strong>
                </td>

                <td>
                  <i className={`${employee.icon} department-icon`}></i>
                  {employee.department}
                </td>

                <td>{employee.salary}</td>

                <td>{employee.date}</td>

                <td>
                  <Badge
                    bg=" "
                    className={`status-badge ${employee.statusColor}`}
                  >
                    {employee.status}
                  </Badge>
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

export default RBBadges;