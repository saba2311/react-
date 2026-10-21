import ListGroup from "react-bootstrap/ListGroup";

function RBListGroup() {
  const socialMedia = [
    {
      name: "Facebook",
      percentage: "20%",
      icon: "bi-facebook",
    },
    {
      name: "Instagram",
      percentage: "20%",
      icon: "bi-instagram",
    },
    {
      name: "YouTube",
      percentage: "20%",
      icon: "bi-youtube",
    },
    {
      name: "TwitterX",
      percentage: "20%",
      icon: "bi-twitter-x",
    },
    {
      name: "LinkedIn",
      percentage: "20%",
      icon: "bi-linkedin",
    },
  ];

  return (
    <div className="component-page">
      <h1 className="component-title">List Group</h1>
      
      <div className="social-card p-3 border rounded">
        <h2 className="mb-3">Social Media Traffic</h2>
        
        <ListGroup variant="flush">
          {socialMedia.map((social, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center traffic-item py-2"
            >
              <div className="d-flex align-items-center traffic-info">
                <i className={`bi ${social.icon} traffic-icon fs-5 me-2`}></i>
                <span className="traffic-platform-name">{social.name}</span>
              </div>
              <span className="social-percentage">{social.percentage}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default RBListGroup;



