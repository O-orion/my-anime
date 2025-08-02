import posts from "@/data/animes.json";
import { useEffect, useState } from "react";

const Index = () => {

    const [posts, setPosts] = useState([]);
    const [activeTab, setActiveTab] = useState<"foryou" | "following">("foryou")

    useEffect(() => {
        setPosts(posts)
    }, posts)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
        </div>
    )

}

export default Index;
