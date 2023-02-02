import InfoUser from "../scripts/data/user.js";
import { saveToFirebase } from "../scripts/firebase-database.js";

const Chart = {
    async render() {
        return `
            <header>
            <div class="text-title">
                <h1>Tupperware KW</h1>
            </div>        
            </header>


            <main>
                <div class="main-container-chart">
                    <div class="container-chart">
                        <h3>Keranjang Belanja</h3>
                        <div class="card-container">
                            
                        </div>
                    </div>

                    <div class="container-ringkasan-belanja">
                        <h3>Ringkasan Belanja</h3>
                        <div class="ringkasan-belanja">
                            <p class="text-total-harga">Total Harga</p>
                            <p class="total-harga">Rp<span id="total-harga-product">0</span></p>

                            <button class="btn-checkout">Checkout</button>
                        </div>
                    </div>
                </div>
                
            </main>

            <footer>
                <p>Copyright 2023 &copy; TupperwareKW</p>
            </footer>
        `;
    },

    async afterRender() {
    }
}

export default Chart;