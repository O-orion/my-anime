import { Button } from "../common/button";

interface FeedHeaderProps {
    activeTab: "foryou"|"following";
    setActiveTab: (tab: "foryou" | "following") => void
}

const FeedHeader = ({ activeTab, setActiveTab }: FeedHeaderProps) => {
    return (
        <div className="card-anime p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gradient">Feed Principal</h1>
                <div className="flex space-x-2">
                    <Button
                    variant={activeTab === "foryou" ? "default": "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("foryou")}
                    className={ activeTab === "foryou" ? "btn-glow" : "" }
                    >
                        Para Você
                    </Button>
                    <Button
                    variant={ activeTab === "following" ? "default":"ghost" }
                    size="sm"
                    onClick={() => setActiveTab("following")}
                    className={ activeTab === "following" ? "btn-glow":""}
                    >
                        Seguindo

                    </Button>
                </div>
            </div>
            <p className="text-muted-foreground">
                Descubra os melhores post da comunidade anime
            </p>
        </div>
    )
}

export default FeedHeader;