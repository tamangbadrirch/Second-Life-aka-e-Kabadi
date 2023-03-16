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
          <div className="font-bold"> Who we are ? </div>
          <div className="font-bold"> What we do ? </div>
          <div className="font-bold"> How we work ? </div>
        </Container>
      </Mainlayout>
    </div>
  );
};
export default dashboard;
