import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../components/common/Card";
import FullPageLoader from "../components/common/FullPageLoader";
import { getPosts } from "../redux/reducers/posts/postsSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { taskList, loader } = useSelector((state: any) => state.postReducer);

  return (
    <>
      {loader ? (
        <FullPageLoader />
      ) : (
        <div className="flex flex-wrap gap-5 w-full justify-center align-middle">
          {(taskList || []).map((task: any) => {
            return <Card key={task?.id} data={task} />;
          })}
        </div>
      )}
    </>
  );
};

export default HomePage;
