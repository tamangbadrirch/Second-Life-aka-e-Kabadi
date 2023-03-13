import { employeeUrl } from "@/Apis/list.api";
import { asyncGet } from "@/Apis/rest.api";
import Mainlayout from "@/layouts/Mainlayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../container";
import Form, { Items } from "./Form";

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
    title: "Update",
    link: "/items",
  },
];
const Update = () => {
  const router = useRouter();
  const [items, setItems] = useState<Items>();

  const fetchItems = async () => {
    const id = router.query.id; //id from url
    const { data, error } = await asyncGet(itemsUrl.get + "/" + id);
    if (data && !error) {
      setItems(data);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [router.isReady]);

  return (
    <Mainlayout>
      <Container breadCrumb={breadCrumb} title="Update Items">
        <Form editData={items} />
      </Container>
    </Mainlayout>
  );
};
export default Update;
