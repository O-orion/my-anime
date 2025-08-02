import { Bell, Home, Play, Plus, Search, User, Users } from 'lucide-react'
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from '../common/button';

const Header = () => {

    const [isMobileOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();


    const navigation = [
        { name: "Home", href: "/", icon: Home },
        { name: "Descobrir", href: "/discover", icon: Search },
        { name: "Animes", href: "/animes", icon: Play },
        { name: "Comunidades", href: "/communities", icon: Users },
        { name: "Notificações", href: "/notifications", icon: Bell },
        { name: "Perfil", href: "/profile", icon: User },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex-h-16 items-center justify-between">
                    <Link to="/"  className="flex items-center space-x-2"  >
                        <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">AC</span>
                        </div>
                        <span className="text-xl font-bold text-gradient hidden sm:block">
                            My-Anime
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6">
                        {
                            navigation.map((item) => (
                                <Link 
                                to={item.href}  
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                                    isActive(item.href)
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                }`}
                                 >
                                    <item.icon className='h-5 w-5' />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </Link>
                            ))}
                    </nav>

                    <div className="flex items-center space-x-3">
                        <Link to="/create" >
                            <Button size="sm" className='btn-glow hidden sm:flex' >
                                <Plus className='h-4 w-4 mr-2' />
                                POST
                            </Button>
                        </Link>


                        

                    </div>

                </div>
            </div>
        </header>
    )

} 

export default Header();