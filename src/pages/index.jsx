import Navigation from "../component/navigation";
import Footer from "../component/footer";

// Content
// import MainHero from "../components/mainhero";
import Slider from "../component/slider";
import About from "../component/about";
import Organized from "../component/organized";
import Category from "../component/category";
import Aftermovie from "../component/aftermovie";
import Newslatest from "../component/newslatest";
// import Category from "../components/category";
// import Organized from "../components/organized";
// import About from "../components/about";
// import Backtotop from "../components/back-to-top";

function Home() {
    return (
        <>
        <Navigation />
        <Slider />
        <About />
        <Organized />
        <Category />
        <Aftermovie />
        <Newslatest />
        <Footer />
    </>
    )
}

export default Home;