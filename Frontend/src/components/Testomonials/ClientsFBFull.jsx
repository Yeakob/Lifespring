import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


const ClientsFBFull = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
        return images;
    }

    let images = importAll(require.context('../static/img/Clients FeedBack', false, /\.(png|jpe?g|svg)$/));
    const feedImages = []
    Object.keys(images).forEach(function (key) {
        feedImages.push(
            <div className='mb-5'>
                <img src={images[key]} alt="" />
            </div>
        );
    });

    return (
        <div>
            <Navbar />
            <div className='w-full h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold'>
                <a className='hover:text-black' href={"/"}>Home</a> / Clients Feedback
            </div>
            <div className='lg:m-20 m-5'>
                <div className="lg:mx-10">
                    <div className="p-3 grid lg:grid-cols-3 lg:gap-5">
                        {feedImages}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ClientsFBFull