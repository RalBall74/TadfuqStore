const appData = {
    hamsa: {
        title: "Hamster",
        desc: "تطبيق محادثة ودردشة يركز على الخصوصية.",
        category: "تطبيق محادثة",
        iconClass: "finance-gradient",
        iconImg: "img/Hamsa.jpg",
        link: "https://hamster-chat.vercel.app/"
    },
    labcore: {
        title: "LabCore",
        desc: "تطبيق متخصص في عرض نتائج وتفاصيل وأخبار الفورمولا 1 مع متابعة حية لجميع السباقات والفرق.",
        category: "تطبيق رياضي",
        iconClass: "finance-gradient",
        iconImg: "img/labcore.png",
        link: "#"
    },
    qurany: {
        title: "Qurany",
        desc: "تطبيق قرآني ووجهة قرآنية متميزة.🤍",
        category: "تطبيق ديني",
        iconClass: "finance-gradient",
        iconImg: "img/qurany.jpg",
        link: "https://ralball74.github.io/qurany.assem/"
    },
    tictactoe: {
        title: "Tic-Tac-Toe",
        desc: "اللعبة الشهيرة بتصميم عصري وألوان جذابة. العب مع أصدقائك واستمتع بالتحدي.",
        category: "لعبة ذكاء",
        iconClass: "cloud-gradient",
        iconImg: "img/tic_tac_toe.jpg",
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
