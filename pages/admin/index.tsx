import Container from "@/components/container";
import Mainlayout from "@/layouts/Mainlayout";

const index = () => {
  return <Dashboard />;
};

export default index;

const Dashboard = () => {
  return (
    <Mainlayout>
      <Container>This is dashboard</Container>
    </Mainlayout>
  );
};
