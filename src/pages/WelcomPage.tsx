import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography>
        <Typography.Title>Welcome</Typography.Title>
      </Typography>
      <Button onClick={() => navigate("/main/dashboard")}>Dashboard</Button>
    </div>
  );
};
export default Welcome;
