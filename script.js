function showPlan(tag) {
    const essenPlaene = {
        montag: {
            morgens: "Rührei mit Spinat und Avocado",
            mittags: "Gegrillte Hähnchenbrust mit gemischtem Salat (Rucola, Gurke, Tomaten) und Olivenöl",
            abends: "Lachsfilet mit gedünstetem Brokkoli und grünen Bohnen",
            img: {
                morgens: "https://imgur.com/RLzL5lO.png",
                mittags: "https://imgur.com/ytHYdeY.png",
                abends: "https://imgur.com/IYSbAfw.png"
            }
        },
        dienstag: {
            morgens: "Naturjoghurt (ungesüßt) mit Leinsamen und ein paar Beeren",
            mittags: "Zucchini-Nudeln mit Putenstreifen in einer cremigen Avocado-Sauce",
            abends: "Gegrilltes Rindersteak mit grünem Spargel und einem kleinen gemischten Salat",
            img: {
                morgens: "https://imgur.com/UIUbowf.png",
                mittags: "https://imgur.com/MSuUHb8.png",
                abends: "https://imgur.com/LyLjGdQ.png"
            }
        },
        mittwoch: {
            morgens: "Omelett mit Champignons, Paprika und etwas Käse",
            mittags: "Garnelen-Salat mit Avocado, Tomaten, Gurken und einem Olivenöl-Dressing",
            abends: "Gebratenes Kabeljaufilet mit Blumenkohlpüree und gedünstetem Spinat",
            img: {
                morgens: "https://imgur.com/Vk6bF8b.png",
                mittags: "https://imgur.com/p6FXkfN.png",
                abends: "https://imgur.com/mgUlXCv.png"
            }
        },
        donnerstag: {
            morgens: "Quark mit einer Handvoll Walnüssen und ein paar Himbeeren",
            mittags: "Hähnchensalat mit Rucola, Gurken, Feta und einem Zitronen-Olivenöl-Dressing",
            abends: "Gebratenes Lammfilet mit Rosenkohl und Brokkoli",
            img: {
                morgens: "https://imgur.com/yGoFebW.png",
                mittags: "https://imgur.com/1MOO51o.png",
                abends: "https://imgur.com/HbST89g.png"
            }
        },
        freitag: {
            morgens: "Rührei mit Tomaten, Zwiebeln und Avocado",
            mittags: "Gebackener Lachs auf einem Bett aus Feldsalat mit Gurken, Paprika und Radieschen",
            abends: "Hähnchen in Zitronen-Knoblauch-Sauce mit Zucchini und Auberginen",
            img: {
                morgens: "https://imgur.com/NtLYJmj.png",
                mittags: "https://imgur.com/xM9Dgej.png",
                abends: "https://imgur.com/J1Xcg5j.png"
            }
        },
        samstag: {
            morgens: "Naturjoghurt mit Chiasamen und ein paar Beeren",
            mittags: "Gegrillte Putenbrust mit gedünstetem Gemüse (Brokkoli, Karotten)",
            abends: "Thunfischsteak mit gedünstetem Spinat und Blumenkohlreis",
            img: {
                morgens: "https://imgur.com/qTBqKzd.png",
                mittags: "https://imgur.com/Rnu7KIX.png",
                abends: "https://imgur.com/6zD52Jf.png"
            }
        },
        sonntag: {
            morgens: "Omelett mit Spinat, Feta und Kräutern",
            mittags: "Gegrilltes Hähnchen mit Avocado, Tomaten und einem kleinen Beilagensalat",
            abends: "Gegrilltes Zanderfilet mit gedünstetem Pak Choi und einem Zitronen-Kräuter-Dressing",
            img: {
                morgens: "https://imgur.com/fx3uAzs.png",
                mittags: "https://imgur.com/fzuZE7n.png",
                abends: "https://imgur.com/xrOCQbN.png"
            }
        }
    };

    // Zeige den Plan für den ausgewählten Tag
    document.getElementById("plan-morgens").textContent = `Morgens: ${essenPlaene[tag].morgens}`;
    document.getElementById("img-morgens").src = essenPlaene[tag].img.morgens;

    document.getElementById("plan-mittags").textContent = `Mittags: ${essenPlaene[tag].mittags}`;
    document.getElementById("img-mittags").src = essenPlaene[tag].img.mittags;

    document.getElementById("plan-abends").textContent = `Abends: ${essenPlaene[tag].abends}`;
    document.getElementById("img-abends").src = essenPlaene[tag].img.abends;
}
