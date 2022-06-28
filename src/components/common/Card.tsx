import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../../redux/reducers/posts/postsSlice";
import { Spinners } from "../icons";

interface Props {
  data: {
    body: string;
    id: number;
    title: string;
    userId: string;
  };
}

const Card = (props: Props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader } = useSelector((state: any) => state?.postReducer);
  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  return (
    <div
      onClick={() => {
        navigate(`/posts/${data?.id}`);
      }}
      className="flex flex-col cursor-pointer justify-between p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="block justify-between max-w-sm ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-500 dark:text-white">
          {data?.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
          {data?.body}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(data?.id);
        }}
        className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-600 rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-500/70 disabled:cursor-not-allowed"
      >
        {loader ? <Spinners /> : "Delete Post"}
      </button>
    </div>
  );
};

export default Card;
