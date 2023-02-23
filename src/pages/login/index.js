import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormLogin from "../../component/form/login";
import { fetchLogin } from "../../api/login";
import { setAccessToken } from "../../store/accessToken/actions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (value) => {
    const { user_name, password } = value;
    if (user_name && password) {
      await fetchLogin(value)
        .then((res) => {
            const { data, status } = res
          if (status === 200) {
            const {response} = data
            const {message} = response
            dispatch(setAccessToken(message.loginToken))
            navigate("/dashboard");
          }
        })
        .catch((e) => console.error(e));
    }
  };
  return (
    <>
      <FormLogin onSubmit={(value) => handleSubmit(value)} />
    </>
  );
}
