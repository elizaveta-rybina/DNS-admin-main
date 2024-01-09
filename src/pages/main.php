<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link href="/css/bootstrap.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="../css/style_main.css"/>
  <title>Main page</title>
</head>

<body>
  <div class="container-main">
    <div class="personalSpace">
      <form action="personalspace.html" class="personalSpaceText">
        <button><i class="fa-solid fa-user"></i>
        <span>Личный кабинет</span></button>
      </form>
    </div>
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

  <script type="text/javascript" src="/javascript/libs/jquery-3.7.0.min.js"></script>
  <script type="text/javascript" src="/javascript/libs/popper.min.js"></script>
  <script type="text/javascript" src="/javascript/libs/bootstrap.min.js"></script>

  <script type="module" src="/javascript/mainView/domains.js"></script>

  <script type="text/javascript" src="/javascript/autocomplete.js"></script>
  <script type="module" src="/javascript/search/domain.js"></script>
  <script type="module" src="/javascript/sort/sortMainDomain.js"></script>

  <script type="text/javascript" src="/javascript/delete/domain.js"></script>

  <script src="https://kit.fontawesome.com/c4254e24a8.js" crossorigin="anonymous"></script>


</body>

</html>
