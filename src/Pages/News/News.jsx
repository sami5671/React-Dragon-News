import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
  const news = useLoaderData();
  const { id } = useParams(); //string value
  const idInt = parseInt(id);

  // =================state declare================================================

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <h3 className="text-2xl font-bold text-gray-600">Dragon News</h3>
      {/* main news section */}

      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3 border">
          <div>
            <p>The id is: {id}</p>
          </div>
        </div>

        {/* main news section */}
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
