const cardsButton = document.querySelectorAll('.card__button');

for (let i = 0; i < cardsButton.length; i++ ) {
    cardsButton[i].addEventListener('click', () => {
        let cardInfo = cardsButton[i].nextElementSibling;
        let cardIcon = cardsButton[i].querySelector('.card__icon');
        cardIcon.style.transform = 'rotate(-45deg)';
        if (cardInfo.style.maxHeight) {
            cardInfo.style.maxHeight = null;
            cardIcon.style.transform = 'rotate(0deg)';
            cardInfo.style.padding = '0';
        } else {
            cardInfo.style.maxHeight = cardInfo.scrollHeight + 'px'
            cardIcon.style.transform = 'rotate(-135deg)';
            cardInfo.style.padding = '25px 0px 0px';
        }
    })
}