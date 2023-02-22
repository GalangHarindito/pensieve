import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchDetailDevice } from "../../api/dashboard/detail";
import Table from "../../component/base/table";
import PieCharts from "../../component/base/chart/pie-chart";
import { formatDate } from "../../helpers/format";

export default function DetailDevice() {
  const location = useLocation();
  const accessToken = useSelector((s) => s.accessToken);
  const params = new URLSearchParams(location.search);
  const idDevice = params.get("id");
  const [response, setResponse] = useState([]);
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    fetchDetailDevice(accessToken, idDevice)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          renderData(data)
          chartData(data);
        }
      })
      .catch((e) => console.error(e));
  }, [idDevice]);

  const chartData = (data) => {
    const list = data.map((item) => item.location);
    let res = {};

    list.forEach((x) => {
      res[x] = (res[x] || 0) + 1;
    });
    const v = [["Location", "Percentage"]];
    const map = Object.keys(res).map((el) => {
      return [el, Math.abs((res[el] / list.length) * 100)];
    });
    const concatData = v.concat(map);
    setDataChart(concatData);
  };

  const renderData = (array) => {
    const data = array.map((item) => {
      return { ...item, timestamp: formatDate(item.timestamp, "LLL") };
    });
    setResponse(data);
  };

  const columns = useMemo(
    () => [
      {
        Header: `GPS Detail Device ${idDevice}`,
        columns: [
          {
            Header: "Id",
            accessor: "id",
          },
          {
            Header: "Device Type",
            accessor: "device_type",
          },
          {
            Header: "Device Id",
            accessor: "device_id",
          },
          {
            Header: "Location",
            accessor: "location",
          },
          {
            Header: "Date",
            accessor: "timestamp",
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="wrapper-detail-dashboard">
      <PieCharts data={dataChart} title={`Chart GPS Detail Device ${idDevice}`} />
      <Table columns={columns} data={response} onClick={() => {}} />
    </div>
  );
}
