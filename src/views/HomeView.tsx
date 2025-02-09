import CardList from "@/components/CardList/CardList";

const HomeView = () => {
    return (
        <header className="flex flex-col items-center justify-center">
            <h1>Bienvenido al mundo tech!</h1>
            <div className="relative w-full max-w-screen-lg mb-6">
                <img 
                    src="https://t4.ftcdn.net/jpg/02/49/50/15/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg"
                    alt="Tech World"
                    className="w-full h-auto object-cover" 
                />
            </div>
            <CardList />
        </header>
    );
}

export default HomeView;