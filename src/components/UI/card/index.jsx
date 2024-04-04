import "./style.scss";

const index = ({data:{name, age, id}, onDelate}) => {
    return (
        <>
            <div className="p-5 shadow-[0_1px_16px_1px_#2d7185] rounded-md flex items-center justify-between">
                <div>
                  <p className="font-semibold font-serif text-[#000] tracking-widest text-[18px]">Name: <span className="text-[#2d7185] tracking-wide font-mono">{name}</span></p>
                  <p className="font-semibold font-serif text-[#000] tracking-widest text-[18px]">Age: <span className="text-[#2d7185] tracking-wide font-mono">{age}</span></p>
                </div>
                <button onClick={()=> onDelate(id)} className="active:bg-[#00000018] px-2 py-1 rounded-md duration-200">
                  <i className="text-yellow-500 font-bold text-[20px] bi bi-trash-fill"></i>
                </button>
              </div>
        </>
    );
};

export default index;