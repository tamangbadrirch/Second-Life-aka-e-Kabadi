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
    link: "/order",
  },
  {
    title: "Orders",
    link: "/user/order",
  },
  {
    title: "Create",
    link: "/user/order/Create",
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
