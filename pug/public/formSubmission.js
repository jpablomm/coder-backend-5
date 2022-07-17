console.log("formSubmission starts");
document.getElementById("submitForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = document.forms[0];
  fetch("http://localhost:8080/api/productos", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      title: form.title.value,
      price: form.price.value,
      thumbnail: form.thumbnail.value,
    }),
  });
  window.location.href = "http://localhost:3000/productos";
});
