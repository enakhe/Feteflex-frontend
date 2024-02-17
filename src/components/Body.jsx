import { Fragment } from 'react'
import GlassInput from './GlassInput'
import AvatarStack from './AvatarStack'
import { Button } from '@material-tailwind/react'

import landingImage from './../assets/landing.png'
import curve from './../assets/curve.png'
import item1 from './../assets/item1.png'
import item2 from './../assets/item2.png'
import item3 from './../assets/item3.png'
import logoMulti from '../assets/logo-multi.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'


const Body = () => {
    return (
        <Fragment>
            <div className="mx-auto max-w-3xl lg:pt-10 lg:max-w-7xl">
                <div className="grid py-20 gap-5 sm:grid-cols-1 items-center p-6 lg:px-8 lg:grid-cols-2 md:grid-cols-2">
                    <div className="animate-fade-up animate-once animate-delay-300 relative">
                        <h1 className="lg:text-3xl mt-5 text-align text-white tracking-tight text-2xl font-semibold">
                            Your <span className='text-[#8663A6]'>market place</span> for event services
                            Discover, Book, and get Booked <br />
                            With a few clicks!</h1>
                        <img alt='curve' src={curve} className='w-48 absolute bottom-30' />
                        <p className="md:text-sm text-sm py-5 font-normal text-white">Be the first to experience the event revolution, <br />
                            by Joining our community!</p>
                        <GlassInput />
                        <div className='lg:my-10 my-5'>
                            <p className='text-white text-sm mb-2'>Our Waitlist</p>
                            <AvatarStack />
                        </div>
                    </div>
                    <div className="grid animate-fade-up animate-once animate-delay-400 lg:justify-items-end justify-items-center">
                        <img src={landingImage} className='w-96' alt="Landing Image" />
                    </div>
                </div>
            </div>
            <img src={item1} alt='Item 1' className='absolute bottom-0 w-48' />

            <Fragment>
                <div className='mx-auto max-w-3xl lg:max-w-7xl mb-40'>
                    <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-2 md:grid-cols-2">
                        <div className=''>
                            <h3 className='text-[#8563A6] text-3xl font-bold'>About Us</h3>
                            <h5 className='text-[#2A2346 text-lg my-5 font-semibold'>Transforming Africa by revolutionizing the event industry
                                with technology and innovation</h5>
                            <p>
                                Our mission is to revolutionize the event industry by providing a unified platform that streamlines the booking process and enhances visibility for event professionals. With our user-friendly interface and advanced search options, we simplify event planning, offering real-time availability updates and secure transactions through our escrow payment system. By offering event professionals a dedicated space to market their services effectively,
                                Join us as we redefine the way events are planned, executed, and enjoyed.
                            </p>
                            <Button className='my-5 capitalize font-family bg-[#2A2346]'>Join Waitlist</Button>
                        </div>
                        <div className="grid animate-fade-up animate-once animate-delay-400 lg:justify-items-end justify-items-center">
                            <img src={logoMulti} className='w-96' alt="Landing Image" />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={item2} alt='Item 1' className='absolute bottom-0 right-0 w-24' />
                </div>
            </Fragment>

            <Fragment>
                <div className='mx-auto max-w-3xl lg:max-w-7xl z-0'>
                    <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-2 md:grid-cols-2">
                        <div className="grid animate-fade-up animate-once animate-delay-400 lg:justify-items-end justify-items-center">
                            <img src={image2} className='w-full' alt="Landing Image" />
                        </div>
                        <div className=''>
                            <h3 className='text-[#8563A6] text-3xl font-bold'>Features</h3>
                            <h5 className='text-[#2A2346 text-lg my-5 font-semibold'>Event Planning made easy</h5>
                            <p>
                                Your ultimate solution for seamless event planning. With our innovative platform, booking event
                                services is a breeze. From finding the perfect venue to securing talented professionals,
                                we simplify the process, ensuring your event is a resounding success.
                                Say goodbye to stress and hello to effortless event planning with Feteflex.
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className='mx-auto max-w-3xl lg:max-w-7xl'>
                    <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-2 md:grid-cols-2">
                        <div className=''>
                            <p>

                                We are dedicated to curating a seamless event experience that prioritizes convenience and satisfaction. 
                                Our platform boasts an array of sophisticated features designed to enhance every aspect of event management and participation.

                                Our user-friendly interface ensures effortless booking, allowing attendees to secure their spots with just a few clicks. 
                                With instant updates, participants stay informed about event details, schedule changes, and important announcements in real-time, guaranteeing a smooth and stress-free experience.
                            </p>
                        </div>
                        <div className="grid animate-fade-up animate-once animate-delay-400 lg:justify-items-end justify-items-center">
                            <img src={image3} className='w-full' alt="Landing Image" />
                        </div>
                    </div>
                </div>
            </Fragment>

            <Fragment>
                <div className='mx-auto max-w-3xl lg:max-w-7xl'>
                    <div className="grid gap-5 sm:grid-cols-1 items-center p-6 lg:px-2 lg:grid-cols-2 md:grid-cols-2">
                        <div className="grid animate-fade-up animate-once animate-delay-400 lg:justify-items-end justify-items-center">
                            <img src={image3} className='w-full' alt="Landing Image" />
                        </div>
                        <div className=''>
                            <p>
                                We are dedicated to curating a seamless event experience that prioritizes convenience and satisfaction.
                                Our platform boasts an array of sophisticated features designed to enhance every aspect of event management and participation.

                                Our user-friendly interface ensures effortless booking, allowing attendees to secure their spots with just a few clicks.
                                With instant updates, participants stay informed about event details, schedule changes, and important announcements in real-time, guaranteeing a smooth and stress-free experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={item3} alt='Item 1' className='absolute bottom-20 left-0 w-24' />
                </div>
            </Fragment>

        </Fragment>
    )
}

export default Body