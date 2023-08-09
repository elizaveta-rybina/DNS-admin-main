<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="/css/style_main.css" />
  <title>Main page</title>
</head>

<body>
  <div class="container-main">
    <h1 class="page-title">Домены и поддомены</h1>
    <div class="add-domain">
      <img src="image/domain.png" alt="Icon" />
      <a class="add-domain-link" href="#" data-toggle="modal" data-target="#exampleModalDomain">Добавить домен</a>
    </div>
    <div class="main-form">
      <div class="form-head">
        <h3>Список доменов</h3>
        <button><img src="image/find.png" /></button>
      </div>
      <div class="form-middle">Домены и поддомены</div>
      <div id="domains"></div>
    </div>
    <div class="pagination">
      <div class="navigator"></div>
    </div>
  </div>

  <form class="modal fade" id="exampleModalDomain" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
          <h5 class="modal-title" id="exampleModalLabel">Удаление домена</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Вы уверены, что хотите удалить домен?</p>
          <input id="domainDelete" class="form-control" type="text" name="Domen">
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

  

  <script type="text/javascript" src="/javascript/jquery-3.7.0.min.js"></script>
  <script type="text/javascript" src="/javascript/popper.min.js"></script>
  <script type="text/javascript" src="/javascript/bootstrap.min.js"></script>
  <script type="text/javascript" src="/javascript/add/domain.js"></script>
  <script type="text/javascript" src="/javascript/get/domains.js"></script>
  <script type="text/javascript" src="/javascript/pagination/domain.js"></script>
  <script type="text/javascript" src="/javascript/delete/domain.js"></script>

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