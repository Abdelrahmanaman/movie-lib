"use client"
import Image from 'next/image';
import CustomButton from './CustomButton';
const Hero = () => {
    const handleScroll = () => {
        console.log("hello")
    }
  return (
    <section>
      <div>
        <h1>Find, book, or rent a car - quickly and easily!</h1>
        <p>Streamline your car rental experience with our effortelss booking process</p>
        <CustomButton title={"Explore Cars"} style={"bg-primary-blue text-white rounded-full mt-10 p-2"} handleClick={handleScroll} />
      </div>
      <div>
        <div>
          <Image src={"/hero.png"} fill alt='Hero Image' className='object-contain' />
        </div>
      </div>
    </section>
  );
}

export default Hero