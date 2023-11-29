import { Posts } from "../../data/Data";
import useFetch from "../../hooks/useFetch";
import Post from "../Post/Post";
import Share from "../Share/Share";

function Feed() {
  // const { isLoading, data: posts } = useFetch("http://localhost:5000/posts");
  const posts = Posts();
  return (
    <div className="posts flex-col dark:bg-slate-950 w-full flex items-center justify-center overflow-x-hidden  ">
      <div className="feedWrapper flex flex-col justify-start gap-0 items-center  h-screen w-full  overflow-y-scroll scrollbar-none">
        <Share />

        <div className="mt-28 md:mt-16 lg:mt-20 w-screen mb-2   max-w-xl  flex flex-col items-center justify-center ">
          {posts && posts.map((p) => <Post key={p.id} post={p} />)}
        </div>
      </div>
    </div>
  );
}

export default Feed;
