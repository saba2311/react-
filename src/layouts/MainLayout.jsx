import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Outlet } from "react-router";

function MainLayout() {
  const [openSection, setOpenSection] = useState("null");

  const handleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="app-layout">
      <div className="sidebar">
        <h3 className="sidebar-title">Menu</h3>

        <div className="sidebar-section">
          <div
            className="section-header"
            onClick={() => handleSection("assignment")}
           >
            <span>Assignments</span>

            <i
              className={
                openSection === "assignment"
                  ? "bi bi-chevron-up"
                  : "bi bi-chevron-down"
              }
            ></i>
          </div>

          {openSection === "assignment" && (
            <div className="section-items">
              <Link to="/">
                {/* <i className="bi bi-house"></i> */}
                Home
              </Link>

              <Link to="/static">Static</Link>

              <Link to="/dynamic">Dynamic</Link>

              <Link to="/counter">Counter</Link>

              <Link to="/todo">Todo List</Link>
            </div>
          )}
        </div>

        <div className="sidebar-section">
          <div
            className="section-header"
            onClick={() => handleSection("nonInteractive")}
          >
            <span>Non Interactive Comp.</span>

            <i
              className={
                openSection === "nonInteractive"
                  ? "bi bi-chevron-up"
                  : "bi bi-chevron-down"
              }
            ></i>
          </div>

          {openSection === "nonInteractive" && (
            <div className="section-items">
              <Link to="/badges">Badges</Link>

              <Link to="/breadcrumbs">Breadcrumbs</Link>

              <Link to="/buttons">Buttons</Link>

              <Link to="/button-group">Button Group</Link>

              <Link to="/cards">Cards</Link>

              <Link to="/images">Images</Link>

              <Link to="/list-group">List Group</Link>

              <Link to="/figures">Figures</Link>

              <Link to="/pagination">Pagination</Link>

              <Link to="/progress-bars">Progress Bars</Link>

              <Link to="/spinners">Spinners</Link>

              <Link to="/tables">Tables</Link>
            </div>
          )}
        </div>
          <div className="sidebar-section">

                    <div
                        className="section-header"
                        onClick={() => handleSection("interactive")}
                    >
                        <span>Interactive Comp.</span>

                        <i
                            className={
                                openSection === "interactive"
                                    ? "bi bi-chevron-up"
                                    : "bi bi-chevron-down"
                            }
                        ></i>
                    </div>

                    {openSection === "interactive" && (
                        <div className="section-items" style={{ display: "flex", flexDirection: "column" ,alignItems: "flex-start"}}>

                            <Link to="/accordion">
                               
                                Accordion
                            </Link>

                            <Link to="/carousel">
                                
                                Carousels
                            </Link>

                            <Link to="/dropdown">
                           
                                Dropdown
                            </Link>

                            <Link to="/modal">
                                
                                Modal
                            </Link>

                            <Link to="/navbaroffcanvas">
                                
                                Navbar & Offcanvas
                            </Link>

                            <Link to="/navtabs">
                                
                                Nav and Tabs
                            </Link>

                            <Link to="/overlays">
                            
                                Overlays 
                            </Link>

                            
                        </div>
                    )}
                   
                
            </div>

             <div className="sidebar-section">

                    <div
                        className="section-header"
                        onClick={() => handleSection("forms")}
                    >
                        <span>Forms.</span>

                        <i
                            className={
                                openSection === "forms"
                                    ? "bi bi-chevron-up"
                                    : "bi bi-chevron-down"
                            }
                        ></i>
                    </div>

                    {openSection === "forms" && (
                        <div className="section-items" style={{ display: "flex", flexDirection: "column" ,alignItems: "flex-start"}}>


                          <Link to="/basic-form-controls">
                                Basic Form Controls
                            
                            </Link>

                            <Link to="/formik-form">
                                Formik Form
                            
                            </Link>

                            <Link to="/rhf-form">
                                RHF Form
                            
                            </Link>

                             <Link to="/yup-form">
                                Yup Form
                            
                            </Link>


                            


                          </div>
                    )}
              </div>



      </div>

      <div className="content-area">
        <Outlet />
      </div>

      

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </div>
    
  );
}

export default MainLayout;


// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link, Outlet } from "react-router-dom";
// import "./MainLayout.css";

// function MainLayout(){
//     return(
//         <div className="main-layout">
//             <div className="sidebar">
                

//                 <Link to="/">
//                     Home Page
//                 </Link>

//                 <Link to="/static">
//                     Static Component
//                 </Link>

//                 <Link to="/Counter">
//                     Counters
//                 </Link>

//                 <Link to="/todo">
//                     TodoList
//                 </Link>

//                 <h2>React Bootstrap</h2>

//                 <Link to="/badges">
//                     Badges
//                 </Link>

//                 <Link to="/breadcrumbs">
//                     Breadcrumbs
//                 </Link>

//                 <Link to="/buttons">
//                     Buttons
//                 </Link>

//                 <Link to="/button-groups">
//                     Button Group
//                 </Link>

//                 <Link to="/cards">
//                     Cards
//                 </Link>

//                 <Link to="/images">
//                     Images
//                 </Link>

//                 <Link to="/list-group">
//                     List Group
//                 </Link>

//                 <Link to="/figure">
//                     Figure
//                 </Link>

//                 <Link to="/pagination">
//                     Pagination
//                 </Link>

//                 <Link to="/progress-bars">
//                     Progress Bars
//                 </Link>


//             </div>
//             <div className="main-content">
//                 <Outlet/>
//             </div>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={2000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 pauseOnHover

//             />
//         </div>
//     );
// }

// export default MainLayout; 