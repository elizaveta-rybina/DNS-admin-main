var User = /** @class */ (function () {
  function User(_firstName, _lastName, _fatherName, id) {
      this._firstName = _firstName;
      this._lastName = _lastName;
      this._fathertName = _fatherName;
      this.id = id;
  }
  Object.defineProperty(User.prototype, "firstName", {
      get: function () {
          return this._firstName;
      },
      enumerable: false,
      configurable: true
  });
  Object.defineProperty(User.prototype, "lastName", {
      get: function () {
          return this._lastName;
      },
      set: function (lastName) {
          this._lastName = lastName;
      },
      enumerable: false,
      configurable: true
  });
  Object.defineProperty(User.prototype, "fathertName", {
      get: function () {
          return this._fathertName;
      },
      set: function (fathertName) {
          this._fathertName = fathertName;
      },
      enumerable: false,
      configurable: true
  });

  function getUsers(callback) {
    $.ajax({
      type: "GET",
      url: "../php/users/user.php",
      dataType: "html",
      success: function (response) {
        callback(JSON.parse(response));
      },
    });
  };
  
  return User;
}());

