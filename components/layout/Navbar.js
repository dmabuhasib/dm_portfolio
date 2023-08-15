import Image from 'next/image';
import Container from './Container';
import Link from 'next/link';
import ListItem from './ListItem';
import List from './List';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = ({ navbg }) => {
  const [show, setShow] = useState(true);
  const router = useRouter();

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener('resize', scrollWidth);
  }, []);
  return (
    <nav>
      <Container>
        <div className="mx-3 sm:mx-5 xl:mx-0 md:flex justify-between pt-4 pb-4 md:py-1 items-center">
          <div className="md:w-[20%]">
            <Link href="/">
              <div className="w-[85px] h-[81px] md:w-[110px] md:h-[105px] relative">
                <Image fill src="/assets/logo.png" alt="logo" cover />
              </div>
            </Link>
          </div>
          <div className=" md:[80%]">
            <FaBars
              className="block ml-auto  md:hidden absolute text-lg sm:text-xl top-9 right-4"
              onClick={() => setShow(!show)}
            />
            {show && (
              <List className="text-primary flex flex-col md:flex-row md:justify-end md:gap-x-8 font-pop text-lg mt-2.5 md:mt-0">
                <Link
                  href="/"
                  className={router.pathname === '/' ? 'shadow-lg' : ''}
                >
                  <ListItem
                    className={`font-bold  text-sm md:text-base lg:text-lg inline-block border-b-2 border-transparent text-primary duration-300 ease-in-out hover:border-b-2 px-4 py-1   my-auto hover:border-yellowp hover:font-bold`}
                    itemname="Home"
                  />
                </Link>
                <Link
                  href="/services"
                  className={router.pathname === '/services' ? 'shadow-lg' : ''}
                >
                  <ListItem
                    className="font-bold text-sm md:text-base lg:text-lg inline-block border-b-2 px-4 py-1 border-transparent text-primary duration-300 ease-in-out hover:border-b-2 hover:border-yellowp hover:font-bold"
                    itemname="Services"
                  />
                </Link>
                <Link
                  href="/about"
                  className={router.pathname === '/about' ? 'shadow-lg' : ''}
                >
                  <ListItem
                    className="font-bold text-sm md:text-base lg:text-lg inline-block border-b-2 px-4 py-1 border-transparent text-primary duration-300 ease-in-out hover:border-b-2 hover:border-yellowp hover:font-bold"
                    itemname="About Us"
                  />
                </Link>
                

                <Link
                  href="/contact"
                  className={
                    router.pathname === '/contact' ? 'shadow-lg' : ''
                  }
                >
                  <ListItem
                    className="font-bold text-sm md:text-base lg:text-lg inline-block border-b-2 border-transparent text-primary duration-300 ease-in-out hover:border-b-2 px-4 py-1 hover:border-yellowp hover:font-bold "
                    itemname="Contact Us"
                  />
                </Link>
              </List>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;