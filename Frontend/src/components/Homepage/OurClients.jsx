import React, { Component } from "react";
import Slider from "react-slick";
import "../static/css/ourClients.css"

export default class SimpleSlider extends Component {
  render() {
    const clientInfo = [
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-14.b70522096637.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-17.f7b3ac704eea.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-11.927addbb9f9f.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-4.6206ea4c3df0.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-16.a92ca4590aed.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-12.28514b802a17.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-10.6ddc850de742.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-8.a37aa5ef2a71.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-11.927addbb9f9f.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-7.e185b5fa5013.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-6.5ce027033de8.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-3.822e9f462687.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-16.a92ca4590aed.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-14.b70522096637.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-1.650924abd4eb.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-5.25e22e472477.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-12.28514b802a17.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-10.6ddc850de742.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-8.a37aa5ef2a71.jpg' },
      { img: 'https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/10/client-11.927addbb9f9f.jpg' },
    ]
    const clientsList = []
    clientInfo.forEach((information) => {
      clientsList.push(
        <div>
          <div className="flex w-auto">
            <img src={information.img} alt="" />
          </div>
        </div>
      )
    })
    const settings = {
      dots: true,
      className: "center",
      infinite: true,
      speed: 1000,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
      <div className=" text-center mx-5 lg:mx-20 mt-10">
        <h2 className="text-3xl font-bold text-left">Clients and <span className="text-green-600">Partners</span></h2>
        <div className="mt-10 mx-5">
          <Slider  {...settings}>
            {clientsList}
          </Slider>
        </div>
      </div>
    );
  }
}













