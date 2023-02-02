import InfoUser from "../scripts/data/user.js";
import { getFromFirebase, saveToFirebase } from "../scripts/firebase-database.js";

const Profile = {
    async render() {
        return `
        <header>
        <div class="text-title">
            <h1>Tupperware KW</h1>
        </div>        
        </header>


        <main>

            <div class="profile">
                <div class="profile-img">
                    <img src="images/profil.png" alt="" id="profile">
                </div>
                <div class="info-profile">
                    <h3>Info Profil</h3>
                    <table>
                        <tr>
                            <th>User ID</th>
                            <td>: <span id="uid">2912312212</span></td>
                        </tr>
                        <tr>
                            <th>Nama</th>
                            <td>: <input type="text" name="profile-name" id="profile-name" value="Nakano Nastar" disabled></td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>: email@email.com</td>
                        </tr>
                        <tr>
                            <th>Nomor HP</th>
                            <td>: <input type="text" name="profile-phone" id="profile-phone" value="6285812343412" disabled></td>
                        </tr>
                        <tr class="row-button">
                            <td colspan="2"><button id="btn-edit-profile" class="btn-edit">Edit</button><button id="btn-save-profile" class="btn-save">Save</button></td>
                        </tr>
                    </table>
                </div>
                <div class="info-alamat">
                    <h3>Info Alamat</h3>
                    <table>
                        <tr>
                            <th>Alamat Lengkap</th>
                            <td>: <input type="text" name="profile-address" id="profile-address" value="JL. Satu No.19 Kelurahan Pinggi Pantai" disabled></td>
                        </tr>
                        <tr>
                            <th>Nama Penerima</th>
                            <td>: <input type="text" name="receive-name" id="receive-name" value="Nakano Nastar" disabled></td>
                        </tr>
                        <tr>
                            <th>No HP</th>
                            <td>: <input type="text" name="receive-phone" id="receive-phone" value="6285812343412" disabled></td>
                        </tr>
                        <tr class="row-button">
                            <td colspan="2"><button id="btn-edit-address" class="btn-edit">Edit</button><button id="btn-save-address" class="btn-save">Save</button></td>
                        </tr>
                    </table>
                    
                </div>
                <div class="logout">
                    <button id="btn-logout">Log Out</button>
                </div>
            </div>

            
            
        </main>

        <footer>
            <p>Copyright 2023 &copy; TupperwareKW</p>
        </footer>
        
        `
    },

    async afterRender() {
        console.log(InfoUser)
        const UID = document.querySelector('#uid')
        const name = document.querySelector('#profile-name');
        const noHP = document.querySelector('#profile-phone');
        const addres = document.querySelector('#profile-address');
        const nameReceive = document.querySelector('#receive-name');
        const noHPReceive = document.querySelector('#receive-phone');

        UID.innerText = InfoUser.uid;
        name.value = InfoUser.name;
        noHP.value = InfoUser.noHP;
        addres.value = InfoUser.address;
        nameReceive.value = InfoUser.nameReceive;
        noHPReceive.value = InfoUser.noHPReceive;

        // edit profile and save profile
        const btnEditProfile = document.querySelector('#btn-edit-profile');
        const btnSaveProfile = document.querySelector('#btn-save-profile');

        btnEditProfile.onclick = () => {
            const formInput = document.querySelectorAll('.info-profile table input');
            formInput.forEach(el => {
                console.log(el)
                el.removeAttribute('disabled')
            })
        }

        btnSaveProfile.onclick = () => {
            alert('save');
            InfoUser.name = name.value;
            InfoUser.noHP = noHP.value;

            console.log(InfoUser);

            saveToFirebase(InfoUser);
            this.render();
        }

        // edit address
        const buttonEditAddress = document.querySelector('#btn-edit-address');
        const buttonSaveAddress = document.querySelector('#btn-save-address');

        buttonEditAddress.onclick = () => {
            const formInput = document.querySelectorAll('.info-alamat table input');
            formInput.forEach(el => {
                el.removeAttribute('disabled');
            })
        }

        buttonSaveAddress.onclick = () => {
            alert('save');
            InfoUser.address = addres.value;
            InfoUser.nameReceive = nameReceive.value;
            InfoUser.noHPReceive = noHPReceive.value;

            saveToFirebase(InfoUser);
        }

        // logout
        const btnLogout = document.querySelector('#btn-logout');
        btnLogout.onclick = () => {
            alert('logout');
            firebase.auth().signOut();
        }
    }
}


export default Profile;