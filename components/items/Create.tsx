import Mainlayout from "@/layouts/Mainlayout";
import React from "react";
import Container from "../container";
import Form from "./Form";
import create from "@/pages/admin/category/create";
const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/admin/items",
  },
  {
    title: "Items",
    link: "/admin/items",
  },
  {
    title: "Create",
    link: "/admin/items/Create",
  },
];

const Create = () => {
  return (
    <Mainlayout>
      <Container breadCrumb={breadCrumb} title="Add Items">
        <Form />
      </Container>
    </Mainlayout>
  );
};

export default Create;
