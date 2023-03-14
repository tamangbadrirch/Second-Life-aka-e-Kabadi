import { ordersUrl } from "@/Apis/list.api";
import { asyncDelete, asyncGet } from "@/Apis/rest.api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Orders } from "./Form";

const Table = () => {
  const [orderslist, setOrderslist] = useState<Orders[]>([]);
  const [filteredOrderslist, setFilteredOrderslist] = useState<Orders[]>([]);

  const fetchAllOrders = async () => {
    const { data, error } = await asyncGet(ordersUrl.get);
    if (data && !error) {
      setOrderslist(data?.data as Orders[]);
      setFilteredOrderslist(data?.data as Orders[]);
    }
  };
  const deleteOrders = async (id: number) => {
    const value = window.prompt("Ary you sure, you want to delete?");
    if (value == "yes") {
      const { data, error } = await asyncDelete(ordersUrl.delete + id);
      if (data && !error) {
        // fetchAllEmploye();
        setOrderslist((c) => c.filter((f) => f.id != id));
        setOrderslist((c) => c.filter((f) => f.id != id));
      }
    }
  };

  // const callback=(a:any)=>{x
  //  return a.filter(filterCallback)
  // }
  // const filterCallback=(f:any)=>{
  // return  f.id!=id
  // }

  const filterSearch = (e: any) => {
    const value = e.target.value;
    if (value) {
      setFilteredOrderslist(
        orderslist.filter(
          (f) => f.orders?.toString().includes(value)
          // ||
          // f.address?.toString().includes(value)
        )
      );
    } else {
      setFilteredOrderslist(orderslist);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div>
      <div className="flex justify-between my-3 mt-4">
        <div>
          <input
            type="text"
            onChange={filterSearch}
            className="border border-gray-400 rounded-md outline-none p-1.5"
          />
        </div>
        <Link href={"user/order/create"}>
          <span className="bg-purple-500 text-black hover:bg-purple-800 rounded-md px-3 py-2">
            Place Orders
          </span>
        </Link>
      </div>
      <div className="bg-white p-2">
        {/* {JSON.stringify(employeelist)} */}
        <table className="w-full mt-3">
          <thead className=" text-black bg-purple-600  ">
            <tr className="">
              <th className="p-3">Id</th>
              <th className="p-3">Category</th>
              <th className="p-3">Items</th>
              <th className="p-3">Pickup Date</th>
              <th className="p-3">Pickup Time</th>
              <th className="p-3">Pickup Location</th>
              <th className="p-3">Payment Method</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredOrderslist?.length > 0 ? (
              filteredOrderslist?.map((data, i) => {
                return (
                  <tr className="hover:bg-gray-200  p-3 text-center">
                    <td className="p-3 ">{i + 1}</td>
                    <td className="p-3">{data.category}</td>
                    <td className="p-3">{data.items}</td>
                    <td className="p-3">{data.pickupDate}</td>
                    <td className="p-3">{data.pickupTime}</td>
                    <td className="p-3">{data.pickupLocation}</td>
                    <td className="p-3">{data.paymentMethod}</td>

                    {/* <td className="p-3">{data.address}</td>
                    <td className="p-3">{data.phone}</td>
                    <td className="p-3">{data.age}</td> */}
                    <td className="p-3 flex gap-2 justify-center">
                      <Link href={`/user/order/create/${data.id}`}>
                        <button className="outline-none bg-green-600  px-2 py-0.5 rounded-md text-sm  text-white ">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteOrders(data.id)}
                        className="outline-none bg-red-600  px-2 py-0.5 rounded-md text-sm  text-white "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-3">
                  Data not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-2 absolute bottom-0 right-0">
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          1
        </button>
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          2
        </button>
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          3
        </button>
      </div>
    </div>
  );
};

export default Table;