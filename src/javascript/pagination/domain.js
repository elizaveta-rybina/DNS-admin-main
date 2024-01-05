function getData() {
  return $.ajax({
    type: "GET",
    url: "../php/get/domains.php",
    dataType: "html",
    success: function (response) {

    },
  });
}

import { domainHelper } from "../frames/domains.js";

$(document).ready(function() {
  const postsData = getData();
  const arr = JSON.parse(postsData);

  let currentPage = 1;
  let rows = 5;

  function displayList(arrData, rowPerPage, page) {
    const postsEl = document.querySelector("#domains");
    postsEl.innerHTML = "";
    page--;

    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach((element) => {
        $("#domains").append(domainHelper([{ name: element.name }]));
    });
  }

  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector(".pagination .navigator");
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement("ul");
    ulEl.classList.add("pagination__list");

    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
  }

  function displayPaginationBtn(page) {
    const liEl = document.createElement("li");
    liEl.classList.add("pagination__item");
    liEl.innerText = page;

    if (currentPage == page) liEl.classList.add("pagination__item--active");

    liEl.addEventListener("click", () => {
      currentPage = page;
      displayList(arr, rows, currentPage);

      let currentItemLi = document.querySelector("li.pagination__item--active");
      currentItemLi.classList.remove("pagination__item--active");

      liEl.classList.add("pagination__item--active");
    });

    return liEl;
  }
  displayPagination(arr, rows);
})

// function handlePaginationClick(new_page_index, pagination_container, countOfDomains) {
//   getData(function(){
//     $("#domains").append(domainHelper([{ name: element.name }]));
//   });
//   return false;
//   // console.log(postsData);
//   // const arr = JSON.parse(postsData.values);
//   // for(var i in arr)
//   //   $("#domains").append(domainHelper([{ name: element.name }]));
//   // return false;
// }

// $("#domains").pagination(122, {
//   items_per_page:7,
//   callback:handlePaginationClick
// }
// );
