import Container from "@/components/container";
import Mainlayout from "@/layouts/Mainlayout";

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Dashboard",
    link: "/dashboard",
  },
];

const dashboard = () => {
  return (
    <div>
      <Mainlayout title={"Dashboard"}>
        <Container breadCrumb={breadCrumb} title={"Dashboard"}>
          <div> This is dashboard</div>
        </Container>
      </Mainlayout>
    </div>
  );
};
export default dashboard;
