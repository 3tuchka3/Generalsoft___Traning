let helper = (function() {

    return {
        redirect: (address) => {
            document.location.href = address;
        },
        distribution: () => {
            if(document.querySelector('#username') == null) {
                authorization();
            } else {
                registation();
            }
        },
    }
})();