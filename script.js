function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  document.body.appendChild(bubble);

  const size = Math.random() * 40 + 10;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.left = Math.random() * window.innerWidth + 'px';

  bubble.style.animationDuration = (Math.random() * 8 + 10) + 's';

  setTimeout(() => bubble.remove(), 16000);
}

for (let i = 0; i < 15; i++) createBubble();
setInterval(createBubble, 700);

function deleteWebhook() {
  const url = document.getElementById("deleteurl").value.trim();
  const status = document.getElementById("status");
  status.className = "";

  if (!url) {
    status.textContent = "Please enter a webhook URL.";
    status.classList.add("error");
    return;
  }

  if (!url.startsWith("https://discord.com/api/webhooks/")) {
    status.textContent = "Invalid Discord webhook URL.";
    status.classList.add("error");
    return;
  }

  status.textContent = "Processing...";

  $.ajax({
    type: "DELETE",
    url: url,
    success: function() {
      status.textContent = "Webhook deleted successfully.";
      status.classList.add("success");
    },
    error: function(xhr) {
      status.textContent = "Failed to delete webhook. HTTP " + xhr.status;
      status.classList.add("error");
    }
  });
}

document.getElementById("deleteBtn").addEventListener("click", deleteWebhook);