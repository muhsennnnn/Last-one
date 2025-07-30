const cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>السلة فارغة.</p>";
    return;
  }

  const ul = document.createElement("ul");
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}`;
    ul.appendChild(li);
  });

  cartContainer.appendChild(ul);
}

document.getElementById("order-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();

  if (cart.length === 0) {
    alert("سلة الطلب فارغة!");
    return;
  }

  let message = `🛒 طلب جديد من أعلاف السالم\n`;
  message += `👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n\n`;
  message += `📦 المنتجات المطلوبة:\n`;

  cart.forEach(item => {
    message += `- ${item.name} (${item.price})\n`;
  });

  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = "964XXXXXXXXXX"; // <-- استبدله لاحقًا برقمك الحقيقي

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
});
