import React, { useState } from 'react';
import './header.scss';
import HamburgerButton from '../hamburgerButton';
import Button from '../button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../../assets/katsin-logo-black.png';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/call.png';
import event from '../../assets/icons/event.png';
import { useNavigate } from 'react-router';
import { useLocation, NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const Header = ({ showSideBar, setShowSideBar, showModalIcon }) => {
    const navigate = useNavigate();
    const loc = useLocation();

    // 🔥 MODAL STATE
    const [showModal, setShowModal] = useState(false);

    const handleLogoClick = () => {
        navigate('/');
        setShowSideBar(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // 👉 LINKS
    const openTableLink =
        'https://www.opentable.com/restref/client/?restref=1323949&lang=en-US&ot_source=Restaurant%20website&corrid=e66c4cc3-0cde-4670-8a9b-dadfa75f931b';

    const sevenRoomsLink =
        'https://www.sevenrooms.com/explore/katsinrestaurantanddiningbar/reservations/create/search/';

    // 👉 CLICK HANDLERS
    const handleOpenTable = () => {
        if (window.gtag) {
            window.gtag('event', 'reservation_click', {
                platform: 'opentable',
                page_location: window.location.href,
            });
        }

        window.open(openTableLink, '_blank');
        setShowModal(false);
    };

    const handleSevenRooms = () => {
        if (window.gtag) {
            window.gtag('event', 'reservation_click', {
                platform: 'sevenrooms',
                page_location: window.location.href,
            });
        }

        window.open(sevenRoomsLink, '_blank');
        setShowModal(false);
    };

    return (
        <>
            <header tabIndex="0" className="header">
                <HamburgerButton
                    isActive={showSideBar}
                    onClick={() => setShowSideBar(!showSideBar)}
                />

                {/* LOCATION */}
                <a
                    href="https://www.google.com/maps/place/Katsin+Restaurant+and+Dining+Bar/@34.1470597,-118.2672905,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c1c8f527aba1:0xaa8b3daade84e096!8m2!3d34.1470553!4d-118.2647156!16s%2Fg%2F11y2344l5j?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="location-link"
                >
                    <img src={location} alt="img" />
                    <span>515 W Broadway, Unit 111, Glendale, CA 91204</span>
                </a>

                {/* LOGO */}
                <div className="logo" onClick={handleLogoClick}>
                    <LazyLoadImage
                        src={logo}
                        alt="img"
                        width={'auto'}
                        height={'100%'}
                        effect="opacity"
                    />
                </div>

                {/* PHONE */}
                <a href="tel:+18188693030" className="phone-link">
                    <img src={phone} alt="img" />
                    <span>+1 (818) 869 - 3030</span>
                </a>

                {/* EVENT ICON */}
                {showModalIcon && (
                    <NavLink to="/events">
                        <div className="event-icon">
              <span className="rise-shake">
                <img src={event} alt="img" />
              </span>
                        </div>
                    </NavLink>
                )}

                {/* 🔥 UPDATED BUTTON */}
                <Button
                    onClick={() => setShowModal(true)}
                    className={`white ${loc.pathname.includes('events') ? 'inevents' : ''}`}
                >
                    Book Now
                </Button>
            </header>

            {/* 🔥 MODAL */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Reserve Your Table</Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-center">
                    <p style={{ marginBottom: '20px' }}>
                        Choose your preferred reservation platform
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                        }}
                    >
                        <button className="book-btn" onClick={handleOpenTable}>
                            Book with OpenTable
                        </button>

                        <button className="book-btn" onClick={handleSevenRooms}>
                            Book with SevenRooms
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;