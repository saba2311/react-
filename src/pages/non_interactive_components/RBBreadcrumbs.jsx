import Breadcrumb from "react-bootstrap/Breadcrumb";

function RBBreadcrumbs() {
  return (
    <div className="component-page">
      <h1 className="component-title">Breadcrumbs</h1>
      <div className="breadcrumb-additional">
        <Breadcrumb>
          <Breadcrumb.Item href="#" title="This is Assignments">
            <i className="bi bi-folder-fill text-warning me-1"></i>
            <span>Assignments</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item href="#" title="This is Project">
            <i className="bi bi-folder-fill text-warning me-1"></i>
            <span>Project</span>
          </Breadcrumb.Item>

          <Breadcrumb.Item active title="This is TodoList">
            <i className="bi bi-code text-primary me-1"></i>
            <span>TodoList</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default RBBreadcrumbs;



