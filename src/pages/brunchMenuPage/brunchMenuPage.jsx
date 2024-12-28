import React, { useEffect, useState } from 'react';
import './brunchMenuPage.scss';
import ScrollToHeader from '../../components/scrollToHeader';
import { foodMenu } from './mock';
import { scrollToSection } from '../../utils/scrollToSection';
import video from '../../assets/video/steak-video.mp4';

const BrunchMenuPage = () => {
    const [myRef, setMyRef] = useState();

    useEffect(() => {
        scrollToSection(myRef);
    }, [myRef]);

    return (
        <div className={`foodMenuPage`}>
            <ScrollToHeader links={foodMenu} setMyRef={setMyRef} />
            <video className="video-background" autoPlay muted loop playsInline preload={'metadata'}>
                <source src={video} type="video/mp4" />
            </video>
            <div className="container">
                {foodMenu.map(item => {
                    return (
                        <div key={item.id} id={item.title.toUpperCase()} className="content">
                            <h2>{item.title.toUpperCase()}</h2>
                            {!!item.description ? <p className="title-desc">{item.description}</p> : ''}
                            <ul className="foodList">
                                {item.type.map(food => {
                                    return (
                                        <li key={food.id}>
                                            <p className="foodName">{food.name.toUpperCase()}</p>
                                            <div className="foodDescription">
                                                {food.description &&
                                                    food.description.map((item, index) => {
                                                        return (
                                                            <p
                                                                className={`foodDescription ${food.isMany ? 'many' : ''}`}
                                                                key={index}
                                                            >
                                                                {item.name}
                                                            </p>
                                                        );
                                                    })}
                                            </div>
                                            <p className="foodPrice">{food.price}</p>
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

export default BrunchMenuPage;
