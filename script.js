let currentFilter = 'All'

function applyFilter() {
    let visibleCount = 0;

    cards.forEach(cardWrapper => {
        const card = cardWrapper.querySelector('.card');
        if (!card) return;

        const match =
            currentFilter === 'All' ||
            (currentFilter === 'Active' && card.classList.contains('active')) ||
            (currentFilter === 'Inactive' && !card.classList.contains('active'));

        cardWrapper.style.display = match ? '' : 'none';
        if (match) visibleCount++;
    });

    const emptyMsg = document.querySelector('.empty-message');
    emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
}

/*toggle button*/
const toggle = document.querySelectorAll('.toggle');
toggle.forEach(function (button){
    button.addEventListener('click', function () {
        button.classList.toggle('active');

        const cardWrapper = button.closest('.card-wrapper');
        const card = cardWrapper.querySelector('.card');
        card.classList.toggle('active');
        applyFilter();
    })
})

/*theme toggle button*/
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle('light');
});

/*Bind button*/
const cards = document.querySelectorAll('.card-wrapper');
cards.forEach(cardWrapper => {
    const card = cardWrapper.querySelector('.card');
    const isActive = card.classList.contains('active');
    console.log(isActive); // 输出每个卡片的状态
});

const filterButtons = document.querySelectorAll('.btn button');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.textContent;
        applyFilter();
    });
});

const removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const cardWrapper = btn.closest('.card-wrapper');
        cardWrapper.remove();
    });
});