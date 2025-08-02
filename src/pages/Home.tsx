import FeedMain from "@/components/features/FeedMain";
import postsData from "@/data/animes.json";
import { useEffect, useState } from "react";

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postsData.posts)
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <FeedMain posts={posts} />
        </div>
    )

}

export default Home;
