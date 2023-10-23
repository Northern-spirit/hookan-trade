import React from "react";
import "./annoucementPage.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AnnoucementPage = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
   };
   return (
      <div className="wrapper">
         <div className="announcementBox">
            <div className="wrapperLeftBlock">
               <div className="header">
                  <h1>Продам кальян BLADE One M (red)</h1>
                  <div className="imageBlock">
                     <Slider {...settings}>
                        <div><img className="img" alt="souvenir1" src='https://bladehookah.com/img/products/blade-one-m/red.png' /></div>
                        <div><img className="img" alt="souvenir2" src='https://bladehookah.com/img/products/blade-one-m/connector.png' /></div>
                        <div><img className="img" alt="souvenir3" src='https://bladehookah.com/img/products/blade-one-m/diffuser.png' /></div>
                     </Slider>
                  </div>
               </div>
               <div className="descriptionWrapper">
                  <h2>Описание</h2>
                  <div className="descriptionBlock">
                     <p className="description">Бренд: Blade</p>
                     <p className="description">Матерал колбы: Стекло</p>
                     <p className="description">Цвет: Красный</p>
                     <p> Продам свою Pandora classic, мундштук Hoob.
                        Нержавейка, состояние хорошее.
                        Покупался для личного пользования.
                        Всё что на фото, колбы нет!
                        10000₽</p>
                  </div>

               </div>
            </div>
            <div className="wrapperRight">
               <h1 className="price">10000 ₽</h1>
               <button className="phoneBtn btn">Показать телефон</button>
               <button className="messageBtn btn">Отправить сообщение</button>
               <button className="socialBtn btn">Ссылка на соц. сеть </button>
               <div>Добавить в избранное ❤</div>
               <p>Илья Дудонькин</p>
               <div>Дата публикации 12.09.2023</div>
            </div>
         </div>

         <div className="wrapperBottom">
            <p className="titleBottom">Похожие обьявления </p>
            <div className="productCard">
               <div className="item">
                  <h2 >Душа</h2>
                  <img className="itemImg" src="https://www.uglistuff.ru/wa-data/public/shop/products/91/12/1291/images/1358/1358.970.JPG" alt="Душа" />
               </div>
               <div className="item">
                  <h2>Кенди шоп</h2>
                  <img className="itemImg" src="https://rbkt.org/uploads/734/733636/bff.jpg" alt="Душа" />
               </div>
               <div className="item">
                  <h2>Spider</h2>
                  <img className="itemImg" src="https://smokeshop24.ru/image/cache/catalog/kalyany-aladin-folder/0/ge-cache-data-kalyani-aladin-havanna-bordo-500x500-800x800.jpg" alt="Душа" />
               </div>
               <div className="item">
                  <h2>Халил мамун</h2>
                  <img className="itemImg" src="https://hookahhouse.ru/upload/medialibrary/795/79576734b2afbb8ebc8b476777f1f9e1.jpg" alt="Душа" />
               </div>
               <div className="item">
                  <h2>Блейд черно золотой</h2>
                  <img className="itemImg" src="https://www.club-tobacco.ru/upload/iblock/a9d/kjcnqs7m0ex2p91ts75x2jlvyn82r4yr.png" alt="Душа" />
               </div>
               <div className="item">
                  <h2>Блейд зеленый</h2>
                  <img className="itemImg" src="https://www.club-tobacco.ru/upload/iblock/fda/6aqj7ptkqaroocw9tqdqym9ujqfr1fqb.png" alt="Душа" />
               </div>

            </div>
         </div>
      </div>
   )
}