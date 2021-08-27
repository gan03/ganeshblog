import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import blog from "../../data/blog.json";

import "./BlogPost.css";
const BlogPost = (props) => {
  const [postid, setPostid] = useState("");
  const [post, setPost] = useState({});
  // console.log(post);
  useEffect(() => {
    const postid = props.match.params.postid;
    // console.log(data);
    const post = blog.data.find((post) => post.id == postid);
    setPost(post);
    setPostid(postid);

    // console.log(post.id);
  }, [post, props.match.params.postid]);

  console.log(postid.id);
  
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="bigCategory">Featured</span>
          <h1 className="pageTile"> {post.blogTitle}</h1>
          <span className="postedBy">
            Posted on {post.postedOn} by {post.author}{" "}
          </span>
        </div>

        <div className="postImageContainer">
          <img src={post.slug} alt="post" />
        </div>
        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p pl>{post.blogText}</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
