import { Breadcrumb, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const count = useSelector((state: any) => state.counterSlice.value);
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div>
      <Breadcrumb style={{ margin: "20px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/guest/login">App</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <Button
        type="primary"
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </Button>
      {count}
      <Button
        type="primary"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </Button>
    </div>
  );
};

export default Dashboard;
