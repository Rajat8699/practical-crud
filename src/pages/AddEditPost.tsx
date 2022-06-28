import React, { memo, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Spinners } from "../components/icons";
import {
  addPost,
  clearPostData,
  editPost,
  getPostData,
} from "../redux/reducers/posts/postsSlice";

const AddEditPost = (props: any) => {
  interface Data {
    userId: number;
    title: string;
    body: string;
    id: number;
  }

  const location = useLocation();
  let { id } = useParams();
  const dispatch = useDispatch();
  const { loader, postData } = useSelector((state: any) => state?.postReducer);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Data>();

  useEffect(() => {
    if (id) {
      dispatch(getPostData(id));
    }
  }, [id]);

  useEffect(() => {
    setValue("id", postData?.id);
    setValue("title", postData?.title);
    setValue("body", postData?.body);
    setValue("userId", postData?.userId);
  }, [postData]);

  useEffect(() => {
    return () => {
      dispatch(clearPostData());
    };
  }, []);

  const onSubmit: SubmitHandler<Data> = (data) => {
    if (id) {
      dispatch(editPost({ data, id }));
    } else {
      dispatch(addPost(data));
      //   dispatch(clearPostData());
    }
  };

  return (
    <section>
      <div className=" items-center px-5 py-12 lg:px-20">
        <div className="flex flex-col shadow-lg w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform border-gray-600 border-1 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg md:mt-0">
          <h3 className="font-bold block text-center text-3xl text-primary-500 dark:text-white">
            {id ? "Edit" : "Add"} Post
          </h3>
          <div className="mt-8">
            <div className="mt-6">
              <form
                action="#"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-neutral-600 dark:text-white"
                    >
                      {" "}
                      Title{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="title"
                        type="text"
                        placeholder="Title"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-gray-600"
                        {...register("title", { required: true })}
                      />
                    </div>
                    {errors.title && (
                      <p className="text-red-400 text-xs">Title is required</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium text-neutral-600 dark:text-white"
                    >
                      {" "}
                      Id{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="id"
                        placeholder="id"
                        type="number"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-gray-600"
                        {...register("id", { required: true, min: 1 })}
                      />
                    </div>
                    {errors.id && (
                      <p className="text-red-400 text-xs">Id is required</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="body"
                    className="block text-sm font-medium text-neutral-600 dark:text-white"
                  >
                    {" "}
                    Description{" "}
                  </label>
                  <textarea
                    className="block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpanddark:border-gray-700 dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-gray-600"
                    id="description"
                    placeholder="Description"
                    {...register("body", { required: true })}
                  />
                  {errors.body && (
                    <p className="text-red-400 text-xs">
                      Description is required
                    </p>
                  )}
                </div>

                <div className="block text-sm font-medium text-neutral-600">
                  <label
                    htmlFor="userId"
                    className="block text-sm font-medium text-neutral-600 dark:text-white"
                  >
                    User Id
                  </label>
                  <div className="mt-1">
                    <input
                      id="userId"
                      placeholder="userId"
                      type="number"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:border-gray-700 dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-gray-600"
                      {...register("userId", {
                        required: true,
                        min: 1,
                      })}
                    />
                  </div>
                  {errors.userId && (
                    <p className="text-red-400 text-xs">User Id is required</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loader}
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-primary-600 rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-500/70 disabled:cursor-not-allowed"
                  >
                    {loader ? (
                      <>
                        <Spinners />
                        Submitting
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AddEditPost);
