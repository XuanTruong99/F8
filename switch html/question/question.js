const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// header focus on inputelement and click information
const headerInputElement = $(".header__search-wrap input");
const rootElement = $(".app__wrap");
const bellBtn = $(".header__information-notify");
const boxNotify = $(".header__information-notify-box");
const inforImg = $(".header__information-img");
const boxUser = $(".header__information-user-box");

bellBtn.onclick = function () {
  boxNotify.classList.toggle("isopen");
};

bellBtn.addEventListener("click", function (e) {
  e.stopPropagation();
});

boxNotify.addEventListener("click", function (e) {
  e.stopPropagation();
});

headerInputElement.onfocus = function () {
  $(".header__search-wrap").style.border = "1px solid var(--primary-color)";
};
rootElement.onclick = function () {
  $(".header__search-wrap").style.border = "1px solid rgba(0, 0, 0, 0.1)";
  // Close boxNotify when click app
  boxNotify.classList.remove("isopen");
  // Close userBox when click app
  boxUser.classList.remove("isopen");
  // Close addBox
  addIcon.classList.remove("isrotate");
  boxAdd.classList.remove("isopen");
};

headerInputElement.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Click infor
inforImg.onclick = function () {
  boxUser.classList.toggle("isopen");
};

inforImg.addEventListener("click", function (e) {
  e.stopPropagation();
});

boxUser.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Add js

const addBtn = $(".page__sidebar-add-item-link");
const addIcon = $(".page__sidebar-add-item-icon");
const boxAdd = $(".page__sidebar-add-box");

addBtn.onclick = function () {
  addIcon.classList.toggle("isrotate");
  boxAdd.classList.toggle("isopen");
};

addBtn.addEventListener("click", function (e) {
  e.stopPropagation();
});

boxAdd.addEventListener("click", function (e) {
  e.stopPropagation();
});

// app

const questionsList = document.querySelector(".page__question-content-main");

