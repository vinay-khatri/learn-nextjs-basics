import Footer from "./comps/footer"
import Navbar from "./comps/navbar"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;