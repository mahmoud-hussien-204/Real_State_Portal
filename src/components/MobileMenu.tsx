import Navbar from "./Navbar";

const MobileMenu = () => {
  return (
    <label
      htmlFor='nav-toggle'
      className='fixed -start-full top-0 z-50 h-full bg-black/20 transition-all peer-checked:start-0 lg:hidden'
    >
      <div className='h-full w-[350px] max-w-full bg-white px-1rem py-2rem'>
        <Navbar className='flex flex-col items-start text-start' />
      </div>
    </label>
  );
};

export default MobileMenu;
