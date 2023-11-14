import React from 'react'
import Carousel from './Carousel'
import HomeCard from './HomeCard'
import CarouselCategory from './CarouselCategory'
import CarouselProduct from './CarouselProduct'


const HomePage = () => {
  return (
    <div className='bg-amazonclone-background'>
        <div className="min-w-[1000px] max-w-[1500px] m-auto ">
            
            <Carousel/>
            <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80 ">
                <HomeCard title={"we have some cards here"} 
                img={"../images/home_grid_1.jpg"}
                link={"see terms and conditions"}  />
                <HomeCard title={"we have some cards here"} 
                img={"../images/home_grid_2.jpg"}
                link={"see terms and conditions"}  />
                <HomeCard title={"we have some cards here"} 
                img={"../images/home_grid_3.jpg"}
                link={"see terms and conditions"}  />
                <HomeCard title={"we have some cards here"} 
                img={"../images/home_grid_4.jpg"}
                link={"see terms and conditions"}  />
                <HomeCard title={"we have some cards here"} 
                img={"../images/home_grid_5.jpg"}
                link={"see terms and conditions"}  />
                <HomeCard title={"we have some cards here"} 
                img={"../images/home_grid_6.jpg"}
                link={"see terms and conditions"}  />
                <HomeCard title={"we have some cards here"} 
                img={"../images/home_grid_7.jpg"}
                link={"see terms and conditions"}  />
               <HomeCard title={"we have some cards here"} 
                img={"../images/home_grid_8.jpg"}
                link={"see terms and conditions"}  />
                {/* advertise */}
                <div className='m-3 pt-4'>
                    <img className='xl:hidden' src={"../images/banner_image_2.jpg"} alt="adv" />
                </div>
            </div>
            {/* CarouselProduct */}
            <CarouselProduct/>
            {/* carouselCategory */}
            <CarouselCategory/>
            {/* Banner Image */}
            <div className='h-[200px]'>
                <img className='h-[100%] m-auto' src= {"../images/banner_image.jpg"} alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default HomePage