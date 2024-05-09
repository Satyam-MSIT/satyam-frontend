import { FlexCol, Flex } from "../../../Elements/Flex";

const StatItem = ({ heading, value }) => {
  return (
    <div>
      <h3 className="mb-2 text-lg text-darkgrey">
        Journals
        <br />
        {heading}
      </h3>
      <h4 className="text-5xl font-bold text-blue-600">{value}</h4>
    </div>
  );
};
const Stats = () => {
  return (
    <Flex className="justify-between">
      <StatItem heading="this week" value="4" />
      <StatItem heading="this month" value="18" />
      <StatItem heading="so far" value="40" />
    </Flex>
  );
};

export default Stats;
