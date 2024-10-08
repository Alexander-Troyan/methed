import { Route, Routes } from "react-router-dom"
import { Products } from "./Products"
import { Promo } from "./Promo"
import { Order } from "./Order"
import { Cart } from "./Cart"

export const Main = () => {
    return (
        <main className="main">

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Promo />

                            <Products />
                        </>
                    }>

                </Route>

                <Route path="/cart" element={
                    <>
                        <Cart> </Cart>
                        <Order> </Order>
                    </>
                }>

                </Route>
            </Routes>

        </main>
    )
}