import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";

function RBNavTabs() {


    return (
        <div className="container-fluid p-4">
            <h2 className="fw-bold mb-4">Navs and Tabs</h2>

            <Tab.Container defaultActiveKey="overview">

                {/* Navs */}
                <Nav
                    variant="underline"
                    defaultActiveKey="overview"
                    className="border-bottom border-secondary-subtle mb-3"
                >
                    <Nav.Item>
                        <Nav.Link eventKey="overview">Overview</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="scope">Project Scope</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="team">Team Members</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="tasks">Tasks</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="chat">Chat</Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* Tabs Content */}
                <Tab.Content>
                    <Tab.Pane eventKey="overview">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Donec purus tellus,
                            ultricies quis orci ac, volutpat rhoncus lacus.
                            Sed tempor arcu vitae neque mollis rutrum a
                            odio. Donec sit amet ex in est dictum
                            imperdiet.
                        </p>

                        <Table borderless className="mb-0">
                            <tbody>
                                <tr className="border-bottom">
                                    <td>
                                        <i className="bi bi-calendar-event text-primary me-2"></i>
                                        <strong>Start Date</strong>
                                    </td>
                                    <td className="text-end">
                                        01 Jul, 2025
                                    </td>
                                </tr>

                                <tr className="border-bottom">
                                    <td>
                                        <i className="bi bi-calendar-event text-primary me-2"></i>
                                        <strong>End Date</strong>
                                    </td>
                                    <td className="text-end">
                                        31 Dec, 2025
                                    </td>
                                </tr>

                                <tr className="border-bottom">
                                    <td>
                                        <i className="bi bi-clock text-primary me-2"></i>
                                        <strong>Estimate Time</strong>
                                    </td>
                                    <td className="text-end">
                                        5 Months
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <i className="bi bi-currency-rupee text-primary me-2"></i>
                                        <strong>Estimate Cost</strong>
                                    </td>
                                    <td className="text-end">
                                        ₹ 5,80,000
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab.Pane>

                    <Tab.Pane eventKey="scope">
                        <h5>Project Scope</h5>
                        <p>
                            This project includes planning, development,
                            testing.
                        </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="team">
                        <h5>Team Members</h5>
                        <p>
                            Backend Developer, UI Designer, Frontend
                            Developer..
                        </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="tasks">
                        <h5>Tasks</h5>
                        <ul>
                            <li>Project planning</li>
                            <li>UI development</li>
                            <li>Application testing</li>
                            <li>Final deployment</li>
                        </ul>
                    </Tab.Pane>

                    <Tab.Pane eventKey="chat">
                        <h5>Chat</h5>
                        <p>
                            Team discussions and project updates .
                          
                        </p>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}

export default RBNavTabs;