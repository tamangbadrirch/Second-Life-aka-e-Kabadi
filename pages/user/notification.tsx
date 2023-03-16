import Table from "@/components/order/Table";
import Container from "@/components/container";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

const notification = () => {
  return (
    <>
      <Notification />
    </>
  );
};

export default notification;

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Order",
    link: "/user/notification",
  },
];

const Notification = () => {
  return (
    <div>
      <Mainlayout title={"Notification"}>
        <Container breadCrumb={breadCrumb} title={"Notification"}>
          {/* <Table /> */}
          <div className="font-bold">
            If status of your latest order changes, then notification comes to
            you here or alternatively you can check by menu from left side of
            your screen.
          </div>
        </Container>
      </Mainlayout>
    </div>
  );
};
