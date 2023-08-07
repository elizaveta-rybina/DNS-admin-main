async function getData(){
    return $.ajax({
		type: "GET",
		url: "../php/get/domains.php",
		dataType: "html",
		success: function (response) {
		},
	});
}

async function main() {
    const postsData = await getData();
    const arr = JSON.parse(postsData);

    let currentPage = 1;
    let rows = 7;
  
    function displayList(arrData, rowPerPage, page) {
        const postsEl = document.querySelector('#domains');
        postsEl.innerHTML = "";
        page--;
        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginatedData = arrData.slice(start, end);
        $.getScript("../javascript/frames/domains.js", function () {
            paginatedData.forEach((element) => {
                $('#domains').append(domainHelper([{name: element.name}]));
            })
        });
    }
  
    function displayPagination(arrData, rowPerPage) {
      const paginationEl = document.querySelector('.pagination');
      const pagesCount = Math.ceil(arrData.length / rowPerPage);
      const ulEl = document.createElement("ul");
      ulEl.classList.add('pagination__list');
  
      for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl)
      }
      paginationEl.appendChild(ulEl)
    }
  
    function displayPaginationBtn(page) {
      const liEl = document.createElement("li");
      liEl.classList.add('pagination__item')
      liEl.innerText = page
  
      if (currentPage == page) liEl.classList.add('pagination__item--active');
  
      liEl.addEventListener('click', () => {
        currentPage = page
        displayList(arr, rows, currentPage)
  
        let currentItemLi = document.querySelector('li.pagination__item--active');
        currentItemLi.classList.remove('pagination__item--active');
  
        liEl.classList.add('pagination__item--active');
      })
  
      return liEl;
    }
  
    displayList(arr, rows, currentPage);
    displayPagination(arr, rows);
  }
  
  main();