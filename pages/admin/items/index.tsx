import Table from "@/components/items/Table";
import Container from "@/components/container";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Items",
    link: "/items",
  },
];

const index = () => {
  return (
    <>
      <Items />
    </>
  );
};

export default index;

const Items = () => {
  return (
    <div>
      <Mainlayout title={"Items"}>
        <Container breadCrumb={breadCrumb} title={"Items"}>
          <Table />
        </Container>
      </Mainlayout>
    </div>
  );
};
