import worldimg from '../assets/images/png/worldimg.png'
const Loader = () => {

  return (
    <div>
      <div className="bg-[#0A0A0A] h-screen fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center z-[30]">
        <div role="status" className=" animate-bounce-slow">
          <img src={worldimg} alt="img" />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
