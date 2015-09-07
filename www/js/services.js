angular.module('starter.services', [])

    .factory('Jidla', function() {
        var jidla = [
            {
                id: 0,
                name: 'Knedlo vepřo zelo',
                ikona: 'http://s1.evcdn.com/images/block/I0-001/017/024/076-8.jpeg_/traditional-czech-food-76.jpeg',
                time: 90,
                ingredience: [
                    {
                        co: "Knedlík",
                        kolik: 300,
                        jednotka: "g"
                    },
                    {
                        co: "Bůček",
                        kolik: 500,
                        jednotka: "g"
                    },
                    {
                        co: "Kysané zelí",
                        kolik: 200,
                        jednotka: "g"
                    }
                ]
            },
            {
                id: 1,
                name: 'Palačinky',
                ikona: 'http://www.smakoun.eu/obrazky/anotace/tapiokove-palacinky.jpg',
                time: 30,
                ingredience: [
                    {
                        co: "Mouka",
                        kolik: 75,
                        jednotka: "g"
                    },
                    {
                        co: "Mléko",
                        kolik: 0.5,
                        jednotka: "l"
                    },
                    {
                        co: "Vejce",
                        kolik: 2,
                        jednotka: "ks"
                    }
                ]
            },
            {
                id: 2,
                name: 'Svíčková',
                ikona: 'http://img.blesk.cz/img/1/gallery/1423632_svickova-na-smetane-recepty-vareni.jpg',
                time: 120,
                ingredience: [
                    {
                        co: "Smetana",
                        kolik: 200,
                        jednotka: "ml"
                    },
                    {
                        co: "Hovězí maso",
                        kolik: 0.5,
                        jednotka: "kg"
                    },
                    {
                        co: "Knedlík",
                        kolik: 300,
                        jednotka: "g"
                    }
                ]
            },
            {
                id: 3,
                name: 'Česnečka',
                ikona: 'http://img.mf.cz/554/996/17504.jpg',
                time: 45,
                ingredience: [
                    {
                        co: "Česnek",
                        kolik: 3,
                        jednotka: "stroužky"
                    },
                    {
                        co: "Brambory",
                        kolik: 0.5,
                        jednotka: "kg"
                    },
                    {
                        co: "Majoránka",
                        kolik: 5,
                        jednotka: "g"
                    }
                ]
            },
            {
                id: 4,
                name: 'Losos s bramborem',
                ikona: 'http://www.stobklub.cz/photos/cettia/large/dfec70028386fed610d5f7835c466fc6.jpg',
                time: 60,
                ingredience: [
                    {
                        co: "Losos",
                        kolik: 200,
                        jednotka: "g"
                    },
                    {
                        co: "Brambory",
                        kolik: 300,
                        jednotka: "g"
                    },
                    {
                        co: "Bylinková sůl",
                        kolik: 10,
                        jednotka: "g"
                    }
                ]
            },
            {
                id: 5,
                name: 'Těstoviny s tuňákem',
                ikona: 'http://www.omlazeni.cz/shared_files/uploaded_new/14/144593/1728267_1_s.jpg',
                time: 40,
                ingredience: [
                    {
                        co: "Tuňák",
                        kolik: 150,
                        jednotka: "g"
                    },
                    {
                        co: "Těstoviny",
                        kolik: 300,
                        jednotka: "g"
                    },
                    {
                        co: "Kukuřice",
                        kolik: 100,
                        jednotka: "g"
                    }
                ]
            },
            {
                id: 6,
                name: 'Rizoto',
                ikona: 'http://www.smakoun.eu/obrazky/anotace/mexicke-rizoto.jpg',
                time: 30,
                ingredience: [
                    {
                        co: "Rýže",
                        kolik: 200,
                        jednotka: "g"
                    },
                    {
                        co: "Kuřecí maso",
                        kolik: 150,
                        jednotka: "g"
                    },
                    {
                        co: "Hrášek",
                        kolik: 100,
                        jednotka: "g"
                    }
                ]
            },
            {
                id: 7,
                name: 'Těstovinový salát',
                ikona: 'http://www.vareni.cz/include/ir/mmm_obrazek/9475-c4f487cb95ff966d1160e1fdf8035baa--c125xc125.jpg',
                time: 45,
                ingredience: [
                    {
                        co: "Těstoviny",
                        kolik: 250,
                        jednotka: "g"
                    },
                    {
                        co: "Paprika",
                        kolik: 1,
                        jednotka: "ks"
                    },
                    {
                        co: "Okurka",
                        kolik: 0.5,
                        jednotka: "ks"
                    }
                ]
            },
            {
                id: 8,
                name: 'Rajská',
                ikona: 'http://www.matyhochalka.cz/wp-content/uploads/2013/06/rajska-e1370159491125-128x128.jpg',
                time: 90,
                ingredience: [
                    {
                        co: "Knedlík",
                        kolik: 300,
                        jednotka: "g"
                    },
                    {
                        co: "Vepřové maso",
                        kolik: 200,
                        jednotka: "g"
                    },
                    {
                        co: "Rajčatový protlak",
                        kolik: 1,
                        jednotka: "ks"
                    }
                ]
            },
            {
                id: 9,
                name: 'Tortily s kuřecím masem',
                ikona: 'http://files.recepty-web.webnode.cz/system_preview_small_200000173-ee17cef023/tortila%20pln%C4%9Bn%C3%A1%20masem.jpg',
                time: 30,
                ingredience: [
                    {
                        co: "Kuřecí maso",
                        kolik: 200,
                        jednotka: "g"
                    },
                    {
                        co: "Tortila",
                        kolik: 2,
                        jednotka: "ks"
                    },
                    {
                        co: "Ledový salát",
                        kolik: 400,
                        jednotka: "g"
                    }
                ]
            }
        ];

        return {
            all: function() {
                return jidla;
            },
            remove: function(jidlo) {
                jidla.splice(jidla.indexOf(jidlo), 1);
            },
            get: function(jidloId) {
                for (var i = 0; i < jidla.length; i++) {
                    if (jidla[i].id === parseInt(jidloId)) {
                        return jidla[i];
                    }
                }
                return null;
            }
        };
    })

    .factory('Objednavky', function(Jidla) {
        var objs = [];
        var i = 1;

        function add() {
            function r(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
            var jidla = Jidla.all();
            var objednavka = {};

            objednavka.id = i++;

            objednavka.den = moment().add(r(1, 6), "days").set("hour", r(18, 23));
            objednavka.denCal = objednavka.den.format("YYYY-MM-DD");
            objednavka.denForm = objednavka.den.format("D.M.YYYY HH:mm");

            objednavka.zakaznik = ["Pepa Novák", "Kateřin Malá", "Bobeš Havelka", "Jan Hora", "Evžen Dutý", "Hana Fialka", "Renata Plynulá", "Uršula Trefená", "Eduard Hák", "Ondřej Lávka", "Lukáš Trefa", "Gertruda Posedlá", "Gabriela Hundová"][r(0, 12)];
            objednavka.misto = ["Zadní Kopanina", "Pražský hrad", "Říčany", "Zábřeh", "Smíchov", "Poděbrady", "Hostivař", "Radotín", "Hradec Králové", "Liberec", "Kolín", "Opava", "Paříž"][r(0, 12)];

            objednavka.jidla = [];
            jidla.forEach(function(jidlo) {
                if (r(1, 3) < 2)
                    return;
                objednavka.jidla.push({
                    jidlo: jidlo,
                    kolik: r(1, 30)
                });
            });

            objs.unshift(objednavka);
        }
        add();

        return {
            add: add,
            all: function() {
                return objs;
            },
            remove: function(obj) {
                objs.splice(objs.indexOf(obj), 1);
            },
            get: function(objId) {
                for (var i = 0; i < objs.length; i++) {
                    if (objs[i].id === parseInt(objId)) {
                        return objs[i];
                    }
                }
                return null;
            }
        };
    });
