$().ready(function () {
    var reader = new FileReader();
    reader.onload = function (e) {
        $('#gambar').attr('src', e.target.result);
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function () {
        readURL(this);
    });
})