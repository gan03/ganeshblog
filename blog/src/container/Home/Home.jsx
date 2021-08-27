import Card from "../../Component/UI/Card/Card";
import "./Home.css";
import SideBar from "../../Component/SideBar/SideBar";
import RecentPost from "./RecentPost/RecentPost";
const Home = () => {
  const galleryHeight = 450;
  const gallaryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden",
  };
  const sideimageHeight = galleryHeight / 3;
  return (
    <div>
      <Card style={{ margin: "20px 0" }}>
        <div className="gallaryPost" style={gallaryStyle}>
          <section style={{ width: "70%" }}>
            <div>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/81VBi2RDh6L.jpg"
                alt="img"
              />
            </div>
          </section>
          <section style={{ width: "30%" }} className={"sideimageWrapper"}>
            <div style={{ height: `${sideimageHeight}px` }}>
              <img
                src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg"
                alt="img"
              />
            </div>
            <div style={{ height: `${sideimageHeight}px` }}>
              <img
                src="https://www.kotak.com/content/dam/Kotak/product_card_images/how-credit-cards-enhance-your-shopping-experience.jpg"
                alt="img"
              />
            </div>
            <div style={{ height: `${sideimageHeight}px` }}>
              <img
                src="https://image.shutterstock.com/image-illustration/smoking-death-danger-concept-cigarette-260nw-458145142.jpg"
                alt="img"
              />
            </div>
          </section>
        </div>
      </Card>
      <section className="Homecontainer">
        <RecentPost/>
        <SideBar />
      </section>
    </div>
  );
};

export default Home;
