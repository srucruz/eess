const receitas = [
    {
        id: 1,
        nome: 'Risoto de Queijo',
        imagem: './assets/img/risoto-de-queijo.jpg',
        ingredientes: ['2 xícaras (chá) de arroz', '1/4 de xícara (chá) de azeite', '1/2 xícara (chá) de cebola ralada', '3 dentes de alho', '1/2 xícara (chá) de vinho branco seco', '1 litro de caldo de carne quente', '1/2 xícara (chá) de queijo prato picado', '1/2 xícara (chá) de queijo gorgonzola picado', '1/2 xícara (chá) de mussarela picada', '1/2 xícara (chá) de queijo ralado', 'Sal e pimenta-do-reino a gosto',],
        modoPreparo: 'Aqueça o azeite e doure a cebola e o alho. Junte o arroz e refogue até começar a grudar na panela. Tempere com o sal, adicione o vinho e, sem parar de mexer, acrescente o caldo de carne em conchas. Mexa até quase todo o líquido ser absorvido, para adicionar mais caldo. O arroz deve ficar macio, porém firme, e com aspecto de empapado. Junte os queijos em pedaços e mexa até eles derreterem. Polvilhe com a pimenta e sirva!'
    },
    {
        id: 2,
        nome: 'Quiche de Queijo',
        imagem: './assets/img/quiche-de-queijo.jpg',
        ingredientes: ['250 g de farinha de trigo', '125 g de manteiga gelada', '1 ovo', '1 colher (chá) de água', 'sal a gosto', 'manteiga e farinha de trigo para untar e enfarinhar', '1 xícara (chá) de leite', '1 xícara (chá) de queijo emmenthal ralado grosso', '1 xícara (chá) de creme de leite fresco', '4 ovos', '80 g de queijo parmesão ralado grosso'],
        modoPreparo: 'Unte uma fôrma redonda de 20 cm de diâmetro, de preferência própria para quiche, com manteiga e polvilhe com farinha. Reserve. Corte a manteiga em cubinhos. Numa tigela, misture todos os ingredientes com as mãos até formar uma massa homogênea. Faça uma bola e embrulhe com filme. Leve à geladeira por 10 minutos. Numa superfície enfarinhada, abra a massa com um rolo. Transfira para a fôrma preparada. Com as mãos, pressione contra o fundo e as laterais. Retire o excesso das laterais. Reserve. Preaqueça o forno a 180 ºC (temperatura média). Polvilhe o queijo ementhal sobre o fundo da fôrma previamente forrada com a massa. Numa tigela, junte os ovos, o leite e o creme de leite. Misture bem com um batedor de arame. Tempere com sal e pimenta-do-reino moída. Regue a massa com o creme de ovos e polvilhe com o parmesão ralado. Leve ao forno para assar por cerca de 30 minutos ou até que fique dourada. Retire a quiche do forno e sirva quente ou em temperatura ambiente.'
    },
    {
        id: 3,
        nome: 'Bolinha de queijo',
        imagem: './assets/img/bolinha_de_queijo.jpg',
        ingredientes: ['1 xícara (chá) de leite', '1 colher (sopa) de margarina', '1 pitada de sal', '1 xícara (chá) de farinha de  trigo', '1 gema', 'óleo para fritar', 'queijo branco ou mussarela a gosto'],
        modoPreparo: `Em uma panela, adicione o leite, a farinha de trigo, a margarina, a gema e o sal. Leve ao fogo e mexa com um garfo até que a massa solte da panela, depois deixe esfriar. Modele a massa em bolinhas e recheie com o queijo, depois passe o bolinho na gema de ovo e na farinha de rosca. Em uma panela, adicione o óleo, depois de quente adicione as bolinhas e frite-as.`
    },
    {
        id: 4,
        nome: 'Lasanha Quatro Queijos',
        imagem: './assets/img/lasanha_4_queijo.jpg',
        ingredientes: ['200g de Lasanha com ovos Barilla', '1 litro de leite', '80g de farinha de trigo', '80g de manteiga sem sal', '150g de parmesão150g de queijo gorgonzola', '150g de queijo gruyere', '150g de muçarela de búfala', 'Noz moscada, sal e pimenta do reino a gosto'],
        modoPreparo: 'Ralar o queijo parmesão e o gruyere separadamente. Cortar as muçarelas de búfala ao meio, e os demais queijos em cubos pequenos. Reservar todos separadamente. Preparar o molho bechamel: em uma caçarola, derreter a manteiga e acrescentar a farinha. Cozinhar até que comece a fazer uma espuma esbranquiçada.'
    },
    {
        id: 5,
        nome: 'Creme de Queijo Cremoso',
        imagem: './assets/img/creme-de-queijo.jpg',
        ingredientes: ['1 colher (sopa) de manteiga', 'meia cebola ralada', '1 colher (sopa) de farinha de trigo', '6 colheres (sopa) de MOLICO® Proteína', '1 e meia xícara (chá) de água', '1 pitada de noz-moscada ralada', '100 g de queijo mozarela ralado', '3 colheres (sopa) de queijo parmesão ralado grosso', '1 colher (chá) de sal', '1 colher (sopa) de salsa picada'],
        modoPreparo: 'Em uma panela, derreta a manteiga e refogue a cebola. Junte a farinha de trigo e mexa rapidamente até dourar e formar uma massa. Acrescente o MOLICO Proteína dissolvido na água aos poucos, e cozinhe mexendo sempre, por cerca de 10 minutos em fogo baixo ou até a mistura adquirir consistência cremosa. Acrescente os queijos, o sal e misture bem. Sirva com a salsa picada.'
    },
    {
        id: 6,
        nome: 'Pão de Queijo Fácil',
        imagem: './assets/img/pao-de-queijo-temperado.jpg',
        ingredientes: ['meia xícara (chá) de água', '2 colheres (sopa) de azeite', 'meia colher (chá) de sal', '1 e meia xícara (chá) de polvilho azedo', 'meia xícara (chá) de queijo parmesão ralado', '1 ovo', 'meia xícara (chá) de Leite MOLICO® em Pó', 'meia colher (chá) de sementes de chia',],
        modoPreparo: 'Em uma panela, coloque a água, o azeite, o sal e deixe ferver. Em um recipiente, coloque o polvilho e escalde-o, com o auxílio de colher de cabo longo, com a mistura fervente. Acrescente o queijo, o ovo, o Leite MOLICO e a chia, sovando bem após cada adição. Unte as mãos com azeite e enrole bolinhas. Coloque-as em uma assadeira e leve ao forno médio (180°C), preaquecido, por cerca de 30 minutos. Sirva.'
    },
    {
        id: 7,
        nome: 'Pudim de Queijo',
        imagem: './assets/img/pudim_de_queijo.jpg',
        ingredientes: ['** CALDA **', 'meia xícara (chá) de açúcar', '4 colheres (sopa) de água fervente', '** PUDIM **', '1 Caixinha de Leite MOÇA® Light', '1 e meia medida (da lata) de Leite Líquido MOLICO® Total Cálcio', '2 xícaras (chá) de queijo minas padrão ralado', '3 ovos',],
        modoPreparo: `Em uma panela de fundo largo, coloque o açúcar e leve ao fogo baixo deixando derreter suavemente. Quando estiver bem dourado, junte a água fervente e mexa com uma colher de cabo longo. Deixe ferver até dissolver os torrões de açúcar e a calda engrossar. Forre com a calda uma forma com furo central (19 cm de diâmetro) e reserve. Em um liquidificador, bata todos os ingredientes até que fique uma mistura homogênea. Despeje na forma reservada, cubra com papel-alumínio e asse em banho-maria, em forno médio (180°C), preaquecido, por cerca de 1 hora e 30 minutos. Depois de frio, leve à geladeira por cerca de 6 horas. Desenforme e sirva a seguir.`
    },
    {
        id: 8,
        nome: 'Torta de Queijo e Goiabada',
        imagem: './assets/img/cheesecake-calda-vermelha.jpg',
        ingredientes: ['** MASSA **', '200 g de Biscoito NESFIT® Aveia e Mel 160g', '100 g de manteiga', '** RECHEIO **', '4 ovos', '250 g de ricota', '1 copo de NESTLÉ Requeijão Tradicional Cremoso 200g', 'meia xícara (chá) de açúcar', '1 colher (chá) de essência de baunilha', '1 colher (chá) de raspas da casca de limão', '** COBERTURA **', '1 xícara (chá) de goiabada picada (200 g)', '5 colheres (sopa) de água'],
        modoPreparo: 'Em um liquidificador, bata o Biscoito NESFIT aos poucos até obter uma farofa. Transfira para um recipiente, junte a manteiga e misture bem. Forre o fundo de uma forma de aro removível (25 cm de diâmetro) e reserve. Em um liquidificador, bata todos os ingredientes e coloque sobre a massa da torta reservada. Leve ao forno baixo (150°C), preaquecido, por aproximadamente 60 minutos ou até que fique firme. Deixe esfriar e leve à geladeira por cerca de 4 horas. Em uma panela, misture a goiabada com a água, leve ao fogo até dissolver e reserve. Espalhe a cobertura sobre a cheesecake antes de servir.'
    },
    {
        id: 9,
        nome: 'Mousse de Queijo',
        imagem: './assets/img/mousse_de_queijo.jpg',
        ingredientes: ['1 envelope de Gelatina em Folha Incolor Dr. Oetker', '1 copo de Requeijão', '150 g de muçarela cortado', '1 pote de creme de ricota (250g)', '2 xícaras chá de Leite morno', '1 colher sobremesa de cebolas picada', 'Sal a gosto', 'salsinha a gosto picada', 'pimenta do reino preta, branca ou rosa a gosto', '100 g tomates cereja cortados'],
        modoPreparo: 'Hidrate a gelatina em Folhas Dr. Oetker conforme as instruções da embalagem. No liquidificador coloque o requeijão, o queijo muçarela, o creme de ricota e o leite morno. Acrescente a gelatina dissolvida, a cebola e o sal e bata por 2 minutos. Acrescente a salsinha e bata ligeiramente. Coloque em uma fôrma de cone de 20cm untada com azeite e leve à geladeira por 4 horas ou até endurecer. Desenforme, decore com as pimentas e os tomates cereja. Sirva com torradinhas e salada de folhas.'
    },
    {
        id: 10,
        nome: 'Suflê de Queijo com Espinafre',
        imagem: './assets/img/sufle-de-espinafre.jpg',
        ingredientes: ['1 cebola picada', '5 dentes de alho espremidos', '2 colheres (sopa) de margarina', '1 maço de espinafre escaldado e picado', 'Sal e pimenta-do-reino', '2 colheres (sopa) de farinha diluída em 1 xícara (chá) leite', '3 gemas peneiradas', '50 g de queijo ralado (reserve um pouco para polvilhar)', '5 claras em neve', 'Azeite para regar'],
        modoPreparo: 'Refogue a cebola e o alho na margarina até dourarem levemente. Junte o espinafre e refogue rapidamente. Tempere com sal e pimenta-do-reino a gosto e, mexendo sempre, adicione a farinha diluída, as gemas e o queijo. Cozinhe até encorpar, formando um creme, e deixe esfriar. Incorpore a clara em neve delicadamente e despeje em fôrma redonda ou refratário untado (uns 20 cm de diâmetro). Regue com azeite, polvilhe o queijo reservado e leve ao forno médio preaquecido (180 ºC) por cerca de 30 minutos ou até crescer e dourar. Sirva imediatamente.'
    },
    {
        id: 11,
        nome: "Patê de queijo",
        imagem: "./assets/img/pate-de-queijo.jpg",
        ingredientes: ["2 xícaras (chá) de queijo prato ralado", "1 lata de NESTLÉ® Creme de Leite", "4 colheres (sopa) de Leite Líquido NINHO® Forti+ Integral", "meia colher (sopa) de mostarda", "1 colher (sopa) de MAGGI® Fondor", "2 colheres (sopa) de salsa picada"],
        modoPreparo: "Em um recipiente, misture bem todos os ingredientes até ficar homogêneo. Sirva com biscoitos, torradas ou legumes crus cortados em tiras (cenoura, pepino e salsão)."
    },
    {
        id: 12,
        nome: 'Dip de Queijo Minas com Iogurte',
        imagem: './assets/img/Dip-deQueijo-Minas-com-Iogurte.jpg',
        ingredientes: ['meia xícara (chá) de queijo minas frescal', '2 potes de Iogurte GREGO® Tradicional Light', 'meia colher (chá) de sal', '2 colheres (sopa) de cebolinha-verde', '1 colher (sopa) de tomilho fresco', '1 xícara (chá) de cenouras babys'],
        modoPreparo: "Em um processador, bata o queijo minas até ficar homogêneo. Transfira para um recipiente, junte o Iogurte NESTLÉ Grego, o sal, a cebolinha verde e o tomilho. Misture bem e sirva acompanhado das cenouras babys."
    },
    {
        id: 13,
        nome: 'Polenta de queijo',
        imagem: './assets/img/Polenta-de-queijo.jpg',
        ingredientes: ['1 litro de água', '2 colheres (sopa) de azeite ou óleo', '2 tabletes de MAGGI® Caldo Galinha', '1 xícara (chá) de fubá', '3 colheres (sopa) de queijo parmesão ralado'],
        modoPreparo: 'Em uma panela ferva um litro de água com o azeite. Junte o Caldo MAGGI e deixe dissolver bem. Coloque o fubá pouco a pouco, em fogo baixo, mexendo bem. Cozinhe até aparecer o fundo da panela. Acrescente o queijo, coloque numa travessa rasa e sirva.'
    },
    {
        id: 14,
        nome: 'Batata Rosti',
        imagem: './assets/img/Batata-Rosti.jpg',
        ingredientes: ['4 batatas médias', '1 MAGGI® Creme de Cebola com Queijo', 'meia xícara (chá) de queijo parmesão ralado', 'meia colher (chá) de pimenta-do-reino', '2 colheres (sopa) de manteiga'],
        modoPreparo: 'Descasque as batatas e rale-as no ralo grosso, lave-as bem e escorra. Em um recipiente misture as batatas, o MAGGI Creme de Cebola, o queijo e a pimenta-do-reino. Em uma frigideira média e antiaderente, derreta a manteiga e coloque porções da mistura de batata, espalhando uniformemente com uma espátula. Frite em fogo médio até que esteja dourado no fundo, cerca de 5 minutos. Vire sobre uma tampa ou prato e retorne à frigideira para dourar do outro lado. Transfira para um prato e sirva imediatamente.'
    },
    {
        id: 15,
        nome: 'Bolo de Leite Moça e Queijo',
        imagem: './assets/img/Bolo-de-Leite-Moca-e-Queijo.jpg',
        ingredientes: ['4 ovos', '1 Leite MOÇA® (lata ou caixinha) 395g', '1 xícara (chá) de coco seco ralado', 'meia xícara (chá) de queijo parmesão ralado', '1 colher (sopa) de fermento em pó'],
        modoPreparo: 'Em uma batedeira, bata as gemas até que fiquem fofas e claras. Despeje o Leite MOÇA aos poucos sem parar de bater. Junte o coco, o queijo e misture bem. Peneire sobre a massa o fermento e mexa. Acrescente as claras batidas em neve, misturando delicadamente. Despeje em forma redonda com furo central (19cm de diâmetro) untada. Asse em forno médio (180ºC), preaquecido, por cerca de 45 minutos. Desenforme ainda quente e sirva frio.'
    },
    {
        id: 16,
        nome: 'Bolo de Queijo',
        imagem: './assets/img/Bolo-de-Queijo.jpg',
        ingredientes: ['3 ovos', '2 xícaras (chá) de queijo muçarela em fatias, cubos ou ralado', '1 xícara (chá) de Leite Líquido NINHO® Forti+ Integral', '1 xícara (chá) de óleo', '1 colher (chá) de sal', '3 xícaras (chá) de polvilho doce', '1 colher (sopa) de fermento em pó'],
        modoPreparo: 'Em um liquidificador, bata os ovos, o queijo, o Leite NINHO, o óleo e o sal até obter uma mistura homogênea. Transfira para um recipiente e acrescente aos poucos o polvilho doce e por último o fermento em pó. Despeje a massa em uma forma de furo central (23 cm de diâmetro) untada, e leve para assar em forno médio (180°C), preaquecido por cerca de 30 minutos. Sirva.'
    },
    {
        id: 17,
        nome: 'Biscoito de queijo',
        imagem: './assets/img/Biscoito-de-queijo.jpg',
        ingredientes: ['2 xícaras (chá) de farinha de trigo', 'meia colher (chá) de fermento químico em pó', 'meia colher (chá) de sal', 'meia xícara (chá) de manteiga sem sal, em temperatura ambiente', '200 g de queijo mozarela ralado', '4 colheres (sopa) de água gelada', '1 ovo'],
        modoPreparo: 'Em um processador coloque a farinha, o fermento e o sal e pulse para misturar. Adicione a manteiga, o queijo e bata até obter uma mistura homogênea. Acrescente a água gelada aos poucos, e vá batendo até obter uma mistura com textura levemente úmida. Coloque a mistura em uma forma retangular forrada com plástico filme e espalhe totalmente, pressionando até obter uma massa fina. Cubra com plástico filme e leve para geladeira por cerca de 30 minutos. Em uma bancada limpa, coloque a massa ainda sobre o plástico filme e abra com o auxílio de um rolo de massa, até obter uma textura de cerca de 3mm. Com uma faca ou cortador de massa, corte os snacks no tamanho que desejar e coloque-os em uma forma. Pincele os snacks com o ovo levemente batido. Leve para assar em forno médio (180°C), preaquecido, por cerca de 15 minutos. Sirva.'
    },
    {
        id: 18,
        nome: 'Fondue de queijo',
        imagem: './assets/img/Fondue-de-queijo.jpg',
        ingredientes: ['800 g de queijo alpestre ou fundido', '400 g de queijo prato', '1 dente de alho', '2 xícaras (chá) de vinho branco seco', '1 pitada de pimenta-do-reino', '1 copo de Requeijão NESTLÉ®', '1 colher (sopa) de fécula de batata', '3 colheres (sopa) de kirsch', 'pão francês amanhecido cortado em cubos (10 a 12 pedaços por pessoa)'],
        modoPreparo: 'Em um recipiente, corte os queijos em pedaços pequenos ou rale no ralo grosso do ralador. Em uma panela especial para fondue, esfregue o alho por toda a superfície interna para que o aroma do alho passe de forma delicada para os queijos. Coloque o vinho e leve ao fogareiro para fondue. Quando ferver, jogue todo o queijo de uma só vez. Mexa sem parar, até o queijo derreter. Acrescente a pimenta-do-reino, o Requeijão NESTLÉ e misture. Em um recipiente, desmanche a fécula de batata no kirsch. Acrescente ao queijo, misture e diminua a chama. Deixe que cada pessoa se sirva, espetando na ponta de um garfo longo um cubo de pão e mergulhando-o no fondue.'
    },
    {
        id: 19,
        nome: 'Bolinhas de queijo',
        imagem: './assets/img/Bolinhas-de-queijo.jpg',
        ingredientes: ['1 e meia xícaras (chá) de Leite Líquido NINHO® Forti+ Integral', '1 tablete de MAGGI® Caldo Legumes', '4 colheres (sopa) de manteiga', '1 xícara (chá) de farinha de trigo', '3 colheres (sopa) de salsa picada', 'meia xícara (chá) de farinha de rosca', '100 g de queijo mozarela em cubos pequenos', '2 ovos batidos'],
        modoPreparo: 'Em uma panela, aqueça o Leite NINHO, dissolva o MAGGI Caldo e reserve. Em fogo baixo, derreta a manteiga e doure ligeiramente a farinha. Aos poucos acrescente o Leite reservado, mexendo rapidamente para não formar grumos. Continue mexendo até que a massa solte do fundo da panela. Misture a salsa, retire do fogo e deixe esfriar. Porcione pequenas quantidades de massa e recheie-as com um pedaço de queijo mozarela. Enrole em forma de bolinhas, passe-as na farinha de rosca, a seguir nos ovos batidos e mais uma vez na farinha de rosca. Frite-as em óleo quente. Escorra em papel toalha e sirva a seguir.'

    },
    {
        id: 20,
        nome: 'Pão de alho com queijo',
        imagem: './assets/img/Pao-de-alho-com-queijo.jpg',
        ingredientes: ['2 colheres (sopa) de manteiga derretida', '2 colheres (sopa) de azeite', '1 sachê de MAGGI® MEU SEGREDO® Refoga', '4 colheres (sopa) de salsa picada', '1 pão italiano redondo', '1 xícara (chá) de queijo mozarela ralado'],
        modoPreparo: 'Em recipiente, misture a manteiga, o azeite, o MAGGI MEU SEGREDO e a salsa. Reserve. Com uma faca serrilhada, corte o pão italiano em vários cubos, sem separá-lo da base (fica como uma tartaruga). Despeje a mistura reservada nos vãos, intercalando com o queijo mozarela. Coloque o pão em uma assadeira forrada com papel-alumínio, cubra com papel-alumínio e leve ao forno médio-alto (200°C), preaquecido, por cerca de 20 minutos. Sirva.'
    },
    {
        id: 21,
        nome: 'Bolinho de arroz com queijo',
        imagem: './assets/img/Bolinho-de-arroz-com-queijo.jpg',
        ingredientes: ['2 xícaras (chá) de arroz cozido', '2 sachês de MAGGI® MEU SEGREDO® Cheiro Verde', '2 ovos', '4 colheres (sopa) de queijo parmesão ralado', 'meia xícara (chá) de farinha de trigo', '1 pitada de pimenta-do-reino', '3 colheres (sopa) de azeitonas verdes picadas', 'meia xícara (chá) de queijo mozarela em cubinhos', '1 xícara (chá) de farinha de rosca'],
        modoPreparo: 'Em recipiente, misture bem todos os ingredientes, exceto o queijo mozarela e a farinha de rosca, até obter uma mistura homogênea. Pegue uma pequena porção da mistura, recheie com 1 cubinho de queijo mozarela e modele em formato de bolinha. Empane na farinha de rosca. Repita o processo com toda a mistura e o queijo. Em uma panela, aqueça o óleo e frite os bolinhos até dourar. Escorra em papel absorvente e sirva a seguir.',
    },
    {
        id: 22,
        nome: 'Bolinho de carne com queijo',
        imagem: './assets/img/Bolinho-de-carne-com-queijo.jpg',
        ingredientes: ['5 fatias de pão de forma sem casca', '2 ovos', '500 g de carne moída', '1 cebola ralada', '1 colher (sopa) de MAGGI® Gril', '1 colher (sopa) de salsa picada', '100 g de queijo prato em cubos pequenos', '1 xícara (chá) de farinha de trigo'],
        modoPreparo: 'Em um recipiente, esfarele as fatias de pão e misture com os ovos ligeiramente batidos. Acrescente a carne moída, a cebola, o MAGGI Gril, a salsa e misture até ficar homogêneo. Abra pequenas porções desta mistura na palma da mão e recheie com um cubo de queijo prato. Feche bem, dando formato de bolinhos, passe pela farinha de trigo e frite em óleo quente, até dourar. Escorra em papel toalha e sirva a seguir.'
    },
    {
        id: 23,
        nome: 'Pamonha com queijo',
        imagem: './assets/img/Pamonha-com-queijo.jpg',
        ingredientes: ['Pamonha', '12 espigas de milho frescas', '1 colher (sopa) de MAGGI® Fondor', '3 colheres (sopa) de manteiga', 'Recheio', '1 xícara (chá) de queijo coalho picado 200 g', '1 colher (sopa) de alecrim'],
        modoPreparo: 'Passe a palha de milho por água fervente para amolecer e reserve. Em um liquidificador, bata o milho e passe por uma peneira. Junte o MAGGI Fondor com a manteiga e misture bem. Reserve. Em um recipiente, misture o queijo coalho com o alecrim e reserve. Faça os copinhos com a palha do milho e coloque uma parte da pamonha, uma parte de queijo e de alecrim, e complete com a pamonha. Coloque outra palha, feche o copinho e amarre com um barbante. Em uma panela grande, ferva 5 litros de água. Coloque as pamonhas e cozinhe por cerca de 40 minutos. Sirva.'
    },
    {
        id: 24,
        nome: 'Queijo-Quente',
        imagem: './assets/img/Queijo-Quente.jpg',
        ingredientes: ['4 fatias de pão italiano', '1 xícara (chá) de queijo prato ralado grosso', '¼ de xícara (chá) de queijo parmesão ralado grosso', 'manteiga em temperatura ambiente a gosto'],
        modoPreparo: 'Espalhe um pouco de manteiga em apenas um dos lados das quatro fatias de pão. Vamos preparar dois sanduíches. Leve uma frigideira antiaderente ao fogo médio. Quando aquecer, polvilhe 1 colher (sopa) de parmesão formando uma base para cada sanduíche, uma ao lado da outra – isso vai formar a crosta do queijo quente. Com o lado da manteiga voltado para baixo, disponha duas fatias de pão na frigideira, sobre o parmesão. Disponha metade do queijo prato ralado sobre cada fatia e feche cada um dos sanduíches com uma fatia de pão, deixando o lado da manteiga voltado para cima. Coloque uma panelinha de ferro (ou qualquer outro utensílio pesado) sobre os sanduíches – além de prensar, o peso faz o queijo derreter melhor. Deixe por 2 minutos até a base dourar e o recheio começar a derreter. Para virar: com uma espátula, tire o sanduíche da frigideira e apoie na tábua. Caso a crostinha de um tenha grudado na do outro, aproveite para cortar e separá-los. Polvilhe 1 colher (sopa) de parmesão na frigideira, para formar a crosta do outro lado do sanduíche. Volte os pães para a assadeira, com o lado sem crosta para baixo. Cubra novamente com a panelinha de ferro e deixe dourar. Sirva a seguir.',
    },
    {
        id: 25,
        nome: 'Tapioca rosa com queijo meia cura',
        imagem: './assets/img/Tapioca-rosa-com-queijo-meia-cura.jpg',
        ingredientes: ['2 ½ xícaras (chá) de polvilho doce (cerca de 250 g)', '1 beterraba', '2 xícaras (chá) de água filtrada', 'queijo meia-cura ralado a gosto', 'sal (opcional)'],
        modoPreparo: 'Descasque e corte a beterraba em pedaços. Transfira para o liquidificador e bata com a água até triturar bem. Passe o suco por uma peneira e pressione o bagaço com as costas de uma colher para extrair todo o líquido. Coloque o polvilho doce numa tigela e cubra com o suco de beterraba coado. Misture com uma colher para dissolver o polvilho, cubra com filme e deixe de molho, na geladeira por cerca de 8 horas (se preferir, prepare da noite para o dia) - o polvilho vai absorver a maior parte do líquido e ficar com a aparência de gesso molhado. Escorra o suco de beterraba que ficou na superfície - pode virar a tigela sem medo, a goma fica grudada no fundo da tigela. Coloque um pano de prato limpo sobre a goma e deixe por alguns minutinhos para absorver o excesso de umidade. Atenção: o líquido cor-de-rosa da beterraba pode manchar o seu pano de prato. Com uma colher, quebre a massa em pedaços e passe por uma peneira - o resultado é uma farinha úmida, sedosa, que modela ao ser apertada. Se quiser, tempere com sal a gosto. Para preparar as tapiocas, leve um frigideira pequena antiaderente ao fogo médio. Dica: para saber se está quente o suficiente, salpique um pouco da farinha - ela deve pular depois de alguns segundos. Abaixe o fogo e peneire uma porção da farinha até formar uma camada uniforme sobre o fundo da frigideira. Deixe cozinhar por cerca de 30 segundos até começar a firmar. Polvilhe com o queijo ralado, dobre a tapioca ao meio e deixe na frigideira por mais 1 minuto de cada lado até o queijo derreter. Sirva a seguir.'
    },
];

