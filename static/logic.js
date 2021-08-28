Moralis.initialize("ykxttcS4WYVR2yFf0zPcHevZyYN7oRYzdiK3M0SU"); //Application ID
Moralis.serverURL = "https://tcn1hfljw7ku.moralisweb3.com:2053/server"; // Server URL

const chainToQuery = 'bsc testnet';

async function login() {

        Moralis.Web3.authenticate().then(function (user){
            user.set("username",document.getElementById('username').value);  //Gets the value of username and email from the input - 
            user.set("email",document.getElementById('email').value);    //fields and passes it onto metamask to authenticate
            user.save(); 
            deactivateControls();   //To Disable the login features after user logs in 
            populate();
        });
}

function deactivateControls(){
    document.getElementById('login').setAttribute("disabled",null);     
    document.getElementById('username').setAttribute("disabled",null);
    document.getElementById('email').setAttribute("disabled",null);

}

async function populate(){
    const balances = await Moralis.Web3API.account.getTokenBalances({chain: chainToQuery}).then(buildTableBalances);

}

function buildTableBalances(data){
    document.getElementById('resultBalances').innerHTML =                  //innerHTML is the way to write html inside javascript
                        `<table class="table table-dark table-striped" id="balancesTable">
                         </table>`
    const table = document.getElementById("balancesTable");
                                                                        // thead - table head, tr- table row, th-table headers
    const rowHeader = `<thead>                                         
                            <tr>
                                <th>Token</th>
                                <th>Symbol</th>
                                <th>Balance</th>
                            </tr>
                        </thead>`
    table.innerHTML += rowHeader;

    for (let i=0; i < data.length; i++){                                 // td - is table data
        let row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].symbol}</td>
                        <td>${data[i].balance/10**18}</td>    
                    </tr>`
        table.innerHTML += row;
    }

}