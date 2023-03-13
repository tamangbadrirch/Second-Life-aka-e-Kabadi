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
    link: "/orders",
  },
  {
    title: "Orders",
    link: "/orders",
  },
  {
    title: "Create",
    link: "/orders/create",
  },
];

const Create = () => {
  return (
    <Mainlayout>
      <Container breadCrumb={breadCrumb} title="Place Order">
        <Form />
      </Container>
    </Mainlayout>
  );
};

export default Create;
