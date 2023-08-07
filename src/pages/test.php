<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="/css/style_test.css">
  <title>Модальное окно на чистом CSS</title>
</head>

<body>
  <div class="container">
    <div style="text-align: center;">
      <a href="#openModal">Открыть модальное окно</a>
    </div>
    <div id="openModal" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">Добавление</h3>
            <a href="#close" title="Close" class="close">×</a>
          </div>
          <div class="modal-body">
            Содержимое модального окна...
          </div>
        </div>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="javascript/button.js"></script>
</body>
</html>