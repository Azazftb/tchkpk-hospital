// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // WhatsApp Appointment Submission
  function submitWhatsAppForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('w-name').value;
    const phone = document.getElementById('w-phone').value;
    const service = document.getElementById('w-service').value;
    const date = document.getElementById('w-date').value;
  
    const message = `Appointment Request:
  Name: ${name}
  Phone: ${phone}
  Service: ${service}
  Preferred Date: ${date}`;
  
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/923001234567?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".accordion-toggle");
  
    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling;
        toggle.classList.toggle("active");
  
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
  
        // Close others
        toggles.forEach(other => {
          if (other !== toggle) {
            other.classList.remove("active");
            other.nextElementSibling.style.display = "none";
          }
        });
      });
    });
  });
  