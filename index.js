const API = require('./lib.js');
const readlineSync = require('readline-sync');
const delay = require("delay");

(async () => {
    console.log(`#============== [ S-Earn Auto Refferal Kah? ] ==============#`)

    const username = readlineSync.question('Username ? ');
    const password = readlineSync.question('Password ? ');
    const no = readlineSync.question('No HP ? ');

    const login = await API.login(username, password);

    if (login.msg == "SUCCESS") {
        console.log("Login Sukses!");
        const address = await API.address(login.data.token, no);

        if (address.msg == "Successfully modified") {
            for (var i = 1; i <= 20; i++) {
                const mkorder = await API.mkorder(login.data.token);
                if (mkorder.msg == "You don't have enough orders, Would you like to get more?") {
                    console.log("Order Habis!");
                    break;
                }
                const confirm = await API.confirm(login.data.token, mkorder.data.orderid);

                console.log(JSON.stringify(confirm));
                await delay(2000);
            }
        } else {
            console.log("Add Address Gagal!")
        }
    } else {
        console.log("Login Gagal!")
    }




})();
