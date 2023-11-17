export function getDomainId(){
  let domainid = new URL(window.location.href).searchParams.get("domainid");
  return domainid;
}

export function getDomainName(){
  let domainid = getDomainId();
  let returnValue;
  $.ajax({
        type: 'GET',
        url: '../php/get/domainName.php',
        data: { id: domainid},
        async: false,
        success: function (domainName) {
          returnValue = domainName;
        }
  });
  return returnValue;
};
