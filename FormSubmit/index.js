


document.querySelector('#submit').addEventListener("click",formSubmit)

function formSubmit() {
    const names = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://mybookings.requestcatcher.com/",true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
        }
    };
    var data = {
                name: names,
                email: email,
                password: password
    };
    xhttp.send(JSON.stringify(data));
    console.log(data);
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('password').value="";
    

}



/*$.ajax(
    {
        url: 'https://mybookings.requestcatcher.com/',
        type: 'post',
        data: {
            name: names,
            email:email,
            password:password
            },
        success: function(){
            console.log('The form Successfully Submitted')
        }
    }
);
*/





