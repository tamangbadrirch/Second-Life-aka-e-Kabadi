import { employeeUrl, itemsUrl, ordersUrl } from "@/Apis/list.api";
import { asyncGet } from "@/Apis/rest.api";
import Mainlayout from "@/layouts/Mainlayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../container";
import Form, { Orders } from "./Form";

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/user/order",
  },
  {
    title: "Items",
    link: "/user/order",
  },
  {
    title: "Update",
    link: "/orders/update",
  },
];
const Update = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<any>();

  const fetchOrders = async () => {
    const id = router.query.id; //id from url
    const { data, error } = await asyncGet(ordersUrl.get + "/" + id);
    if (data && !error) {
      setOrders(data?.data);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [router.isReady]);

  return (
    <Mainlayout>
      <Container breadCrumb={breadCrumb} title="Update Orders">
        <Form editData={orders} />
      </Container>
    </Mainlayout>
  );
};
export default Update;
