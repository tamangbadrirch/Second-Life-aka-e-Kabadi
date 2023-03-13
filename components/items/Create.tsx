import Mainlayout from "@/layouts/Mainlayout";
import React from "react";
import Container from "../container";
import Form from "./Form";
import create from "@/pages/admin/category/create";
const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/items",
  },
  {
    title: "Items",
    link: "/items",
  },
  {
    title: "Create",
    link: "/items/create",
  },
];

const Create = () => {
  return (
    <Mainlayout>
      <Container breadCrumb={breadCrumb} title="Add Items">
        <create />
      </Container>
    </Mainlayout>
  );
};

export default Create;
