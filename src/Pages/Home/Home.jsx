import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {/* <h2 className="text-3xl font-poppins font-bold">This is Home</h2> */}

      {/* layout of the home page */}
      <div className="grid grid-cols-1  md:grid-cols-4 gap-6">
        <div className="border-2">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news container(news= {aNews}---> its a prop & send it to the destination)  */}
        <div className="md:col-span-2">
          {news.map((aNews) => (
            <NewsCard key={aNews.id} news={aNews}></NewsCard>
          ))}
        </div>
        {/* news container end */}
        <div className="border-2">
          <RightSideNav></RightSideNav>
        </div>
      </div>

      {/* layout of the home page */}
    </div>
  );
};

export default Home;
