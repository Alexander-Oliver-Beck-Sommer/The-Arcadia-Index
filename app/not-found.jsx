import React from "react";
import meda from "@/data/header.json";

export const metadata = {
  title: meda.pages.error.title,
  description: meda.pages.error.title,
};

const NotFound = () => {
  return <div>NotFound</div>;
};

export default NotFound;