const questionApp = {
  questions: [
    {
      title:
        "Ai th???y giao di???n m???i c???a web anh S??n hi???n ?????i t???i gi???n d?? tay n??o?! ????",
      userImg:
        "https://avatar-redirect.appspot.com/google/114408222476873472712?size=400",
      name: "Phuong Quang Tran",
      content:
        "Ai th???y giao di???n m???i c???a web anh S??n v???a hi???n ?????i v???a t???i gi???n d?? tay...",
      user1:
        "https://graph.facebook.com/502686104496550/picture?width=400&height=400",
      user2:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      user3:
        "https://avatar-redirect.appspot.com/google/100590014939133298757?size=400",
      comment: 127,
    },
    {
      title:
        "em m???i b???t ?????u kh??a h???c th?? kh??ng bi???t vi???t code ??? ph???n m???m g?? v ???. a gi??p e vs ???",
      userImg: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      name: "",
      content: "m???i ng?????i gi??p em ph???n m???m vi???t code l?? g??...",
      user1:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      user2:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      user3:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      comment: 12,
    },
    {
      title: "TH???I GIAN T??? H???C V?? H???C NGO??I NH?? TH??? N??O?",
      userImg:
        "https://graph.facebook.com/1804657899734569/picture?width=400&height=400",
      name: "Tran Luan",
      content: "TH???I GIAN T??? H???C V?? H???C NGO??I NH?? TH??? N??O?",
      user1:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      user2:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      user3:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      comment: 9,
    },
    {
      title: "CSS Animation",
      userImg:
        "https://cdn.fullstack.edu.vn/f8-learning/user_photos/100420/614b5a452ec3d.jpg",
      name: "Kh??nh D????ng Nguy???n ?????c",
      content:
        "M???i ng?????i cho em h???i l?? l??m th??? n??o ????? ch??? ??nh's Food kia c???a em c?? animation fly in gi???ng ??? b??n powerpoint...",
      user1:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      user2:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      user3:
        "https://avatar-redirect.appspot.com/google/114872706407217018723?size=400",
      comment: 5,
    },
    {
      title: "V???n ????? vi???c l??m",
      userImg:
        "https://cdn.fullstack.edu.vn/f8-learning/user_photos/104212/6154fb495267a.jpg",
      name: "Phaolo ?????i",
      content:
        "em ch??o m???i ng?????i em t??n ?????i n??m nay em 17t em ngh?? h???c khi em v???a h???c h???t l???p 8 v?? em ???? ??i l??m ngo??i x?? h???i t??? n??m em 14t kh??ng bi???t n???u em theo ngh??? n??y...",
      user1: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user2: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user3: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      comment: 4,
    },
    {
      title: "h???i v??? giao di???n web",
      userImg:
        "https://avatar-redirect.appspot.com/google/105708715739407813171?size=400",
      name: "Tr???n M???nh Ti???n",
      content:
        "c??c b??c cho e h???i x??u ???, l??m th??? n??o ????? e c?? tr??nh edit text nh?? f8 ???, b??c n??o bi???t ch??? em v???i ???, ho???c cho e xin keyword e t??m hi???u, em...",
      user1: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user2:
        "https://avatar-redirect.appspot.com/google/103380879646448007380?size=400",
      user3:
        "https://avatar-redirect.appspot.com/google/105708715739407813171?size=400",
      comment: 3,
    },
    {
      title: "H???i v??? extension",
      userImg:
        "https://graph.facebook.com/470104780827697/picture?width=400&height=400",
      name: "Nguy???n Thu???n",
      content:
        "M???i ng?????i cho em h???i l?? c?? extension tr??n VS g???i ?? code, m??nh ch??? c???n g?? 1 c??i l?? t??? ?????ng ra lu??n m???y d??ng l???nh code nh?? ?? m??nh mu???n. Anh S??n c?? n??i ???...",
      user1: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user2: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user3: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      comment: 3,
    },
    {
      title: "L??m th??? n??o ????? t???o m???t web (app) tracking delivery?",
      userImg:
        "https://avatar-redirect.appspot.com/google/101478883022621173060?size=400",
      name: "Th??n S??n",
      content:
        "Ch??o m???i ng?????i !  Hi???n t???i m??nh ??ang c?? nhu c???u l??m m???t trang web (ho???c app) c?? th??? check ????n h??ng ???? giao ??i t???i ????u gi???ng nh?? check ????n h??ng trong...",
      user1: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user2: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      user3: "https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg",
      comment: 2,
    },
  ],

  render: function () {
    const commentHtmls = this.questions.map(function (data) {
      return `
            <div class="page__question-content-main-item">
            <div class="page__question-content-main-header">
                <span class="page__question-content-main-header-topics">Front-end/ Mobile Apps</span>
                <div class="page__question-content-main-header-icon">
                    <i class="far fa-bookmark"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>

            <div class="page__question-content-main-heading">
                <span>${data.title}</span>
            </div>

            <div class="page__question-content-main-profile">
                <div class="page__question-content-main-profile-left">
                    <img src="${data.userImg}" alt="" class="page__question-content-main-profile-left-img">
                    <span class="page__question-content-main-profile-left-name">????ng b???i <strong>${data.name}</strong></span>
                    <span class="page__question-content-main-profile-left-date">2 th??ng tr?????c</span>
                </div>

                <div class="page__question-content-main-profile-right">
                    <img src="${data.user1}" alt="" class="page__question-content-main-profile-right-img user1">
                    <img src="${data.user2}" alt="" class="page__question-content-main-profile-right-img user2">
                    <img src="${data.user3}" alt="" class="page__question-content-main-profile-right-img user3">
                    <span>${data.comment} tr??? l???i</span>
                </div>
            </div>

            <span class="page__question-content-main-text">${data.content}</span>
            
            <div class="page__question-content-main-hastag">
                <div class="page__question-content-main-hastag-wrap">
                    <span>chat</span>
                    <span>qna</span>
                    <span>sharing</span>
                </div>

                <button>Chi ti???t</button>
            </div>
        </div>
            `;
    });

    questionsList.innerHTML = commentHtmls.join("");
  },

  start: function () {
    this.render();
  },
};

questionApp.start();

// const pageContent = document.querySelector('.page__content')
// // var testLink = pageContent.getElementsByTagName('a')

// const noticeWarn = document.querySelector('#notice')
// for(let i = 0; i < testLink.length; i++) {
//     const testLinks = testLink[i]
//     if(testLinks.getAttribute('href') === "undefined" || testLinks.getAttribute('href') === "") {
//         testLinks.setAttribute("href", "#")
//         testLinks.addEventListener('click', function(e) {
//             e.preventDefault()
//         })
//     }

//     testLinks.onclick = function() {
//         if(testLinks.getAttribute('href') === '#') {
//             const warning = document.createElement('div')
//             warning.classList.add('notice__warn');
//             warning.innerHTML = `
//                 <div class="notice__warn-icon">
//                     <i class="fas fa-exclamation-circle"></i>
//                 </div>
//                 <div class="notice__warn-content">
//                     <h3 class="notice__warn-heading">Th??ng b??o</h3>
//                     <span class="notice__warn-message">N???i dung ??ang trong qu?? tr??nh ho??n thi???n !</span>
//                 </div>
//             `
//             noticeWarn.appendChild(warning)

//             setTimeout(function() {
//                 noticeWarn.removeChild(warning)
//             },2500)
//         }
//     }
// }

const menuRespon = document.querySelector(".header__icon-menu");
const sidebarRespon = document.querySelector(".side__bar-respon");
const sidebarLeft = document.querySelector(".side__bar-respon-left");
const exitSibar = document.querySelector(".side__bar-respon-right");

menuRespon.onclick = function () {
  sidebarRespon.classList.add("iscover-fill");
  sidebarLeft.classList.add("isopen-sidebar-respon");
};

exitSibar.onclick = function () {
  sidebarRespon.classList.remove("iscover-fill");
  sidebarLeft.classList.remove("isopen-sidebar-respon");
};
