import { Calendar, Star, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../common/Card";
import Badge from "../common/Badger";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../common/button";

interface SiderBarProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    trendings: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    communities: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    upcoming: any[];
}

const SiderBar = ({ trendings, communities, upcoming }: SiderBarProps) => {

    return (
        <div className="lg:col-span-4 space-y-6">
            <Card className="card-anime" >
                <CardHeader className="pb-3" >
                    <CardTitle className="flex items-center space-x-2 text-lg" >
                        <TrendingUp className="h-5 w-5 text-accent" />
                        <span>Tendências</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3" >
                    {
                        trendings.map((topic, index) => (
                            <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                                <div>
                                    <p className="font-medium text-foreground">#{topic.name}</p>
                                    <p className="text-sm text-muted-foreground">{topic.post} posts</p>
                                </div>
                                <Badge variant="secondary" className="text-xs" >
                                    {index + 1}
                                </Badge>
                            </div>
                        ))}
                </CardContent>
            </Card>

            <Card className="card-anime" >
                <CardHeader className="pb-3" >
                    <CardTitle className="flex items-center space-x-2 text-lg" >
                        <Users className="h-5 w-5 text-primary" />
                        <span>Comunidades Sugeridas</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4" >
                    {
                        communities.map((comunity) => (
                            <div key={comunity.name} className="flex items-center justify-between" >
                                <div className="flex-items space-x-3">
                                    <Avatar className="h-8 w-8" >
                                        <AvatarImage  src={comunity.avatar} />
                                        <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
                                            {comunity.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-sm">{comunity.name}</p>
                                        <p className="text-sx text-muted-foreground">{comunity.members} membros</p>
                                    </div>
                                </div>
                                    <Button 
                                    size="sm" 
                                    className={comunity.isFollowing ? "btn-glow":""}
                                    variant={comunity.isFollowing ? "secondary":"default"} >
                                        {
                                            comunity.isFollowing ? "Seguindo" : "Seguir"
                                        }
                                    </Button>
                            </div>
                        ))                       
                    }
                </CardContent>
            </Card>

            <Card className="card-anime" >
                    <CardHeader className="pb-3" >
                        <CardTitle className="flex items-center space-x-2 text-lg" >
                            <Calendar className="h-5 w-5 text-secondary" />
                            <span>Próximos Lançamentos</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3" >
                        {
                            upcoming.map((release) => (
                                <div
                                key={release.title}
                                className="p-3 rounded-lg bg-gradient-card border border-border/50 hover:shadow-glow transition-all durantion-300 "
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium text-sm">{release.title}</p>
                                            <p className="text-xs text-muted-foreground">{release.date}</p>
                                        </div>
                                        <Badge variant="outline" className="text-xs"  >
                                            {release.episode}
                                        </Badge>
                                    </div>
                                </div>
                            ))
                        }
                    </CardContent>
            </Card>

            <Card className="card-anime" >
                <CardHeader className="pb-3" >
                    <CardTitle className="flex items-center space-x-2 text-lg" >
                        <Star className="h-5 w-5 text-accent" />
                        <span>Usuários Populares</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3" >
                                    {["OtakuMaster", "AnimeLover", "MangaReader"].map((username, index) => (
              <div
                key={username}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-gradient-accent text-accent-foreground text-xs">
                      {username.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">@{username}</p>
                    <p className="text-xs text-muted-foreground">{(index + 1) * 1200} seguidores</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="hover-lift">
                  Seguir
                </Button>
              </div>
            ))}
                </CardContent>
            </Card>

            
        </div>
    );

}

export default SiderBar