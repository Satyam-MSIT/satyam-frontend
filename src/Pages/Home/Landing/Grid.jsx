// User imports
import useClamp from "./../../../Hooks/useClamp";
import useDimensions from "./../../../Hooks/useDimensions";

const GridLines = ({ lines, rotate = false }) => {
  return (
    <div
      className={`absolute left-0 top-0  flex h-[1000vh] w-[1000vw] justify-between ${rotate ? "flex-col" : ""} `}
    >
      {lines.map((_, index) => (
        <div
          className={`${rotate ? "border-b-[1px]" : "h-full border-r-[1px]"}  border-gray-400`}
          key={index}
        ></div>
      ))}
    </div>
  );
};

const generateArray = (length) => Array.from({ length });

const Grid = () => {
  const dimensions = useDimensions();
  const boxSize = useClamp(50, dimensions.width * 0.25, 100);
  const cols = generateArray(Math.floor((dimensions.width * 10) / boxSize));
  const rows = generateArray(Math.floor((dimensions.height * 10) / boxSize));

  return (
    <div className="absolute inset-0 -z-10 h-[90%] w-full">
      <div className="relative h-full overflow-hidden">
        <GridLines lines={cols} />
        <GridLines lines={rows} rotate={true} />

        <div
          className="absolute left-0 top-0 h-full w-full "
          style={{
            background:
              "linear-gradient(to bottom,rgba(255,255,255,.65), rgba(255,255,255,.75),rgba(255,255,255,.85),rgba(255,255,255,.9))",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Grid;
