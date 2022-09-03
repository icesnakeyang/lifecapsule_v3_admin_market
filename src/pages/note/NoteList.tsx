import { useState, useEffect } from "react";
import { Breadcrumb, List, Pagination, Typography } from "antd";
import { apiAdminNoteList } from "../../api/Api";
import NoteListRow from "./NoteListRow";
import { useDispatch, useSelector } from "react-redux";
import { saveNoteList, saveNotePageIndex } from "../../store/noteSlice";

const NoteList = () => {
  const [totalNote, setTotalNote] = useState(0);
  const notePageIndex = useSelector(
    (state: any) => state.noteSlice.notePageIndex
  );

  const notePageSize = useSelector(
    (state: any) => state.noteSlice.notePageSize
  );
  const noteList = useSelector((state: any) => state.noteSlice.noteList || []);
  const dispatch = useDispatch();

  useEffect(() => {
    loadAllData();
  }, [notePageIndex]);

  const loadAllData = () => {
    let params = {
      pageIndex: notePageIndex,
      pageSize: notePageSize,
    };
    apiAdminNoteList(params).then((res: any) => {
      dispatch(saveNoteList(res.data.noteList));
      setTotalNote(res.data.totalNote);
    });
  };
  const onChangePage = (e: any) => {
    dispatch(saveNotePageIndex(e));
  };

  return (
    <div>
      <Breadcrumb style={{ margin: "20px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/guest/login">App</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      {noteList
        ? noteList.map((item: any, index: any) => (
            <NoteListRow item={item} key={index} />
          ))
        : null}
      <Pagination
        style={{ marginTop: 10 }}
        size="small"
        total={totalNote}
        showTotal={() => `Total ${totalNote} notes`}
        showSizeChanger
        showQuickJumper
        onChange={onChangePage}
      />
    </div>
  );
};

export default NoteList;
