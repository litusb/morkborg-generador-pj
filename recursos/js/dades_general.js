// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// warrior_data.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// json format
// http://en.wikipedia.org/wiki/JSON
  gen_data['nom'] = [
     'Aerg-Tval'
    , 'Agn'
    , 'Arvant'
    , 'Belsum'
    , 'Belum'
    , 'Brint'
    , 'Börda'
    , 'Daeru'
    , 'Eldar'
    , 'Felban'
    , 'Gotven'
    , 'Graft'
    , 'Grin'
    , 'Grittr'
    , 'Haerü'
    , 'Hargha'
    , 'Harmug'
    , 'Jotna'
    , 'Karg'
    , 'Karva'
    , 'Katla'
    , 'Keftar'
    , 'Klort'
    , 'Kratar'
    , 'Kutz'
    , 'Kvetin'
    , 'Lygan'
    , 'Margar'
    , 'Merkari'
    , 'Nagl'
    , 'Niduk'
    , 'Nifehl'
    , 'Prügl'
    , 'Qillnach'
    , 'Risten'
    , 'Svind'
    , 'Theras'
    , 'Therg'
    , 'Torvul'
    , 'Törn'
    , 'Urm'
    , 'Urvarg'
    , 'Vagal'
    , 'Vatan'
    , 'Von'
    , 'Vrakh'
    , 'Vresi'
    , 'Wemut'
  ];

  gen_data['estadistiques'] = {
      '1-4': '-3'
    , '5-6': '-2'
    , '7-8': '-1'
    , '9-12': '0'
    , '13-14': '+1'
    , '15-16': '+2'
    , '17-20': '+3'
  };

  gen_data['inventari_1'] = {
      '1-2':  ''
    , '3':  '<strong>motxilla</strong> per a 7 articles de tamany normal'
    , '4':  '<strong>sac</strong> per a 10 articles de tamany normal'
    , '5':  '<strong>carretó petit</strong>'
    , '6':  '<strong>ase</strong>, no està malament'
  };

  gen_data['inventari_2'] = [
      '<strong>corda</strong> de 30 peus'
    , '<span id="torxes"></span> <strong>torxes</strong>'
    , '<strong>Llàntia</strong> amb oli per a <span id="llantia"></span> hores'
    , '<strong>tira de magnesi</strong>'
    , '<strong>pergamí impur</strong> de {pergami_impur}'
    , '<strong>agulla punxeguda</strong>'
    , '<strong>farmaciola</strong> <span id="farmaciola"></span> usos (atura hemorràgies/infeccions i cura D6 PC)'
    , '<strong>trampa per ossos</strong> (Presència dif.14 per detectar-la, D8 de mal)'
    , '<strong>bomba</strong> (ampolla segellada, D10 mal)'
    , 'una <strong>ampolla de verí vermell</strong> ' + rollD(4) + 'dosis (Fortalesa dif.12 o D10 de mal)'
    , '<strong>crucifix de plata</strong>'
  ];

  gen_data['inventari_3'] = [
      '<strong>elixir de vida</strong> amb ' + rollD(4) + 'dosis (cura D6 PC i elimina la infecció)'
    , '<strong>pergamí sagrat</strong> de {pergami_sagrat}'
    , '<strong>gos petit però feroç</strong> (D6+2 PC, mossegada D4, només t\'obeeix a tu)'
    , rollD(4) + ' <strong>micos</strong> que t\'ignoren però t\'estimen (D4+2 PC, cop de puny/mossegada D4)'
    , '<strong>perfum exquisit</strong> valorat en 25p'
    , '<strong>caixa d\'eines</strong> amb 10 claus, estenalles, martell, serra petita i trepant'
    , '<strong>cadena pesant</strong> 15 peus'
    , '<strong>ganxo d\'escalada</strong>'
    , '<strong>escut</strong> (-1 PC mal o fer que l\'escut es trenqui per ignorar un atac)'
    , '<strong>palanca</strong> (D4 mal)'
    , '<strong>llard de porc</strong> (pot servir com a 5 àpats en cas de necessitat)'
    , '<strong>tenda</strong>'
  ];

  gen_data['arma'] = [
     '{arma_pergami}'
    , 'arc (d6, amb <span id="fletxes"></span> fletxes)'
    , 'maça amb cadenes'
    , 'ballesta (d8, amb <span id="virots"></span> virots)'
    , 'Zweihänder (d10)'
  ];

  gen_data['arma_pergami'] = [
      'fèmur (d4)'
    , 'bastó (d4)'
    , 'espasa curta (d4)'
    , 'ganivet (d4)'
    , 'martell de guerra (d6)'
    , 'espasa (d6)'
  ];

  gen_data['armadura'] = [
      '{armadura_pergami}'
    , 'armadura mitja (mal -d4, nivell 2) Dif+2 a proves d\'agilitat incl. defensa'
    , 'armadura pesada (mal -d6, nivell 3) Dif+4 a proves d\'agilitat, Dif+2 defensa'
  ];

  gen_data['armadura_pergami'] = [
      'sense armadura (nivell 0)'
    , 'armadura lleugera (mal -d2, nivell 1)'
  ];

  gen_data['pergami_impur'] = [
      '«Les palmeres obren la porta del sud»'
    , '«Llengua d\'Eris»'
    , '«Te-le-qui-ne-si»'
    , '«Levitació de Lucy-Fire»'
    , '«Dimoni dels capilars»'
    , '«Nou signes violetes desfermen la tempesta»'
    , '«Metzhuotl encega el teu ull»'
    , '«Psicopom fastigós»'
    , '«La parpella encega la ment»'
    , '«Mort»'
  ];

  gen_data['pergami_sagrat'] = [
      'Gràcia d\'un sant mort'
    , 'Gràcia per un pecador'
    , 'Xiuxiuejos a travès de La Porta'
    , 'Ègida del dolor'
    , 'Destí insatisfet'
    , 'Discurs bestial'
    , 'Carruatge de la falsa nit / albada'
    , 'Pas hermètic'
    , 'Fulgor consumidor de Roskoe'
    , 'Sintaxi enoquiana'
  ];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function rollD (n) {
    return Math.floor(Math.random() * n) + 1
  }
