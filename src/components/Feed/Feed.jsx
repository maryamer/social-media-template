import { Posts } from "../../dummyData";
import Post from "../Post/Post";
import Share from "../Share/Share";

function Feed() {
  return (
    <div className="posts dark:bg-slate-900 w-full flex items-center justify-center  ">
      <div className="feedWrapper flex flex-col items-center h-screen w-full md:w-4/5 overflow-y-scroll md:scrollbar">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
