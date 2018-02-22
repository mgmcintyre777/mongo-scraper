// ----------------------------------------------------
// --- I N D E X . J S ----------------------------
// ----------------------------------------------------
// Article model for the mongo database
// Daniel Orlovsky


$(document).ready(() => {
    const saveArticleClick = (event) => {
        const {title, url } = event.target;
        const article = {
            title: title,
            url: url
        };
         
        $.ajax({
            url: '/api/addArticle',
            method: "POST",
            data: article,
            success: (response) => {
                showModal("Article Added.", response);
            }
        })
    };
    
    const showModal = (title, body) => {
        $("#modal-title").text(title);
        $("#modal-body").html(body);
        $("#alert-modal").modal();
    }
    $("#scrape-articles").on("click", () => {
        $.ajax({
            url: '/scrape',
            method: "GET",
            contentType: "text/html",
            success: (data) => {
                $("#article-list").html(data);
                showModal("We've found articles!", '<p>New articles have been added to the list.</p><p>Be sure to save the ones you want to read later.</p>');
            }   
        })
    });

    $("#article-list").on("click", ".save-button", saveArticleClick)
})