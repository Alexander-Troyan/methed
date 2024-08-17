export const Order = () => (
    <section className="order">
        <div className="container">
            <h2 className="order__title">Доставка</h2>
            <form className="order__form">
                <input className="order__input" type="text" name="name" placeholder="Имя"></input>
                <input className="order__input" type="text" name="phone" placeholder="Телефон"></input>
                <input className="order__input order__input-address" type="text" name="address" placeholder="Адрес"></input>


                <fieldset className="order__payment">
                    <h3 className="order__payment-title">Оплата:</h3>
                    <label className="order__payment-label">
                        <input className="order__radio" type="radio" name="payment" value="card">
                        </input>
                        Картой
                    </label>

                    <label className="order__payment-label">
                        <input className="order__radio" type="radio" name="payment" value="cash" defaultChecked>
                        </input>
                        Наличные
                    </label>
                </fieldset>
            </form>
        </div>
    </section>
)