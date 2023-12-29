import React from 'react'

const FeatureCards = () => {
  return (
    <div>
        <h1 className='mt-10 mb-2 text-center capitalize text-4xl'>Our Services</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-7 justify-items-center'>
            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                    <div className='flex items-center justify-center'>
                        <span className='text-indigo-800 text-8xl p-3' style={{ fontSize: "8rem" }}>
                            <ion-icon name="alarm-outline"></ion-icon>
                        </span>
                    </div>
                    <div className='px-6 pb-4 text-center'>
                        <div className='font-bold text-xl mb-2'>
                            Save Time
                        </div>
                        <p className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quos libero hic repellendus repellat neque sapiente eveniet itaque explicabo a sequi dignissimos fuga?
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-10'> 
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                    <div className='flex items-center justify-center'>
                        <span className='text-indigo-800 text-8xl p-3' style={{ fontSize: "8rem" }}>
                            <ion-icon name="magnet-outline"></ion-icon>
                        </span>
                    </div>
                    <div className='px-6 pb-4 text-center'>
                        <div className='font-bold text-xl mb-2'>
                            Connect
                        </div>
                        <p className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quos libero hic repellendus repellat neque sapiente eveniet itaque explicabo a sequi dignissimos fuga?
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-10'>
                <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                    <div className='flex items-center justify-center'>
                        <span className='text-indigo-800 text-8xl p-3' style={{ fontSize: "8rem" }}>
                            <ion-icon name="color-wand-outline"></ion-icon>                    
                        </span>
                    </div>

                    <div className='px-6 pb-4 text-center'>
                        <div className='font-bold text-xl mb-2'>
                            Grow
                        </div>
                        <p className='text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quos libero hic repellendus repellat neque sapiente eveniet itaque explicabo a sequi dignissimos fuga?
                        </p>
                    </div>

                </div>

                
                
            </div>

        </div>
    </div>
  )
}

export default FeatureCards