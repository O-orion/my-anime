import { useState } from "react"
import FeedHeader from "../layout/FeedHeader"

interface FeedMainProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    posts: any[]
}

const FeedMain = ({ posts }: FeedMainProps) => {
    const [activeTab, setActiveTab] = useState<"foryou" | "following">("foryou")

    return (
        <div className="lg:col-span-8">
            <FeedHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    )

}

export default FeedMain;