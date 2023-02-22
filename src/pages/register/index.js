import { useNavigate } from "react-router-dom";
import FormRegister from "../../component/form/register";
import { fetchRegister } from "../../api/register";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (value) => {
    const { name, email, password } = value;
    console.log(value)
    if (name && email && password) {
      await fetchRegister(value)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Succesfully Register", {
              position: "bottom-center",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(() => {
              navigate("/");
            }, 4000);
          }
        })
        .catch((e) => console.error(e));
    }
  };
  return (
    <>
      <FormRegister onSubmit={(value) => handleSubmit(value)} />
    </>
  );
}
