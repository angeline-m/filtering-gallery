// Enter your JavaScript for the solution here...

window.addEventListener('load', function(e){
    const searchBar = document.querySelector('.frm-control');
    const thumbs = document.querySelectorAll('.thumb-display');

    const reset = document.querySelector('.reset');

    searchBar.addEventListener('input', searchQuery);
    reset.addEventListener('click', resetSearch);

    function searchQuery(e) {
        const searchTerm = e.currentTarget.value.trim().toLowerCase();
        if (searchTerm === null || searchTerm == ''){
            removeReset(e);
        }
        else {
            searchResults(searchTerm);
            resetLink(e);
        }
    }

    function searchResults(searchTerm) {
        thumbs.forEach(function(thumb, index){
            const searchString = thumb.querySelector('p').textContent;
            if(searchString.includes(searchTerm)){
                if (thumb.classList.contains('hidden')){
                    thumb.classList.remove('hidden');
                }
            }
            else {
                thumb.classList.add('hidden');
            }

        });
    };

    function resetLink(e){
        if (reset.classList.contains('hidden'))
        {
            reset.classList.remove('hidden');
        }
        
    };

    function removeReset(e){
        if (reset.classList.contains('hidden') == false)
        {
            reset.classList.add('hidden');
        }
    }

    function resetSearch(e){
        document.querySelector('.frm-control').value = '';
        thumbs.forEach(function(thumb, index) {
            thumb.classList.remove('hidden');
        });
    }

});