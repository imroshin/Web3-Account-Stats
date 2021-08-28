Moralis.initialize("ykxttcS4WYVR2yFf0zPcHevZyYN7oRYzdiK3M0SU"); //Application ID
Moralis.serverURL = "https://tcn1hfljw7ku.moralisweb3.com:2053/server"; // Server URL

async function login() {

        Moralis.Web3.authenticate().then(function (user){
            user.set("username",document.getElementById('username').value);  //Gets the value of username and email from the input - 
            user.set("email",document.getElementById('email').value);    //fields and passes it onto metamask to authenticate
            user.save(); 
            deactivateControls();   //To Disable the login features after user logs in 
        });
}

function deactivateControls(){
    document.getElementById('login').setAttribute("disabled",null);     
    document.getElementById('username').setAttribute("disabled",null);
    document.getElementById('email').setAttribute("disabled",null);

}