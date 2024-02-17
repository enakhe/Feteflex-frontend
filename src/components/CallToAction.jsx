import { Fragment } from 'react'
import GlassInput from './GlassInput'
import AvatarStack from './AvatarStack'

import landingImage from './../assets/landing.png'
import curve from './../assets/curve.png'
import item1 from './../assets/item1.png'

const CallToAction = () => {
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
        </Fragment>
    )
}

export default CallToAction