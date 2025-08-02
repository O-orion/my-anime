import FeedHeader from "@/components/layout/FeedHeader";
import postsData from "@/data/animes.json";
import { useEffect, useState } from "react";

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [activeTab, setActiveTab] = useState<"foryou" | "following">("foryou")

    useEffect(() => {
        setPosts(postsData.posts)
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
                <FeedHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    )

}

export default Home;