function carregarGaleria() {
    const galeria = document.getElementById('galeria'); // Seleciona o elemento de galeria no DOM
    receitas.forEach(receita => { // Itera sobre cada receita no array recipes
        const itemGaleria = document.createElement('div'); // Cria um novo elemento div
        itemGaleria.classList.add('item-galeria'); // Adiciona a classe 'gallery-item' ao div
        itemGaleria.innerHTML = `
            <img src="${receita.imagem}" alt="${receita.nome}"> <!-- Adiciona a imagem da receita -->
            <h3>${receita.nome}</h3> <!-- Adiciona o nome da receita -->
        `;
        itemGaleria.addEventListener('click', () => mostrarModalReceitas(receita)); // Adiciona um ouvinte de eventos para abrir o modal ao clicar
        galeria.appendChild(itemGaleria); // Adiciona o item da galeria ao elemento de galeria
    });
}

function mostrarModalReceitas(receita) {
    const modal = document.getElementById('modal-receitas'); // Seleciona o modal no DOM
    document.getElementById('tituloReceita').textContent = receita.nome; // Define o título do modal
    document.getElementById('imagemReceita').src = receita.imagem; // Define a imagem do modal
    document.getElementById('ingredientesReceita').innerHTML = receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join(''); // Lista os ingredientes
    document.getElementById('modoPreparo').textContent = receita.modoPreparo; // Define as instruções de preparo
    modal.style.display = 'block'; // Exibe o modal
}

