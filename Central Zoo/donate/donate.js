const form = document.getElementById("donation-form");
const resultContainer = document.getElementById("result-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    accountnumber: formData.get("accoun number"),
    amount: formData.get("amount"),
  };
});