<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="../css/style_main.css" />
  <title>Main page</title>
</head>

<body>
  <div class="container-main">
    <h1 class="page-title">Домены и поддомены</h1>
    <div class="main-form">
      <div class="form-head">
        <h3>Список доменов</h3>
        <div class="right-side">
          <form class="search-box">
            <div class="row">
              <input name="inputBox" type="text" id="inputBox" placeholder="Поиск" autocomplete="off">
              <button type="sumbit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div class="result-box">
            </div>
          </form>
          <div class="sort">
            <button class="sortByName">
              <i class="fa-solid fa-sort"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="form-middle">Домены и поддомены</div>
      <div id="domains"></div>
    </div>
    <div class="pagination">
      <div class="navigator"></div>
    </div>
  </div>

  <form class="modal fade" id="AddDomain" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Добавление домена</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Название домена:</p>
          <input id="domainInput" class="form-control" type="text" name="Domain">
        </div>
        <div class="modalError">
          <p id="error" hidden></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Отменить
          </button>
          <button type="sumbit" class="btn btn-primary" id="DomenButton">
            Добавить
          </button>
        </div>
      </div>
    </div>
  </form>

  <form class="modal fade" id="domainDeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLabel">Вы уверены, что хотите удалить домен?</h6>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- <div class="modal-body">
          <p>Вы уверены, что хотите удалить домен?</p>
          <input id="domainDelete" class="form-control" type="text" name="Domen">
        </div> -->
        <div class="modalError">
          <p id="error" hidden></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Нет
          </button>
          <button type="sumbit" class="btn btn-primary" id="deleteDomain">
            Да
          </button>
        </div>
      </div>
    </div>
  </form>



  <script type="text/javascript" src="/javascript/libs/jquery-3.7.0.min.js"></script>
  <script type="text/javascript" src="/javascript/libs/popper.min.js"></script>
  <script type="text/javascript" src="/javascript/libs/bootstrap.min.js"></script>
  <script type="text/javascript" src="/javascript/libs/jquery.pagination.js"></script>

  <script type="module" src="/javascript/mainView/domains.js"></script>

  <script type="text/javascript" src="/javascript/autocomplete.js"></script>
  <script type="module" src="/javascript/search/domain.js"></script>
  <script type="module" src="/javascript/sort/sortMainDomain.js"></script>

  <script type="text/javascript" src="/javascript/delete/domain.js"></script>

  <script src="https://kit.fontawesome.com/c4254e24a8.js" crossorigin="anonymous"></script>


</body>

</html>


<!-- <div class="form-body">
  <a href="#">university2.ru</a>
  <div class="buttons">
    <button class="adding"><img src="image/add.png" /></button>
    <div class="setting">
      <button
        class="btn-color btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src="image/setting.png" />
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Общие настройки</a>
        <a class="dropdown-item" href="setting.html">Настройка DNS</a>
        <a class="dropdown-item" href="#">Передача домена</a>
      </div>
    </div>
    <button class="delete" data-toggle="modal" data-target="#exampleModal"><img src="image/delete.png" /></button>
  </div>
</div> -->
