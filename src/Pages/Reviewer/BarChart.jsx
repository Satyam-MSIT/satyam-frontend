import { Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data={
    labels:['Mon','Tue','Wed','Thur'],
    datasets:[{
      label:"Views",
      data:[40,10,20,30],
      backgroundColor:'pink',
      borderColor:'black',
      borderWidth:1
    }]
  }
  const options={

  }
  return (
    <Bar
    data={data}
    options={options}>

    </Bar>
  )
}

export default BarChart