function updateTotal() {


    let ffNum = 0;
    if ($('#ff-num').val() != '') {
        ffNum = $('#ff-num').val();
    }
    let ffTotal = 200 * ffNum;
    $('#ff-total').text(ffTotal);

    let hdNum = 0;
    if ($('#hd-num').val() != '') {
        hdNum = $('#hd-num').val();
    }
    let hdTotal = 250 * hdNum;
    $('#hd-total').text(hdTotal);

    let okNum = 0;
    if ($('#ok-num').val() != '') {
        okNum = $('#ok-num').val();
    }
    let okTotal = 250 * okNum;
    $('#ok-total').text(okTotal);

    let krNum = 0;
    if ($('#kr-num').val() != '') {
        krNum = $('#kr-num').val();
    }
    let krTotal = 100 * krNum;
    $('#kr-total').text(krTotal);

    let suiNum = 0;
    if ($('#sui-num').val() != '') {
        suiNum = $('#sui-num').val();
    }
    let suiTotal = 100 * suiNum;
    $('#sui-total').text(suiTotal);

    let total = ffTotal + hdTotal + okTotal + krTotal + suiTotal;
    $('#totalAll').val(total);
    $('#totalAll2').text(total);

}

function clearTotal() {
    $('#ff-num').val('');
    $('#hd-num').val('');
    $('#ok-num').val('');
    $('#kr-num').val('');
    $('#sui-num').val('');
    updateTotal();
}