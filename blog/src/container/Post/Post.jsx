import BlogPost from "../../Component/BlogPOST/BlogPost";
import SideBar from "../../Component/SideBar/SideBar";
import "./Post.css";
const Post = (props) => {
  // console.log(props);
  return (
    <section className="container">
      <BlogPost {...props} />
      <SideBar />
    </section>
  );
};

export default Post;
