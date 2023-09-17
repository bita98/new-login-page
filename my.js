function myFunction() {
    var x , text;
    x = document.getElementById('fname').value;

    if (x == "" || x == null ) {
text = 'Please Enter Your Email';
document.getElementById('demo').innerHTML = text;
return false;
    } 
    if (isNaN(x)) {
            text = 'Please Enter The Number';
            document.getElementById('demo').innerHTML = text;
            document.getElementById('demo').style.color = 'blue'; 
            document.getElementById('fname').style.backgroundColor = 'skyblue';
            return false;
    }
    if (x <= 10) {
        text = 'The Number Is Less Than 10';
        document.getElementById('demo').innerHTML = text;
        document.getElementById('demo').style.color = 'purple';
        document.getElementById('fname').style.backgroundColor = 'rgb(230, 197, 230)';
        return false;
    }
    if (x >= 10) {
        text = 'The Number Is More Than 10';
        document.getElementById('demo').innerHTML = text;
        document.getElementById('demo').style.color = 'orange';
        document.getElementById('fname').style.backgroundColor = 'rgb(235, 178, 132)';

        return false;
    }
   
}
