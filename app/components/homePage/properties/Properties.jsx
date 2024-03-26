import React from 'react'
import redwood from '@/public/assets/redwood.png'
import PropertyCards from './Cards'

const Properties = () => {
  return (
      <section className='flex flex-col gap-10  bg-visionBlue p-10'> 
         <div >
            <PropertyCards propertyImage={redwood} propertyName={'Redwood Farms'}/>
            <PropertyCards propertyImage={redwood} propertyName={'Narashinga Puram'}/>
             </div>
      </section>
  )
}

export default Properties