import Container from "@/components/container";
import Mainlayout from "@/layouts/Mainlayout";

//if user login's he/she will see the payments they got till now will be displayed
//if admin login's there will be place to enter userid, by userid it will track the
//payment history till now of that user

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Dashboard",
    link: "/payment",
  },
];

const dashboard = () => {
  return (
    <div>
      <Mainlayout title={"Payment"}>
        <Container breadCrumb={breadCrumb} title={"Payment"}>
          <div className="font-bold">
            {" "}
            Your payment details are as follows. <br></br> We will display the
            payment details done to particular user here{" "}
          </div>
        </Container>
      </Mainlayout>
    </div>
  );
};
export default dashboard;
