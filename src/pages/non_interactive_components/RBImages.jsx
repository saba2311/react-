


import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import React, { useState } from "react";

function RBImages() {
  const [selectedName, setSelectedName] = useState("");

  const handleAvatarClick = (name) => {
    setSelectedName(name);
  };

  return (
    <div className="component-page" style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>
        
        {/* Avatar With Name */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "600" }}>Avatar With Name</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
              alt="Radhika Parmar" 
              style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }}
            />
            <span style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}>Radhika Parmar</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
              alt="Rajkumar Jadeja" 
              style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }}
            />
            <span style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}>Rajkumar Jadeja</span>
          </div>
        </div>

        {/* Avatar Sizes */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "600" }}>Avatar Sizes</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" 
            alt="size-1" 
            style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover" }}
             />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop"
             alt="size-2" 
             style={{ width: "30px", height: "30px", borderRadius: "50%", objectFit: "cover" }}
              />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop"
             alt="size-3" 
             style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover" }}
              />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop"
             alt="size-4" 
             style={{ width: "46px", height: "46px", borderRadius: "50%", objectFit: "cover" }}
              />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" 
            alt="size-5"
             style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover" }} 
             />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop"
             alt="size-6" 
             style={{ width: "68px", height: "68px", borderRadius: "50%", objectFit: "cover" }}
              />
          </div>
        </div>

        {/* Avatar Group */}
        <div>
          <h3 style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "600" }}>Avatar Group</h3>
          <div style={{ display: "flex", marginLeft: "10px", cursor: "pointer" }}>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
              alt="Radhika Parmar" 
              title="Radhika Parmar"
              onClick={() => handleAvatarClick("Radhika Parmar")}
              style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover", marginLeft: "-10px", border: "2px solid #fff" }} 
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
              alt="Rajkumar Jadeja" 
              title="Rajkumar Jadeja"
              onClick={() => handleAvatarClick("Rajkumar Jadeja")}
              style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover", marginLeft: "-10px", border: "2px solid #fff" }} 
            />
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
              alt="Aarav Sharma" 
              title="Aarav Sharma"
              onClick={() => handleAvatarClick("Aarav Sharma")}
              style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover", marginLeft: "-10px", border: "2px solid #fff" }} 
            />
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" 
              alt="Neha Singh" 
              title="Neha Singh"
              onClick={() => handleAvatarClick("Neha Singh")}
              style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover", marginLeft: "-10px", border: "2px solid #fff" }} 
            />
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
              alt="Amit Kumar" 
              title="Amit Kumar"
              onClick={() => handleAvatarClick("Amit Kumar")}
              style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover", marginLeft: "-10px", border: "2px solid #fff" }} 
            />
          </div>
          {selectedName && (
            <p style={{ marginTop: "10px", fontSize: "14px", color: "#333", fontWeight: "500" }}>
              Selected: <span style={{ color: "#a84334" }}>{selectedName}</span>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default RBImages;

