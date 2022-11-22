$(document).ready (function () {
    // ALERT INPUT//
    $("#btnSubmit").submit(function (e){
        e.preventDefault();
        window.scrollTo(0, 0);
        

        $("#divAlert").removeClass("d-none");
        const input = $("#inputNama").val();
        $("#alertText").html("" + input + " link sudah dapat dilihat di email anda" );
        

    });
    
    $("#btnClose").click(function () {
        $("#divAlert").addClass("d-none");
    });
    // END ALERT INPUT//

    // SELECT GAMBAR UTAMA//
    //DRY MODE
    $("#gambar1").click(function (e) {
        e.preventDefault();
        const gambar1 = $("#gambar1").attr("src");
        $("#gambarUtama").attr("src", gambar1);
        $("#gambarUtama").attr("height", "500px");
    });

    $("#gambar2").click(function (e) {
        e.preventDefault();
        const gambar2 = $("#gambar2").attr("src");
        $("#gambarUtama").attr("src",gambar2);
        $("#gambarUtama").attr("height", "500px");
        $("#nameKursi").html("Chair Thatty");  //NAMA KURSI
        $("#price").html("IDR.89.300.000");     //HARGA

    });

    $("#gambar3").click(function (e) {
        e.preventDefault();
        const gambar3 = $("#gambar3").attr("src");
        $("#gambarUtama").attr("src",gambar3);
        $("#gambarUtama").attr("height", "500px");
    });

    $("#gambar4").click(function (e) {
        e.preventDefault();
        const gambar4 = $("#gambar4").attr("src");
        $("#gambarUtama").attr("src",gambar4);
        $("#gambarUtama").attr("height", "500px");   
    });

    // END SELECT GAMBAR UTAMA //
    $("#formSubmit").submit(function(e){
        e.preventDefault();
        $("#formShipping").addClass("d-none");
        $("#alert").removeClass("d-none");
        const firstname = $("#firstName").val();
        const lastname = $("#lastName").val();
        $("#title").html("Terimakasih " + firstname + " " + lastname);
        const isi = $("#address").val();
        $("#Isi").html("Paket akan segera dikirim ke " + isi);
      });

    //   $("button").click(function(){
    //     $("p").removeClass("intro");
    //   });
    //ALERT FORM//


    
});