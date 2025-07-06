

function FeatureDown() {
    return (
        <section className='col-start-1 col-end-5 flex flex-col items-center justify-center gap-4'>
            <div className='w-full flex flex-col items-center justify-center p-8 bg-DarkPrimary text-Light'>
                <h3 className='text-Headline_four font-Roboto pb-4'>It started with a small idea</h3>
                <p className='pb-8 text-Body_small font-Open_Sans'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                <button className='w-full p-4 bg-Primary'>View collection</button>
            </div>
            <figure>
                <img className='w-full h-full' src='../assets/FeatureDown.svg' alt='Feature' />
            </figure>
            
        </section>
    )
}

export default FeatureDown