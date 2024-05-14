import { useState } from "react";
interface Post {
  title: string;
  content: string;
  key: string;
}
interface IProps {
  listPosts: Post[];
  setListPosts: (value: Post[]) => void;
}

export default function AdminCreatePost(props: IProps) {
  const [text, setText] = useState<Post>({ title: "", content: "", key: "" });
  const handlerClick = () => {
    props.setListPosts([...props.listPosts, text]);

  };

  return (
    <div className="inputs">
      
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setText({ ...text, title: event.target.value })
        }
        type="text"
        placeholder="Title"
        value={text.title}
      />
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setText({ ...text, content: event.target.value })
        }
        type="text"
        placeholder="Content"
        value={text.content}
      />
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setText({ ...text, key: event.target.value })
        }
        type="text"
        placeholder="Key"
        value={text.key}
      />
      <button style={{width:'100px'}}onClick={handlerClick}>Add post</button>
    </div>
  );
}
