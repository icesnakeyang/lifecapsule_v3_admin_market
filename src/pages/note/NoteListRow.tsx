import { Typography } from "antd";
import moment from "moment";

const NoteListRow = (data: any) => {
  const { item } = data;
  return (
    <div style={{ background: "#ccc", marginTop: 10, padding: 10 }}>
      <div style={{ fontSize: 18 }}>{item.title}</div>
      <div>{moment(item.createTime).format("LL")}</div>
      <div>{item.nickname}</div>
    </div>
  );
};

export default NoteListRow;
