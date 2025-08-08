import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Badge  from '../common/Badger'
import { useState } from "react";
import { Button } from "../common/button";
import { Heart, MessageCircle, MoreHorizontal, Repeat2, Share } from "lucide-react";

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
        <div className="card-anime mt-4 p-6 hover:shadow-glow transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                  {post.author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-foreground">{post.author.name}</h4>
                  {post.community && (
                    <Badge variant="secondary" className="text-xs">
                      {post.community}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  @{post.author.username} · {post.timestamp}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="hover:bg-muted/50">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="mb-4">
            <p className="text-foreground mb-3 leading-relaxed">{post.content}</p>

            {
              post.image && (
                <div className="rounded-lg overflow-hidden mb-3">
                  <img 
                  src={post.image} 
                  alt="post content" 
                  className="w-full h-auto max-h-96 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              )}

              {
                post.hashtags.length > 0 && (
                  <div className="flex flex-wrap gap2">
                    {
                      post.hashtags.map((tag,index) => (
                        <span className="text-primary mr-2 hover:text-accent cursor-pointe transition-colors text-sm">
                          #{tag}
                        </span>
                      ))
                    }
                  </div>
                )
              }
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div className="flex items-center space-x-6">
                <Button 
                size="sm" 
                variant="ghost" 
                onClick={handleLikes}
                className={`transition-all duration-200 ${
                  isLiked 
                    ? "text-red-500 hover:text-red-600" 
                    : "text-muted-foreground hover:text-red-500"
                  }`}
                 >
                  <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                  <span className="text-sm">{likesCount}</span>
                </Button>

                  <Button 
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary transition-colors" >
                    <MessageCircle className="h-4 w-4 mr-1"  />
                    <span>50</span>
                  </Button>

                  <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRepost}
                  className={`transition-all duration-200 ${
                    isReposted 
                      ? "text-green-500 hover:text-green-600" 
                      : "text-muted-foreground hover:text-green-500"
                  }`}
                  >
                    <Repeat2 className="h-4 w-4 mr-2" />
                    <span className="text-sm">{repostsCount}</span>
                  </Button>

              </div>

              <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Share className="h-4 w-4" />
              </Button>
          </div>
        </div>
    )

}

export default PostCard