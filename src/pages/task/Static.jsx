import React from "react";
import { Header } from "../../components/static_task/Header";
import ProfileCard from "../../components/static_task/ProfileCard";
import { Footer } from "../../components/static_task/Footer";
const Static = () => {
  return (
    <div className="min-vh-100 bg-light">
      <Header />

      <div className="d-flex justify-content-center mt-4">
        <ProfileCard />
      </div>

      <Footer />
    </div>
  );
};

export default Static;