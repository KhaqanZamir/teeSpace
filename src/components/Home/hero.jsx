import { MoveRight, CirclePlay } from "lucide-react";
import Button from "../Button";

const Hero = () => {
  return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 p-8">
                <button className="text-myPurple text-xs font-semibold rounded-4xl bg-[rgba(180,121,217,0.15)] px-4 py-2">
                    Create your Own
                </button>

                <h1 className="relative text-black font-extrabold text-3xl md:text-5xl mt-4 mb-6 leading-snug">
                    <img 
                        src="src/assets/images/sig-line.svg" 
                        alt="sig-line" 
                        className="absolute w-[33%] top-[27%] left-[27%]"
                    />
                    Make the most<br/> of the <br/> Printing
                </h1>

                <p className="text-myGray text-sm md:text-base mt-2 md:mt-4">
                    What’s more, we do it right! A full administration printing background. Print shirts for yourself or your online business
                </p>

                <div className="flex flex-row justify-start items-center gap-3 md:gap-6 mt-5">
                    <Button label='Shop Now' icon={MoveRight} variant={'secondary'}/>
                    <span className="flex items-center justify-center">
                        How we work <CirclePlay className="inline-block ml-1 md:ml-4 text-black cursor-pointer" />
                    </span>
                </div>

                <div className="flex flex-row justify-start items-center mt-6 md:mt-10 gap-4">
                    <div className="px-8">
                        <p className="font-bold sm:font-extrabold text-3xl md:text-5xl text-black">
                            4k+
                        </p>
                        <p className="text-myGray text-xs md:text-sm mt-1 md:mt-2">
                            Collections
                        </p>
                    </div>
                    <div className="h-10 border-l border-gray-300"></div>
                    <div className="px-8">
                        <p className="font-bold sm:font-extrabold text-3xl md:text-5xl text-black">
                            9k+
                        </p>
                        <p className="text-myGray text-xs md:text-sm mt-1 md:mt-2">
                            items trusted to deliver
                        </p>
                    </div>
                </div>

            </div>
            <div className="md:w-1/2 p-8">
                <img src="/src/assets/images/banner-cover.svg" alt="Hero Image" className="w-full h-auto rounded-lg" />
            </div>
        </div>
    );
}

export default Hero;