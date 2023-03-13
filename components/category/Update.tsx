import { categoryUrl, employeeUrl } from "@/Apis/list.api";
import { asyncGet } from "@/Apis/rest.api";
import Mainlayout from "@/layouts/Mainlayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../container";
import Form, { Category } from "./Form";

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/category",
  },
  {
    title: "Category",
    link: "/category",
  },
  {
    title: "Update",
    link: "/category",
  },
];
const Update = () => {
  const router = useRouter();
  const [category, setCategory] = useState<Category>();

  const fetchCategory = async () => {
    const id = router.query.id; //id from url
    const { data, error } = await asyncGet(categoryUrl.get + "/" + id);
    if (data && !error) {
      setCategory(data);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [router.isReady]);

  return (
    <Mainlayout>
      <Container breadCrumb={breadCrumb} title="Update Category">
        <Form editData={category} />
      </Container>
    </Mainlayout>
  );
};

export default Update;
