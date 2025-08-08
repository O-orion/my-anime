import { useState } from "react"
import FeedHeader from "../layout/FeedHeader"
import PostCard from "../layout/PostCard"
import { Button } from "../common/button"

interface FeedMainProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    posts: any[]
}

const FeedMain = ({ posts }: FeedMainProps) => {
    const [activeTab, setActiveTab] = useState<"foryou" | "following">("foryou")

    return (
        <div className="lg:col-span-8">
            <FeedHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            }

            <div className="text-center mt-8">
                <Button
                variant="outline"
                className="hover-lift"
                >
                    Carregar mais posts
                </Button>
            </div>
        </div>
    )

}

export default FeedMain;