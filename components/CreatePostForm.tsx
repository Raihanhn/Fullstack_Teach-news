import React from "react";
import { categoriesData } from "@/data";

export default function CreatePostForm() {
  return (
    <div>
      <h2>Create Post</h2>
      <form className="flex flex-col gap-2">
        <input type="text" placeholder="Title" />
        <textarea placeholder="Content"></textarea>
        <div className="flex gap-2">
          <input
            className="flex-1"
            type="text"
            placeholder="Paste the link click on Add"
          />
          <button className="btn flex gap-2 items-center ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </span>
            Add
          </button>
        </div>
        <select className="p-3 rounded-md border appearance-none">
          <option value="">Select A Category</option>
          {categoriesData &&
            categoriesData.map((category) => (
              <option value={category.name} key={category.name}>
                {" "}
                {category.name}{" "}
              </option>
            ))}
        </select>
        <button className="primary-btn" type="submit">
          Create Post
        </button>
        <div className="p-2 text-red-500 font-bold">Error Message</div>
      </form>
    </div>
  );
}
