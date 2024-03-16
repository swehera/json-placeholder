import React from "react";
import Container from "./ui/Container";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <Container className=" flex items-center justify-between">
        <p className="text-sm tracking-wider">
          Coded and maintained with ❤️ by typicode © 2024
        </p>
        <p className="text-sm tracking-wider">Created by Hira</p>
      </Container>
    </div>
  );
};

export default Footer;
