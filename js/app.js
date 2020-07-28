// Introduction to RESTFUL APIs (AJAX, FETCH : Get method)

// Fetch api get example (ES6)

let url = 'http://www.omdbapi.com/?apikey=a2d0993'

//fetch(url).then(response => response.json()).then(data => console.log(data));


//function getFilmByTitle(url, title) {
//    $('#response').empty();
//
//    let api_url  = `${url}&t=${title}`;
//
//    fetch(api_url)
//    .then(response => response.json())
//    .then(data => appendData(data));
//}

function appendData(data) {
    for(let line in data) {
        let html_value = '';
        if (line === 'Poster') {
             html_value = `<li class="item"><strong>${line}:</strong> <img src="${data[line]}"></li>`
        } else {
            html_value = `<li class="item"><strong>${line}:</strong> ${data[line]}</li>`;
        }
        $(html_value).appendTo('#response');
}};


$('#title').on('change', () => {
    let inputTitle = $(event.currentTarget).val();
    let api_url  = `${url}&t=${inputTitle}`;
    
    $.get(api_url, (data) => {
        appendData(data);
    });
});



 //AJAX get example (jQuery)

// $.get(url, function(data, status){
//     console.log(data);
//   });

