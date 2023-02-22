import { Chart } from "react-google-charts";

const Charts = ({data, title}) => {
    const options = {
        title,
      };
    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"600px"}
      />
    );
  }

  export default Charts