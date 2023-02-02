import { dataImg, nameProduck } from "../scripts/data/data-produck.js";
import InfoUser from "../scripts/data/user.js";
// import { saveToFirebase } from "../scripts/firebase-database.js";

const Home = {
    async render() {
        return `
        <section id="image-slider">
            <div class="image-slider-container">
                <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/1/28/70391ac1-e5c1-4673-9a5b-504e4c8f2606.jpg.webp?ect=4g" alt="">
                <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/1/30/ab29be5e-aeab-4adc-97d9-d032635f7404.jpg.webp?ect=4g" alt="">
            </div>
        </section>

        <section id="section-produk">
            <div class="text-info-PU">
                <h3>Produk Unggulan</h3>
            </div>
            <div class="list-produk">
                
            </div>
        </section>     
        `
    },

    async afterRender() {
        // image slider
        const imageSliderContainer = document.querySelector('.image-slider-container');
        let count = 1;
        function imageSlider() {            
            setTimeout(() => {
                if(count % 2 == 0) {
                    imageSliderContainer.style.transform = 'translateX(-1210px)';
                }else {
                    imageSliderContainer.style.transform = 'translateX(0)';
                }                
                count+=1;
                imageSlider();
            }, 4000);
        }

        imageSlider();

        const listProduk = document.querySelector('.list-produk');
        dataImg.forEach((el, index) => {
            listProduk.innerHTML += `
            <div class="card-produk">
                <div class="img-produk">
                    <img src="${el}" alt="">
                </div>
                <div class="min-info-produk">
                    <p class="name-produk">${nameProduck[index]}</p>
                    <p class="price-produk">Rp25.000</p>
                    <button class="add-to-chart">Tambah Keranjang</button>
                </div>
            </div>
            `
        });

        // add tochart
        const btnChart = document.querySelectorAll('.add-to-chart')
        btnChart.forEach(el => {
            el.onclick = (event) => {
                const nameProduct = event.target.parentElement.querySelector('.name-produk').innerText;
                const priceProduct = event.target.parentElement.querySelector('.price-produk').innerText;
                const imgProduct = event.target.parentElement.parentElement.querySelector('.img-produk img').getAttribute('src');
                console.log(nameProduct, priceProduct);
                InfoUser.chart.push([nameProduct, priceProduct, imgProduct]);
                console.log(InfoUser)
                saveToFirebase(InfoUser);
                alert('Berhasil menambahkan ke keranjang');
            }
        })
    }
}

export default Home;