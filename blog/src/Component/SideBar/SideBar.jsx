import { useEffect, useState } from "react";
import blog from "../../data/blog.json";
import {NavLink} from "react-router-dom"
import Card from "../UI/Card/Card";
import "./SideBar.css";
const SideBar = () => {
  const [post, setPost] = useState([]);
 
  useEffect(() => {
    const post = blog.data;
    setPost(post);
    console.log(post);
  }, [post]);

  return (
    <div className="sidebar">
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImg">
          <img
            src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-hotline-service-png-image_5413377.jpg"
            alt="png"
          />
        </div>
        <div className="cardBody">
          <p className="personaleBio">
            My Name is Ganesh Baliram Raut I am a Software Developer Learning
            things by my self intrested in In Development . I am self - taught
            Developer
          </p>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Post </span>
        </div>

        <div className="recentPosts">
          {post.map((po) => {
            return (
              <NavLink key={po.id} to={`/post/${po.id}`} onClick={window.scrollTo(0, 0)}>
                <div className="recentPost">
                  <h3>{po.blogTitle}</h3>
                  <span>{po.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
