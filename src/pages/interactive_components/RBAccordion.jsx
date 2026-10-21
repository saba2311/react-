import { Fragment, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

function CustomToggle({ children, eventKey }) {
    const { activeEventKey } = useContext(AccordionContext);
    const toggleAccordion = useAccordionButton(eventKey);
    const isActive = activeEventKey === eventKey;

    return (
        <Fragment>
            <div
                onClick={toggleAccordion}
                className={`d-flex justify-content-between align-items-center py-3 ${
                    isActive ? "text-primary" : "text-dark"
                }`}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleAccordion(event);
                    }
                }}
            >
                <span className="fw-semibold">{children}</span>

                {isActive ? <DashCircle /> : <PlusCircle />}
            </div>
        </Fragment>
    );
}

function RBAccordion() {
    const questions = [
        {
            eventKey: "0",
            title: "What is the cost of an online course?",
            answer:
                "The cost of an online course depends on the course and its duration. Please check the course details for the exact fee."
        },
        {
            eventKey: "1",
            title: "Do I need to visit any physical location?",
            answer:
                "No, you can access the course online from anywhere with a suitable internet connection."
        },
        {
            eventKey: "2",
            title: "What are the technology requirements?",
            answer:
                "You need a computer or mobile device, an internet connection, and a supported web browser."
        },
        {
            eventKey: "3",
            title: "How can I ask questions or clear doubts?",
            answer:
                "You can ask questions through the course discussion forum or contact your instructor."
        }
    ];

    return (
        <div className="container-fluid p-3">
            <h2 className="fw-bold mb-4">Accordion</h2>

            <Accordion defaultActiveKey="0">
                {questions.map((item) => (
                    <Card
                        key={item.eventKey}
                        className="border-0 border-bottom rounded-0"
                    >
                        <Card.Header className="bg-white border-0 px-3">
                            <CustomToggle eventKey={item.eventKey}>
                                {item.title}
                            </CustomToggle>
                        </Card.Header>

                        <Accordion.Collapse eventKey={item.eventKey}>
                            <Card.Body className="px-3 pt-0 pb-3 text-secondary">
                                {item.answer}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </div>
    );
}

export default RBAccordion;