function fecharModalReceitas() {
    const modal = document.getElementById('modal-receitas'); // Seleciona o modal no DOM
    modal.style.display = 'none'; // Oculta o modal
}


document.addEventListener('DOMContentLoaded', () => {
    carregarGaleria(); // Carrega a galeria quando o DOM estiver completamente carregado
    const btnFechar = document.querySelector('.close'); // Seleciona o botão de fechar no modal
    btnFechar.addEventListener('click', fecharModalReceitas); // Adiciona um ouvinte de eventos para fechar o modal ao clicar no botão
    window.addEventListener('click', event => { // Adiciona um ouvinte de eventos para fechar o modal ao clicar fora do modal
        const modal = document.getElementById('modal-receitas');
        if (event.target === modal) { // Verifica se o clique foi fora do modal
            fecharModalReceitas(); // Fecha o modal
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Obtém o modal
    const modal = document.getElementById("myModal");

    // Obtém o botão que abre o modal
    const btn = document.getElementById("openModalBtn");

    // Obtém o elemento <span> que fecha o modal
    const span = document.getElementsByClassName("btnClose")[0];

    // Quando o usuário clicar no botão, abre o modal 
    btn.onclick = function () {
        modal.style.display = "flex";
    }

    // Quando o usuário clicar no <span> (x), fecha o modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});