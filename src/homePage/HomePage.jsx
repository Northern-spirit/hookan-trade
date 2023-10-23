import React from "react";
import "./homePage.css"

export const HomePage = () => {
   return (
      <div className="wrapper">
         <div className="searchWrapper" >
            <div>LOGO</div>
            <input placeholder="Введите название кальяна" className="inputStyle" type="text" />
            <button className="btnSearch">Найти</button>
         </div>
         <div className="wrapperSort">
            <div className="checkboxWrapper">
               <input type="checkbox" className="checkBox"/>
               <p>Только с фото</p>
            </div>
            <div>
               <select name="dog-names" className="selectCase">
                  <option value="expencive">Дороже</option>
                  <option value="cheap">Дешевле</option>
                  <option value="new">Новые</option>
               </select>
            </div>
         </div>
         <h1 className="titleH1">Найдено кальянов</h1>
         <div className="wrapperCard">
            <div className="wrapperImage" ><img className="imgHomePageCard" alt="souvenir1" src='https://ecosystem.umnus.ru/files/product/image/default.png' /></div>
            <div className="wrapperText">
               <h1> Продам Кальян iziMO</h1>
               <div className="price">4200 руб.</div>
               <div className="miniDescription">Продам кальян в хорошем состоянии. Быстрым  небольшой торг!</div>
               <div className="wrapperDescrCityTime">
                  <div>Екатеринбург</div>
                  <div>8 часов назад</div>
               </div>
            </div>
         </div>
         <div className="wrapperCard">
            <div className="wrapperImage" ><img className="imgHomePageCard" alt="souvenir1" src='https://ecosystem.umnus.ru/files/product/image/default.png' /></div>
            <div className="wrapperText">
               <h1> Продам Кальян iziMO</h1>
               <div className="price">4200 руб.</div>
               <div className="miniDescription">Продам кальян в хорошем состоянии. Быстрым  небольшой торг!</div>
               <div className="wrapperDescrCityTime">
                  <div>Екатеринбург</div>
                  <div>8 часов назад</div>
               </div>
            </div>
         </div>
         <div className="wrapperCard">
            <div className="wrapperImage" ><img className="imgHomePageCard" alt="souvenir1" src='https://ecosystem.umnus.ru/files/product/image/default.png' /></div>
            <div className="wrapperText">
               <h1> Продам Кальян iziMO</h1>
               <div className="price">4200 руб.</div>
               <div className="miniDescription">Продам кальян в хорошем состоянии. Быстрым  небольшой торг!</div>
               <div className="wrapperDescrCityTime">
                  <div>Екатеринбург</div>
                  <div>8 часов назад</div>
               </div>
            </div>
         </div>
         <div className="wrapperCard">
            <div className="wrapperImage" ><img className="imgHomePageCard" alt="souvenir1" src='https://ecosystem.umnus.ru/files/product/image/default.png' /></div>
            <div className="wrapperText">
               <h1> Продам Кальян iziMO</h1>
               <div className="price">4200 руб.</div>
               <div className="miniDescription">Продам кальян в хорошем состоянии. Быстрым  небольшой торг!</div>
               <div className="wrapperDescrCityTime">
                  <div>Екатеринбург</div>
                  <div>8 часов назад</div>
               </div>
            </div>
         </div>
         <div className="wrapperCard">
            <div className="wrapperImage" ><img className="imgHomePageCard" alt="souvenir1" src='https://ecosystem.umnus.ru/files/product/image/default.png' /></div>
            <div className="wrapperText">
               <h1> Продам Кальян iziMO</h1>
               <div className="price">4200 руб.</div>
               <div className="miniDescription">Продам кальян в хорошем состоянии. Быстрым  небольшой торг!</div>
               <div className="wrapperDescrCityTime">
                  <div>Екатеринбург</div>
                  <div>8 часов назад</div>
               </div>
            </div>
         </div>

      </div>
   )
}