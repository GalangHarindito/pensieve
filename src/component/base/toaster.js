import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToasterContainer = () => {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default ToasterContainer
