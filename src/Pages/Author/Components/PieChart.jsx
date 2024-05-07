import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const info = {
  ["Pending"]: { value: 12, backgroundColor: "rgb(253, 227, 90)" },
  ["Under Review"]: { value: 20, backgroundColor: "rgb(182, 190, 199)" },
  ["Rejected"]: { value: 26, backgroundColor: "rgba(255, 99, 132, 1)" },
  ["Accepted"]: { value: 16, backgroundColor: "rgb(142, 216, 183)" },
};

const PieChart = () => {
  return (
    <Doughnut
      options={{
        cutout: "45%",
        color: "black",
      }}
      data={{
        labels: Object.keys(info),
        datasets: [
          {
            label: "No of Journals",
            data: Object.values(info).map((el) => el.value),
            backgroundColor: Object.values(info).map(
              (el) => el.backgroundColor
            ),

            borderWidth: 4,
            borderColor: "#ebebeb",
          },
        ],
      }}
    />
  );
};

export default PieChart;
