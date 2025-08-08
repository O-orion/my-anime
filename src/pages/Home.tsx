import FeedMain from "@/components/features/FeedMain";
import postsData from "@/data/animes.json";
import SiderBar from "@/components/features/SiderBar";
import { useEffect, useState } from "react";

const Home = () => {

    const [posts, setPosts] = useState([]);
    const [trendingTopics, setTrendingTopics] = useState([]);
    const [communities, setCommunities] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        setPosts(postsData.posts)
        setTrendingTopics(postsData.trendingTopics)
        setCommunities(postsData.suggestedCommunities)
        setUpcoming(postsData.upcomingReleases);
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <FeedMain posts={posts} />
            <SiderBar  trendings={trendingTopics} communities={communities} upcoming={upcoming}  />
        </div>
    )

}

export default Home;
