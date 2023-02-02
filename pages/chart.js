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
        const products = InfoUser.chart;
        // console.log(products);

        if(products.length > 1) {
            const containerCard = document.querySelector('.card-container');
            containerCard.innerHTML = '';
            products.forEach((el,i) => {
                if(el !== 'empty') {
                    // console.log(products[i][0])
                    containerCard.innerHTML += `
                    <div class="card-product">
                        <div class="check-box">
                            <input type="checkbox" name="" id="" class="check-box-product">
                        </div>
                        <div class="chart-info-product">
                            <div class="box-img">
                                <img src="${products[i][2]}">
                            </div>
                            <div class="box-info-product">
                                <p class="chart-name-product">${products[i][0]}</p>
                                <p class="chart-price-product">${products[i][1]}</p>
                                <button class="delete-product">Hapus</button>
                            </div>
                        </div>
                    </div>
                    `
                }
                
            })            
            
        }else {
            const containerCard = document.querySelector('.card-container');
            containerCard.innerHTML = `<h4>Keranjang belanja masih kosong</h4>`
        }

        // delete
        const buttonDelete = document.querySelectorAll('.delete-product');
        buttonDelete.forEach((el, i) => {
            el.onclick = event => {
                const test = InfoUser.chart.filter(el => {
                    if(el !== 'empty') {
                        // console.log(el[0] == event.target.parentElement.querySelector('.chart-name-product').innerText) 
                        return el[0] !== event.target.parentElement.querySelector('.chart-name-product').innerText;
                    }                    
                });
                InfoUser.chart = ['empty'];
                test.forEach(el => InfoUser.chart.push(el));
                saveToFirebase(InfoUser);
                this.afterRender();
            }
        });

        // checkbox 
        const checkBox = document.querySelectorAll('.check-box-product');
        let totalPriceProduct = 0;
        checkBox.forEach(el => {
            el.onclick = (event) => {
                const priceProduct = event.target.parentElement.parentElement.querySelector('.chart-price-product').innerText.substr(3,5);
                const spanPriceProduct = document.querySelector('#total-harga-product');
                if(event.target.checked === true) {                    
                    totalPriceProduct += +priceProduct;
                    spanPriceProduct.innerText = totalPriceProduct;
                }else {
                    totalPriceProduct -= +priceProduct;
                    spanPriceProduct.innerText = totalPriceProduct;
                }
            }
        })

    }
}

export default Chart;