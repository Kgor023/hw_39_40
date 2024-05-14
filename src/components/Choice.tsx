import { useState } from "react";
import Admin from "./Admin/Admin";
import User from "./User/User";
import "./choice.css";
interface Post {
  title: string;
  content: string;
  key: string;
}
export default function Choice() {
  const [listPosts, setListPosts] = useState<Post[]>([
    { title: "", content: "", key: "" },
  ]);
  let [select, setSelect] = useState("");
  const [show, setShow] = useState(true);
  const choice = {
    width: "200px",
    padding: "15px",
    margin: "300px auto",
    border: "3px solid black",
  };

  const handlerSelectAdmin = () => {
    setSelect((select = "admin"));
    setShow(false);
  };
  const handlerSelectUser = () => {
    setSelect((select = "user"));
    setShow(false);
  };
  return (
    <>
      {show && (
        <div style={choice}>
          <h2 style={{ textAlign: "center" }}>Кто вы?</h2>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <button onClick={() => handlerSelectAdmin()}>Admin</button>
            <button onClick={() => handlerSelectUser()}>User</button>
          </div>
        </div>
      )}
      {select === "admin" && (
        <Admin
          listPosts={listPosts}
          setListPosts={setListPosts}
          show={show}
          setShow={setShow}
        />
      )}
      {select === "user" && (
        <User
          listPosts={listPosts}
          setListPosts={setListPosts}
          show={show}
          setShow={setShow}
        />
      )}
    </>
  );
}
