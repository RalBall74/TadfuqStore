const appData = {
    qurany: {
        title: "قرآني - Qurany",
        desc: "تطبيق قرآني ووجهة قرآنية متميزة.🤍",
        category: "تطبيق ديني",
        iconClass: "finance-gradient",
        iconImg: "qurany.jpg",
        link: "https://ralball74.github.io/qurany.assem/"
    },
    transword: {
        title: "ترانس وورد - TransWord",
        desc: "أداتك المثالية للترجمة والتعامل مع اللغات المختلفة.",
        category: "مترجم",
        iconClass: "writer-gradient",
        iconImg: "https://ralball74.github.io/transword/images/icon-512x512.png",
        link: "https://ralball74.github.io/transword/"
    },
    transcoin: {
        title: "ترانس كوين - TransCoin",
        desc: "محول عملات سريع يدعم معظم العملات العالمية مع تحديثات يومية.",
        category: "محول عملات",
        iconClass: "runner-gradient",
        iconImg: "TransCoin.jpg",
        link: "https://ralball74.github.io/transcoin/"
    },
    tictactoe: {
        title: "إكس أو - Tic-Tac-Toe",
        desc: "اللعبة الشهيرة بتصميم عصري وألوان جذابة. العب مع أصدقائك واستمتع بالتحدي.",
        category: "لعبة ذكاء",
        iconClass: "cloud-gradient",
        iconImg: "tic_tac_toe.jpg",
        link: "https://ralball74.github.io/Tic-Tac-Toe/"
    }
};

function openDetails(id) {
    const data = appData[id];
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon ${data.iconClass}">
                <img src="${data.iconImg}" width="100%">
            </div>
            <div class="modal-info">
                <h2>${data.title}</h2>
                <p>${data.category}</p>
            </div>
        </div>
        <div class="modal-content">
            <p>${data.desc}</p>
            <a href="${data.link}" target="_blank" class="action-btn">زيارة الموقع الآن</a>
        </div>
    `;

    document.getElementById('details-overlay').classList.add('active');
}


function closeDetails() {
    document.getElementById('details-overlay').classList.remove('active');
}

// Close when clicking outside
window.onclick = function (event) {
    const overlay = document.getElementById('details-overlay');
    if (event.target == overlay) {
        closeDetails();
    }
}

function showSection(sectionId) {
    // Logic for filtering can go here, but with few items we just reset
    window.scrollTo({ top: 500, behavior: 'smooth' });
}
