$("p").click(function(){
    alert("helloooooo");
});

$(function(){
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: { userId: '2' },
        dataType: 'json',
        success: function (data) {
            $.each(data, function(index, element) {
                $("#jsonTable").append($("<p>").html(element.id));
                //create one row of data with three columns, id, title, body

                var divRow = $("<div>").addClass("divTableRow");
                var divCellId = $("<div>").addClass("divTableCell").html(element.id);
                var divCellTitle = $("<div>").addClass("divTableCell").html(element.title);
                var divCellBody = $("<div>").addClass("divTableCell").html(element.body);

                divRow.append(divCellId,divCellTitle,divCellBody);
                $(".divTableBody").append(divRow);
            });
        }
    });
});

//    function pClicked(){
//        alert("p clicked");
//    }