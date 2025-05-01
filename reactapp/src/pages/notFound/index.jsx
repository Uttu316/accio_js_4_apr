import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not found</h2>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
};
export default NotFoundPage;
