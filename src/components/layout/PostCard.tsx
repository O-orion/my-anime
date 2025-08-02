import { useState } from "react";

interface PostCardProps {
  post: {
    id: string;
    author: {
      name: string;
      username: string;
      avatar: string;
    };
    content: string;
    image?: string;
    hashtags: string[];
    community?: string;
    likes: number;
    comments: number;
    reposts: number;
    timestamp: string;
    isLiked?: boolean;
    isReposted?: boolean;
  };
}

const PostCard = ({ post }: PostCardProps) => {
    const [isLiked, setIsLiked] = useState(post.isLiked || false);
    const [isReposted, setIsReposted] = useState(post.isReposted || false);
    const [likesCount, setLikesCount] = useState(post.likes);
    const [repostsCount, setRepostsCount] = useState(post.reposts);

    const handleLikes = () => {
        setIsLiked(!isLiked);
        setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    }

    const handleRepost = () => {
        setIsReposted(!isReposted);
        setRepostsCount(isReposted ? repostsCount - 1 : repostsCount + 1)
    }

    return (
        <div className="card-anime p-6 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-3">
                
            </div>
        </div>
    )

}

export default PostCard