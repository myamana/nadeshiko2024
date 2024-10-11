function updateTotal() {
    console.log('call updateTotal');

    console.log($('#ff-num').val());
    let ffTotal = 200 * $('#ff-num').val();
    $('#ff-total').text(ffTotal);

    let hdTotal = 250 * $('#hd-num').val();
    $('#hd-total').text(hdTotal);

    let okTotal = 250 * $('#ok-num').val();
    $('#ok-total').text(okTotal);

    let krTotal = 100 * $('#kr-num').val();
    $('#kr-total').text(krTotal);

    let suiTotal = 100 * $('#sui-num').val();
    $('#sui-total').text(suiTotal);

    let total = ffTotal + hdTotal + okTotal + krTotal + suiTotal;
    $('#total').val(total);

}