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
    , '9-12': '±0'
    , '13-14': '+1'
    , '15-16': '+2'
    , '17-20': '+3'
  };

  gen_data['inventari_1'] = {
      '1-2':  ''
    , '3':  '<strong>motxilla</strong> per a 7 articles de mida normal'
    , '4':  '<strong>sac</strong> per a 10 articles de mida normal'
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
    , 'una <strong>ampolla de verí vermell</strong> ' + rollD(4) + ' dosis (Fortalesa dif.12 o D10 de mal)'
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
    , 'armadura mitjana (mal -d4, nivell 2) Dif+2 a proves d\'agilitat incl. defensa'
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
    , 'Xiuxiuejos a través de La Porta'
    , 'Ègida del dolor'
    , 'Destí insatisfet'
    , 'Discurs bestial'
    , 'Carruatge de la falsa nit / albada'
    , 'Pas hermètic'
    , 'Fulgor consumidor de Roskoe'
    , 'Sintaxi enoquiana'
  ];

  gen_data['classe'] = [
      'ànima perduda'
    // , 'desertor ullalut'
    // , 'escòria nascuda al clavegueram'
    // , 'ermità esotèric'
    // , 'reialesa en desgràcia'
    // , 'sacerdot heretge'
    // , 'herborista ocultista'
  ];

  gen_data['descripcio'] = [
    'Resulta que {trets_terribles} i a més {trets_terribles}. A sobre, {cossos_trencats}. I per acabar-ho d\'adobar {mal_costum} <br /> Per si tot això no fos poc, {historia_pertorbadora}'
  ];

  gen_data['trets_terribles'] = [
      'ets {trets_terribles_ets}'
    , 'tens {trets_terribles_tens}'
  ];

  gen_data['trets_terribles_ets'] = [
      'agreujat sense parar'
    , 'cruel'
    , 'egocèntric'
    , 'nihilista'
    , 'propens a l\'abús de substàncies'
    , 'bipolar'
    , 'astut'
    , 'venjatiu'
    , 'covard'
    , 'mandrós'
    , 'sospitós'
    , 'despietat'
    , 'preocupat'
    , 'amargat'
    , 'enganyós'
    , 'malbaratador'
    , 'arrogant'
    , 'un bocamoll'
  ];

  gen_data['trets_terribles_tens'] = [
     'complex d\'inferioritat'
    , 'problemes amb l\'autoritat'
  ];

  gen_data['cossos_trencats'] = [
     'tens una mirada fixa i maníaca'
    , 'vas cobert de (per a alguna gent) tatuatges blasfems'
    , 'tens la cara podrida i portes una màscara'
    , 'vas perdre tres dits del peu i vas coix'
    , 'sembles famolenc: demacrat i pàl·lid'
    , 'tens una mà reemplaçada per un ganxo oxidat (d6)'
    , 'tens les dents deteriorades'
    , 'ets bella de manera inquietant, i enervantment neta'
    , 'portes les mans cobertes de nafres'
    , 'tens una cataracta que s\'estén lentament però inexorable en ambdós ulls'
    , 'portes els cabells llargs entortolligats, on hi viu almenys una panerola'
    , 'tens les orelles trencades i esclafades'
    , 'pateixes tremolors i tartamudeig per mal nerviós o estrès'
    , 'ets corpulent, voraç i baveges'
    , 'a una mà et falten els dits polze i índex, agafes les coses com un llamàntol'
    , 'tens el nas vermell i inflat d\'alcohòlic'
    , 'tens cara de maníac en repòs, fer amics és difícil'
    , 'pateixes peu d\'atleta crònic i fa pudor'
    , 'duus un ull acabat d\'apunyalar i pudent cobert amb un pegat'
    , 'tens les ungles esquerdades i negres, potser a punt de caure'
  ];

  gen_data['mal_costum'] = [
     'reculls de manera obsessiva petites pedres esmolades.'
    , 'mai fas servir una fulla sense provar-la a la teva pròpia carn. Duus els braços coberts de cicatrius.'
    , 'no pots deixar de beure un cop has començat.'
    , 'ets addicte al joc. Has de fer apostes cada dia. Si perds, puges l\'aposta i tornes a jugar.'
    , 'no pots tolerar crítiques de cap mena. Acabes enrabiat i plorant.'
    , 'ets incapaç d\'anar al gra. En realitat, mai has acabat una història.'
    , 'el teu millor amic és una calavera. Porta-la sempre amb tu, explica-li-ho tot, no facis confiança en ningú més.'
    , 'et furgues el nas tan profundament que sagna.'
    , 'et rius histèricament dels teus propis acudits que després expliques en detall.'
    , 'ets nihilista. Insisteixes a dir-li a tot el món que ets nihilista i a explicar per què'
    , 'ets un menjador empedreït d\'insectes.'
    , 'creus que la resposta a l\'estrès és una exhibició estètica. Com pitjor es posen les coses, més elegant s\'ha de ser.'
    , 'tens un dipòsit permanent de flegmes a la gola. Tusses, esbufegues, escups i empasses de forma constant.'
    , 'ets un PIRÒMAN.'
    , 'perds constantment objectes importants i oblides dades vitals.'
    , 'ets un agitador de merda insegur. Parles de qui acaba de sortir de l\'habitació.'
    , 'tartamudeges quan dius mentides.'
    , 'et pixes de riure bojament als pitjors moments possibles.'
    , 'xiules quan intentes amagar-te. Sempre negaràs aquest fet. (Xiules quan surti 5, 7, 9, 11 o 13 a un d20).'
    , 'fas joies amb les dents dels morts, si és que això es pot considerar un mal costum.'
  ];

  gen_data['historia_pertorbadora'] = [
     'ets perseguit per un homicidi involuntari. Hi ha una recompensa.'
    , 'tens un deute enorme. El deute s\'està negociant amb grups cada cop més despietats.'
    , 'tens un article rar i buscat.'
    , 'tens una ferida maleïda que mai cicatritza.'
    , 'vas tenir un romanç il·legal, immoral i secret amb un membre de la família reial. Tens proves.'
    , 'ets un membre fugit d\'una secta. Aterritt i paranoic. Hi ha altres sectaris per tot arreu.'
    , 'ets un lladre d\'identitats que fa poc va matar i reemplaçar a aquesta persona.'
    , 'vas ser desterrat i repudiat per fets no especificats. Mai més podràs tornar a casa.'
    , 'ets desertor militar després d\'haver presenciat una massacre. Hi ha recompensa pel teu cap. Ets perseguit per antics amics.'
    , 'vas assassinar fa molt poc a un parent proper. FA MOLT POC.'
    , 'has muntat de forma incorrecta (o no?) un cub trencaclosques, fent despertar a una abominació adormida.'
    , 'a les criatures malvades els agrada l\'olor del teu rastre i s\'hi senten atretes, portant el desastre al seu pas.'
    , 'una ferida de batalla va deixar una estella de metall que s\'apropa lentament al teu cor. Cada dia hi ha un 2% de probabilitat en que hi arribi.'
    , 'la violència et va obligar a anar al desert. Creus que els arbres que s\'agiten et xiuxiuegen. Parles, crides i ataques als arbres.'
    , 'estàs maleït amb compartir els malsons aliens. Dorms molt, molt lluny.'
    , 'estàs en guerra permanent amb tots els còrvids. No hi ha contacte sense una mica de violència. Portes una fona.'
    , 'després de somiar amb un temple subterrani d\'un deu oblidat, comprens el cant d\'insectes i cucs.'
    , 'ets rastrejat i observat per un gólem després d\'un tracte que saps que ha sigut esborrat de la teva ment.'
    , '«Cremar o ser cremat» és el destí que has acceptat.'
    , 'La teva carn es cura el doble de ràpid, però els teus companys el doble de lent. Veus un «àngel de la guarda» amb molts ulls.'

  ];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  function rollD (n) {
    return Math.floor(Math.random() * n) + 1
  }
