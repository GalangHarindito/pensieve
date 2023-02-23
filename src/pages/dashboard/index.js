import { useEffect, useState, useMemo } from "react";
import { fetchDashboard } from "../../api/dashboard";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../component/base/table";
import Button from "../../component/base/button";
import "./styles.scss";
import { formatDate } from "../../helpers/format";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../../store/accessToken/actions";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((s) => s.accessToken);

  const [response, setResponse] = useState([]);
  useEffect(() => {
    if (accessToken) {
      fetchDashboard(accessToken)
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            renderData(data);
          }
        })
        .catch((e) => console.error(e));
    }
  }, [accessToken]);

  const renderData = (array) => {
    const data = array.map((item) => {
      return { ...item, timestamp: formatDate(item.timestamp, "LLL") };
    });
    setResponse(data);
  };

  const handleClick = (data) => {
    navigate(`detail?id=${data.device_id}`);
  };

  const handleExit = () => {
    dispatch(setAccessToken(""));
    navigate(`/`);
  };

  const columns = useMemo(
    () => [
      {
        Header: "GPS Device",
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
    <div className="table-dashboard">
      <div className="button-exit">
        <Button label="exit" variant="delete" onClick={handleExit} />
      </div>
      <Table
        columns={columns}
        data={response}
        onClick={(id) => handleClick(id)}
      />
    </div>
  );
}
