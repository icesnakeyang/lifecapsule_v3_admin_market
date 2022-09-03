import { Card, Pagination } from "antd";
import { useEffect, useState } from "react";
import { apiListUsers } from "../../../api/Api";
import UserListRow from "./UserListRow";

const UserList = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [userList, setUserList] = useState([]);
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
    loadAllData();
    return () => {};
  }, [pageIndex]);

  const loadAllData = () => {
    let params = {
      pageIndex,
      pageSize,
    };
    apiListUsers(params).then((res: any) => {
      if (res.code === 0) {
        setUserList(res.data.userList);
        setTotalUser(res.data.totalUser);
      }
    });
  };

  const onChangePage = (e: any) => {
    setPageIndex(e);
  };

  return (
    <div>
      <Card></Card>
      {userList
        ? userList.map((item, index) => <UserListRow item={item} key={index} />)
        : null}
      <Pagination
        style={{ marginTop: 10 }}
        showQuickJumper
        defaultCurrent={1}
        total={totalUser}
        showTotal={() => `Total ${totalUser} users`}
        onChange={onChangePage}
      />
    </div>
  );
};

export default UserList;
