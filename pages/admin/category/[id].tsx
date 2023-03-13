import { categoryUrl } from "@/Apis/list.api";
import { asyncGet } from "@/Apis/rest.api";
import Form, { Category } from "@/components/category/Form";
import Update from "@/components/category/Update";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const update = () => {
  return <Update />;
};

export default update;
