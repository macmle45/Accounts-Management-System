function init() {
    var x = 0;
    var load_bar = document.getElementById("load_bar");
    var strt_lg = document.getElementById("strt_lg");
    var btn0 = document.getElementById("btn2");
    var btn1 = document.getElementById("btn3");
    var btn2 = document.getElementById("btn5");
    var btn3 = document.getElementById("btn6");

    var load = setInterval(function() {
        setInterval(function(){
            if(x==400) {
                clearInterval(load);
                strt_lg.setAttribute("class", "strt_lg_pos_hide");
                load_bar.setAttribute("class", "load_bar_pos_hide");
                btn0.setAttribute("id", "btn2_show");
                btn1.setAttribute("id", "btn3_show");
                btn2.setAttribute("id", "btn5_show");
                btn3.setAttribute("id", "btn6_show");
            }
            x++;
        },500);
        load_bar.style.width = x+'px';
        load_bar.innerHTML = parseInt(x/4)+'%';
    },50);
}

function newAccnt() {
    document.getElementById("table_of_users").setAttribute("class", "table_hide");
    document.getElementById("creat_user").setAttribute("class", "creat_user_show");
    document.getElementById("btn2_show").setAttribute("id", "btn2");
    document.getElementById("btn3_show").setAttribute("id", "btn3");
    document.getElementById("btn5_show").setAttribute("id", "btn5");
    document.getElementById("btn6_show").setAttribute("id", "btn6");
}

function cncl(){
    document.getElementById("nm").value = '';
    document.getElementById("p0").setAttribute("class", "p_err");

    document.getElementById("lm").value = '';
    document.getElementById("p1").setAttribute("class", "p_err");

    document.getElementById("nck").value = '';
    document.getElementById("p2").setAttribute("class", "p_err");

    document.getElementById("ml").value = '';
    document.getElementById("p3").setAttribute("class", "p_err");

    document.getElementById("passwd").value = '';
    document.getElementById("p4").setAttribute("class", "p_err");

    document.getElementById("creat_user").setAttribute("class", "creat_user_hide");
    document.getElementById("btn2").setAttribute("id", "btn2_show");
    document.getElementById("btn3").setAttribute("id", "btn3_show");
    document.getElementById("btn5").setAttribute("id", "btn5_show");
    document.getElementById("btn6").setAttribute("id", "btn6_show");
}

function check_cnt(){
    //p0
    if(document.getElementById("nm").value.length > 0)
        document.getElementById("p0").setAttribute("class", "p_entr");
    else
        document.getElementById("p0").setAttribute("class", "p_err");

    //p1
    if(document.getElementById("lm").value.length > 0)
        document.getElementById("p1").setAttribute("class", "p_entr");
    else
        document.getElementById("p1").setAttribute("class", "p_err");

    //p2
    if(document.getElementById("nck").value.length > 0)
        document.getElementById("p2").setAttribute("class", "p_entr");
    else
        document.getElementById("p2").setAttribute("class", "p_err");

    //p3
    if(document.getElementById("ml").value.length > 0)
        document.getElementById("p3").setAttribute("class", "p_entr");
    else
        document.getElementById("p3").setAttribute("class", "p_err");

    //p4
    if(document.getElementById("passwd").value.length >= 8)
        document.getElementById("p4").setAttribute("class", "p_entr");
    else
        document.getElementById("p4").setAttribute("class", "p_err");

    //p5
    if(document.getElementById("img").value.length > 0)
        document.getElementById("p5").setAttribute("class", "p_entr");
    else
        document.getElementById("p5").setAttribute("class", "p_err");
}

var id_counter = 0;

function createAccnt(){
    var table = document.getElementById("table_of_users");

    var nm = document.getElementById("nm").value;
    var lst_nm = document.getElementById("lm").value;
    var nck = document.getElementById("nck").value;
    var eml = document.getElementById("ml").value;
    var passwd = document.getElementById("passwd").value;
    var img = document.getElementById("img").value;

    var new_account = {
        photo: img,
        name: nm, 
        lastname: lst_nm, 
        nick: nck,
        email: eml,
        password: passwd
    };

    if(nm.length == 0 || lst_nm.length == 0 || nck.length == 0 || eml.length == 0 || passwd.length == 0)
        alert("Uzupełnij wszystkie pola!");
    else{
        alert("Konto zostało utworzone pomyślnie");
        console.log(new_account);
        var new_tr = document.createElement("tr");
        for(var i=0; i<7; i++){
            switch(i){
                case 0:
                    var new_td = document.createElement("td");
                    new_td.innerHTML = id_counter;
                    break;
                case 1:
                    var new_td = document.createElement("td");
                    new_td.innerHTML = new_account.photo;
                    break;
                case 2:
                    var new_td = document.createElement("td");
                    new_td.innerHTML = new_account.name;
                    break;
                case 3:
                    var new_td = document.createElement("td");
                    new_td.innerHTML = new_account.lastname;
                    break;
                case 4:
                    var new_td = document.createElement("td");
                    new_td.innerHTML = new_account.nick;
                    break;
                case 5:
                    var new_td = document.createElement("td");
                    new_td.innerHTML = new_account.email;
                    break;
                case 6: 
                    var new_td = document.createElement("td");
                    new_td.innerHTML = new_account.password;
                    break;
            }
            new_tr.appendChild(new_td);
        }
        table.appendChild(new_tr);
        cncl();
    }
    id_counter++;
}

function deleteAccnt(){

}

function showTable(){
    document.getElementById("creat_user").setAttribute("class", "creat_user_hide");
    document.getElementById("table_of_users").setAttribute("class", "table_show");
    document.getElementById("bck_arrw").setAttribute("class", "arrw_show");
    document.getElementById("btn2_show").setAttribute("id", "btn2");
    document.getElementById("btn3_show").setAttribute("id", "btn3");
    document.getElementById("btn5_show").setAttribute("id", "btn5");
    document.getElementById("btn6_show").setAttribute("id", "btn6");
}

function hideTable(){
    document.getElementById("table_of_users").setAttribute("class", "table_hide");
    document.getElementById("bck_arrw").setAttribute("class", "arrw_hide");
    document.getElementById("btn2").setAttribute("id", "btn2_show");
    document.getElementById("btn3").setAttribute("id", "btn3_show");
    document.getElementById("btn5").setAttribute("id", "btn5_show");
    document.getElementById("btn6").setAttribute("id", "btn6_show");

}