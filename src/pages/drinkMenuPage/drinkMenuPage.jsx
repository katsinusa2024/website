import React, { useEffect, useState } from 'react';
import './drinkMenuPage.scss';
import { scrollToSection } from '../../utils/scrollToSection';
import video from '../../assets/video/ice-water.mp4';
import ScrollToHeader from '../../components/scrollToHeader';
import { newdrinkMenu } from './newmock';

const DrinkMenuPage = () => {
  const [myRef, setMyRef] = useState();

  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  return (
    <div className={`drinkMenuPage`}>
      <ScrollToHeader links={newdrinkMenu} setMyRef={setMyRef} />
      <video className="video-background" autoPlay muted loop playsInline preload={'metadata'}>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        {newdrinkMenu.map(item => {
          return (
            <div key={item.id} id={item.title.toUpperCase()} className="content">
              <h2>{item.title.toUpperCase()}</h2>
              <ul className="drinkList">
                {item.drinks.map(x => {
                  return (
                    <li key={x.id} className="listItem">
                      <p className="sepDrinkTitle">{x.drinkTitle}</p>
                      {x.drink.map(y => {
                        return (
                          <div key={y.id} className="sepDrink">
                            <p className="drinkName">{y.name}</p>
                            {!!y.description && <p className="drinkDesc">{y.description}</p>}
                            <p className="drinkPrice">{y.price}</p>
                          </div>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DrinkMenuPage;
