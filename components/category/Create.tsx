import Mainlayout from "@/layouts/Mainlayout";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "../container";
import Form from "./Form";
const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/admin/category",
  },
  {
    title: "Category",
    link: "/admin/category",
  },
  {
    title: "Create",
    link: "/admin/category/Create",
  },
];

const Create = () => {
  return (
    <Mainlayout>
      <Container breadCrumb={breadCrumb} title="Add Category">
        <Form />
      </Container>
    </Mainlayout>
  );
};

export default Create;
