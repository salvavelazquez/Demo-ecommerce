import CardList from "@/components/CardList/CardList";
import Carousel from "@/components/Carousel/Carousel";

// import Link from "next/link";

const HomeView = () => {
    return (
        <header className="flex flex-col items-center justify-center">
            <h1>Bienvenido al mundo tech!</h1>
            {/* <Link href="/products">
                Go to products
            </Link> */}
            <div className="relative w-full max-w-screen-lg mb-6">
                <img 
                    src="https://t4.ftcdn.net/jpg/02/49/50/15/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg"
                    alt="Tech World"
                    className="w-full h-auto object-cover" 
                />
            </div>
            {/* <Carousel /> */}
            <CardList />
        </header>
    );
}

export default HomeView;