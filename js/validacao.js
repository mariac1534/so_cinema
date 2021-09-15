function validacao(){
    let email = document.getElementById("e-mail");
    let name = document.getElementById("name");
    let comment = document.getElementById("comment");

    let sty_1 = "1.5px solid red";
    let sty_1 = "1.5px solid #68437D";

    input_style(email, sty_1, sty_2);
    input_style(name, sty_1, sty_2);
    input_style(comment, sty_1, sty_2);
}

function input_style(input, style_1, style_2){
    if(!input.checkValidity()){
        input.style.border = style_1;
        return input.style.border;
    }

    if(input.checkValidity()){
        input.style.border = style_2;
        return input.style.border;
    }
}