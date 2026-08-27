const Brands = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 bg-myGray-100 py-16">
            <p className="w-[85%] md:w-[45%] text-sm md:text-xl text-black text-center font-semibold">
                “We've got custom T-shirts in a range of fits and sizes, so everyone can wear your brand or message.”
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                <img src="/src/assets/images/spotify.svg" alt="Brand 1" className="w-32 md:w-40"/>
                <img src="/src/assets/images/feedly.svg" alt="Brand 2" className="w-32 md:w-40"/>
                <img src="/src/assets/images/lattice.svg" alt="Brand 3" className="w-32 md:w-40"/>
                <img src="/src/assets/images/hopin.svg" alt="Brand 4" className="w-32 md:w-40"/>
                <img src="/src/assets/images/upwork.svg" alt="Brand 5" className="w-32 md:w-40"/>
                <img src="/src/assets/images/hopin.svg" alt="Brand 4" className="w-32 md:w-40"/>
            </div>
        </div>
    );
}

export default Brands;