import React from "react";
import { useSelector } from "react-redux";
import List from "../../component/List";
import "./style.scss";

export default function UserList() {
  const BookList = useSelector(state => state.book.data);

  const filterUser = (data, type) => {
    return data.sort((a, b) =>
      a[type].split(" ") < b[type].split(" ") ? -1 : 1
    );
  };
  let sortedList = filterUser(BookList, "last_name");

  return (
    <>
      <List list={sortedList} />
    </>
  );
}
