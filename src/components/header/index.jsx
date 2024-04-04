import "./style.scss";
import {Container} from "../containers"

const index = () => {
    return (
        <>
            <header className="bg-[#2d7185]">
                <Container>
                    <nav className="h-[70px] flex items-center justify-between">
                        <div>
                            <a className="text-[#edf9ea] tracking-wider hover:text-[#a9ff93] font-mono duration-150 font-bold text-[30px]" href="/">LOGO</a>
                        </div>
                        <ul className="flex gap-[30px]">
                            <li><a className="text-[18px] tracking-wider text-[#edf9ea] uppercase hover:text-[#a9ff93] font-mono duration-150 font-medium" href="/">Home</a></li>
                            <li><a className="text-[18px] tracking-wider text-[#edf9ea] uppercase hover:text-[#a9ff93] font-mono duration-150 font-medium" href="/">Service</a></li>
                            <li><a className="text-[18px] tracking-wider text-[#edf9ea] uppercase hover:text-[#a9ff93] font-mono duration-150 font-medium" href="/">About</a></li>
                            <li><a className="text-[18px] tracking-wider text-[#edf9ea] uppercase hover:text-[#a9ff93] font-mono duration-150 font-medium" href="/">Contact</a></li>
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    );
};

export default index;