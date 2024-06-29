// import brightness like icon from react-icons/fa
import { FaSun, FaMoon } from 'react-icons/fa';


function Nav() {

    return (
        <section className=" mt-6 px-10 flex justify-between">
            <h1 className=' text-3xl font-bold'>devfinder</h1>
            <div className='flex items-center space-x-2'>
                <div>Light</div>
                <FaSun />
            </div>
        </section>
    )
}

export default Nav;