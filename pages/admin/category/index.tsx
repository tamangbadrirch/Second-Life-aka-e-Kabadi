import Table from "@/components/category/Table";
import Container from "@/components/container";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

const index = () => {
  return (
    <>
      <Category />
    </>
  );
};

export default index;

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/category",
  },
  {
    title: "Category",
    link: "#",
  },
];

const Category = () => {
  return (
    <div>
      <Mainlayout title={"Category"}>
        <Container breadCrumb={breadCrumb} title={"Category"}>
          <Table />
        </Container>
      </Mainlayout>
    </div>
  );
};
