window.descarregarPDF = async function (color) {
    let filename = ""
    if (color === "color") {
        filename = "recursos/full_pj-color.pdf"
    } else {
        filename = "recursos/full_pj-bn.pdf"
    }

    try {
        const bytes = await fetch(filename).then(r => r.arrayBuffer());
        const pdfDoc = await PDFLib.PDFDocument.load(bytes);
        const form = pdfDoc.getForm();

        console.log(form.getFields().map(f => f.getName()));

        form.getTextField("Nom").setText(
            document.getElementById("nom").textContent
        );
        form.getTextField("Descripcio").setText(
            document.getElementById("descripcio").textContent
        );
        form.getTextField("Classe").setText(

        );
        form.getTextField("Poders").setText(

        );
        form.getTextField("PCAct").setText(

        );
        form.getTextField("PCMax").setText(
            document.getElementById("pc").textContent
        );
        form.getTextField("Força").setText(
            document.getElementById("força").textContent
        );
        form.getTextField("Agilitat").setText(
            document.getElementById("agilitat").textContent
        );
        form.getTextField("Presencia").setText(
            document.getElementById("presencia").textContent
        );
        form.getTextField("Resistencia").setText(
            document.getElementById("resistencia").textContent
        );
        form.getTextField("Presagis").setText(
            document.getElementById("presagis").textContent
        );
        form.getTextField("Arma1").setText(
            document.getElementById("arma").textContent
        );
        form.getTextField("Arma2").setText(

        );
        form.getTextField("Armadura").setText(
            document.getElementById("armadura").textContent
        );
        form.getTextField("Armadura1").setText(

        );
        form.getTextField("Armadura2").setText(

        );
        form.getTextField("Armadura3").setText(

        );

        let equipament = ""
        if (document.getElementById("inventari_1").textContent != "res") { equipament += document.getElementById("inventari_1").textContent + "\r\r";};
        equipament += document.getElementById("inventari_2").textContent + "\r\r" + document.getElementById("inventari_3").textContent;

        form.getTextField("Equipament_1").setText(
            equipament
        );
        form.getTextField("Equipament_2").setText(

        );
        form.getTextField("Plata").setText(
            document.getElementById("plata").textContent
        );
        form.getTextField("Miseries_1").setText(

        );
        form.getTextField("Miseries_2").setText(

        );
        form.getTextField("Miseries_3").setText(

        );
        form.getTextField("Miseries_4").setText(

        );
        form.getTextField("Miseries_5").setText(

        );
        form.getTextField("Miseries_6").setText(

        );

        // form.getTextField("Força2").setText(
        //     document.getElementById("str").textContent
        // );

        const pdfBytes = await pdfDoc.save();

        const blob = new Blob([pdfBytes], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);

        const nomPersonatge = document.getElementById("nom").textContent;
        link.download = nomPersonatge + " Mörk Borg.pdf";

        // link.download = "_.pdf"; // Nom del fitxer
        link.click();
    } catch (e) {
        console.error(e);
    }

}
