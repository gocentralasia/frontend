import Hero from "../../pages/Home/Hero/Hero.tsx"
import CentralAsiaTours from "./CentralAsiaTours/CentralAsiaTours.tsx";
import UnveilingCentralAsia from "./UnveilingCentralAsia/UnveilingCentralAsia.tsx";
import GroupTours from "./GroupTours/GroupTours.tsx";

function Index() {
  return (
    <div>
      <Hero />
      <CentralAsiaTours />
      <UnveilingCentralAsia />
      <GroupTours />
    </div>
  );
}

export default Index;