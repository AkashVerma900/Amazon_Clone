import React, { useEffect } from 'react'
import Banner from './Banner'
import "../home/home.css";
import Slide from './Slide';
import { Divider } from '@mui/material';
import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";


const Maincomp = () => {

    const { products = [], error } = useSelector((state) => state.getproductsdata);
    // console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <>
            {error && (
                <div style={{ padding: "1rem", background: "#fff3cd", color: "#856404", margin: "1rem" }}>
                    Could not load products: {String(error)}. Is the API running on port 5007? Start it with{" "}
                    <code>npm start</code> in the project root, or run <code>npm run dev</code> to start API + web together.
                </div>
            )}
            <div className="home_section">
                <div className="banner_part">
                    <Banner />
                </div>
                <div className="slide_part">
                    <div className="left_slide">
                        <Slide title="Deal Of The Day" products={products} />
                    </div>
                    <div className="right_slide">
                        <h4>Festive latest launches</h4>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                        <a href="#">see more</a>
                    </div>
                </div>

                <Slide title="Today's Deal" products={products} />

                <div className="center_img">
                    <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
                </div>

                <Slide title="Best Seller" products={products} />
                <Slide title="Upto 80% off" products={products} />
            </div>

            <Divider />

        </>
    )
}

export default Maincomp;

{/* {
            products.map((e)=>{
                return (
                    <>
                        <h3>{e.description}</h3>
                    </>
                )
            })
        } */}
