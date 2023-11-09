import React from 'react';
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom';

const About = () => {
  return <section>
    <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/*===about img===*/}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt='' />
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                    <img src={aboutCardImg} alt='' />
                </div>
                </div>

                {/*====about content===*/}
                <div className='w-full lg:w-1/2 xl:2-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud To be one of the Nation's Best</h2>
                    <p className='text__para'>
                    As a healthcare provider, I am proud to be associated with this platform. It has allowed me to reach a wider patient base and offer my services to those in need.
                     The seamless appointment booking system has made managing my schedule more efficient.
                    </p>

                    <p className='text__para mt-[30px]'>The telehealth services have enabled me to provide medical care to patients in remote areas, ensuring everyone gets the attention they deserve. 
                    The commitment to patient education and reviews ensures transparency and trust. This platform truly values the well-being of both patients and healthcare providers, and I'm honored to be a part of it."
                    </p>
                    <Link to='/'>
                        <button className='btn'>
                            Learn More
                        </button>
                    </Link>
                </div>    
        </div>
    </div>
  </section>
}

export default About