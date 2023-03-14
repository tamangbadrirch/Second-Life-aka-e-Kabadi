import Table from "@/components/order/Table";
import Container from "@/components/container";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

const index = () => {
  return (
    <>
      <Order />
    </>
  );
};

export default index;

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/order",
  },
  {
    title: "Order",
    link: "#",
  },
];

const Order = () => {
  return (
    <div>
      <Mainlayout title={"Order"}>
        <Container breadCrumb={breadCrumb} title={"Order"}>
          <Table />
        </Container>
      </Mainlayout>
    </div>
  );
};
