import useGreeting from "../../../Hooks/useGreeting";
import Stats from "./Stats";
import { FlexCol } from "../../../Elements/Flex";
import DoughnutChart from "./PieChart";

const SatyamLanding = () => {
  const greeting = useGreeting();
  const name = "Shelly Chopra";

  return (
    <div className="grid grid-flow-row  grid-cols-[5.5fr_3fr] grid-rows-[1fr_1fr] gap-x-6 gap-y-12 ">
      {/* Stats */}
      <FlexCol className="row-start-1 row-end-2 gap-10 rounded-2xl bg-white px-8 pb-12 pt-8 shadow-[0_0_100px_2px_rgba(0,0,0,.2)]">
        <p className="text-2xl tracking-wider">{`${greeting}, ${name.split(" ")[0]}`}</p>
        <Stats />
      </FlexCol>

      {/* PieChart showing - journal submitted,accepted with minor changes, accepted with major changes,rejected,approved */}
      <div className="row-start-1 row-end-3 ">
        <DoughnutChart />
      </div>
    </div>
  );
};

export default SatyamLanding;
