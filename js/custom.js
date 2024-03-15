// Animations on Scroll
AOS.init();

// Modal
$(".modal-button-offer").click(function () {
    var target = $(this).data("target");
    $("html").addClass("is-clipped");
    $(target).addClass("is-active");
    var modalOffer = Bulma('#modal-offer').modal();
    modalOffer.open();
});

$(".close").click(function () {
    $("html").removeClass("is-clipped");
    $(this).parent().removeClass("is-active");
    var modalOffer = Bulma('#modal-offer').modal();
    modalOffer.close();
});

$(".modal-button-policy").click(function () {
    var target = $(this).data("target");
    $("html").addClass("is-clipped");
    $(target).addClass("is-active");
    var modalPolicy = Bulma('#modal-policy').modal();
    modalPolicy.open();
});

$(".close").click(function () {
    $("html").removeClass("is-clipped");
    $(this).parent().removeClass("is-active");
    var modalPolicy = Bulma('#modal-policy').modal();
    modalPolicy.close();
});

// Modal
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
        player.api('pause');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeAllModals();
        }
    });
});

// Solution for Safari 
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    document.getElementById("video").style.display = "none";
    document.getElementById("video2").style.display = "none";
} else {
    document.getElementById("img").style.display = "none";
    document.getElementById("img2").style.display = "none";
}