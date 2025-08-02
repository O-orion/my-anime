import Header from "../layout/Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-6">
                {children}
            </main>

        </div>
    )

}

export default Layout;
