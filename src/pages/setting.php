<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link type="text/css" href="/css/bootstrap.min.css" rel="stylesheet">
  <link type="text/css" rel="stylesheet" href="/css/style_setting.css">
  <title>Document</title>
</head>

<body>
  <div class="container-main">
    <div class="returnDomains">
      <img src="../image/left.png">
      <form action="../index.php" class="returnDomainText">
        <button>Вернуться обратно к доменам</button>
      </form>
    </div>
    <h1 class="page-title" id="domain-title">Настройка DNS домена <span class="alert alert-info">.</span></h1>
    <div class="main-form">
      <div class="form-head">
        <h3>Список DNS-записей</h3>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle big" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Добавить запись
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalARecord">A</a>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalMXRecord">MX</a>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalSRVRecord">SRV</a>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalCNameRecord">CNAME</a>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalTXTRecord">TXT</a>
          </div>
        </div>
        <div class="btn-group">
          <button class="btn btn-secondary btn-sm dropdown-toggle small" type="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
           +
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalARecord">A</a>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalMXRecord">MX</a>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalSRVRecord">SRV</a>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalCNameRecord">CNAME</a>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalTXTRecord">TXT</a>
          </div>
        </div>
      </div>
      <div class="form-middle">
        <span>Хост</span>
        <span>Тип</span>
        <span>Значение</span>
        <span>Настройки</span>
      </div>
      <div id="records">

      </div>
      <div id="form-body">

      </div>
    </div>

    <!-- Modal ARecord-->
    <form class="modal fade" id="exampleModalARecord" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Добавление A-записи</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Значение</p>
            <input id="ARecordInput" class="form-control" type="text" name="ARecord" placeholder="___.___.___.___">
          </div>
          <div class="modalError">
            <p id="error" hidden></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Отменить
            </button>
            <button type="sumbit" class="btn btn-primary" id="ARecordButton">
              Добавить
            </button>
          </div>
        </div>
      </div>
    </form>

    <!-- Modal MXRecord-->
    <form class="modal fade" id="exampleModalMXRecord" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Добавление MX-записи</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Приоритет: </p>
            <input id="MXRecordInputPr" class="form-control" type="text" placeholder=" ">
            <p>Значение: </p>
            <input id="MXRecordInput" class="form-control" type="text" placeholder=" ">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Отменить
            </button>
            <button type="sumbit" class="btn btn-primary sure" id="MXRecordButton">Добавить</button>
          </div>
        </div>
      </div>
    </form>

    <!-- Modal SRVRecord-->
    <form class="modal fade" id="exampleModalSRVRecord" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Добавление SRV-записи</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Служба:</p>
            <input class="form-control" type="text" placeholder="Например, _sip">
            <p>Протокол:</p>
            <input class="form-control" type="text" placeholder="Например, _sip">
            <p>Приоритет:</p>
            <input class="form-control" type="text" placeholder="Например, 20">
            <p>Порт:</p>
            <input class="form-control" type="text" placeholder="Например, 5060">
            <p>Хост:</p>
            <input class="form-control" type="text" placeholder="Например, university.sever.ru">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Отменить
            </button>
            <button type="button" class="btn btn-primary sure" disabled="disabled">Добавить</button>
          </div>
        </div>
      </div>
    </form>
    <!-- Modal CNameRecord-->
    <div class="modal fade" id="exampleModalCNameRecord" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Добавление CNAME-записи</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Значение: </p>
            <input class="form-control" type="text" placeholder="">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Отменить
            </button>
            <button type="button" class="btn btn-primary sure" disabled="disabled">Добавить</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal TXTRecord-->
    <div class="modal fade" id="exampleModalTXTRecord" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Добавление TXT-записи</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Значение: </p>
            <input class="form-control" type="text" placeholder="">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary sure" disabled="disabled">Добавить</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Отменить
            </button>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="/javascript/jquery-3.7.0.min.js"></script>
    <script type="text/javascript" src="/javascript/popper.min.js"></script>
    <script type="text/javascript" src="/javascript/bootstrap.min.js"></script>

    <script type="text/javascript" src="/javascript/setting.js"></script>
    <script type="text/javascript" src="/javascript/add/arecord.js"></script>
    <script type="text/javascript" src="/javascript/add/mxrecord.js"></script>
    <script type="text/javascript" src="/javascript/get/arecords.js"></script>
    <script type="text/javascript" src="/javascript/get/mxrecords.js"></script>

</body>

</html>

<!--
integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous" async
 integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous" defer
 integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous" async
-->