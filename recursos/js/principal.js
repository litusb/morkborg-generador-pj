function rollD (n) {
    return Math.floor(Math.random() * n) + 1
}

let agilitat = generate_text("estadistiques");
let presencia = generate_text("estadistiques");
let força = generate_text("estadistiques");
let resistencia = generate_text("estadistiques");
let carrega = parseInt(força) + 8;
let carrega_max = 2 * carrega;

let pc = parseInt(resistencia) + rollD(8);
if (pc < 1) {pc = 1}; //Com a mínim tens 1 PC

let presagis = rollD(2);

$("#nom").html(generate_text("nom"));
$("#plata").html((rollD(6)+rollD(6))*10);
    let menjar = rollD(4);
$("#menjar").html(menjar + " " + ((menjar > 1) ? "dies" : "dia"));

let inventari_1 = generate_text("inventari_1");
(inventari_1 != '')?$("#inventari_1").html(inventari_1):$("#inventari_1").html("res");

let inventari_2 = generate_text("inventari_2");
$("#inventari_2").html(inventari_2);

let inventari_3 = generate_text("inventari_3");
$("#inventari_3").html(inventari_3);

let pergami = false;
if ((inventari_2.search("pergamí") != -1)||(inventari_3.search("pergamí") != -1))  {pergami = true;};
pergami ? console.log("Hi ha un pergamí") : console.log("No hi ha pergamí");

$("#torxes").html(parseInt(presencia) + 4);
$("#llantia").html(parseInt(presencia) + 6);
$("#farmaciola").html(parseInt(presencia) + 4);

pergami ? $("#arma").html(generate_text("arma_pergami")):$("#arma").html(generate_text("arma"));
$("#fletxes").html(parseInt(presencia) + 10);
$("#virots").html(parseInt(presencia) + 10);

pergami ? $("#armadura").html(generate_text("armadura_pergami")):$("#armadura").html(generate_text("armadura"));

$("#agilitat").html(agilitat);
$("#presencia").html(presencia);
$("#força").html(força);
$("#resistencia").html(resistencia);

$("#carrega").html(carrega);
$("#carrega_max").html(carrega_max);

$("#pc").html(pc);

$("#presagis").html(presagis);
