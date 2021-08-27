import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <nav className="headerMenu">
        <div className="logo">
          <a href="#">Express Your Thoughts</a>
        </div>
      </nav>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-40.png"
          alt="insta"
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Youtube-40.png"
          alt="youtube"
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-linkedin-outline-40.png"
          alt="link"
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-40.png"
          alt="face"
        />
      </div>
    </div>
  );
};

export default Header;
