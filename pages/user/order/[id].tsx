import { itemsUrl } from "@/Apis/list.api";
import { asyncGet } from "@/Apis/rest.api";
import Form, { Items } from "@/components/items/Form";
import Update from "@/components/order/Update";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const update = () => {
  return <Update />;
};

export default update;
