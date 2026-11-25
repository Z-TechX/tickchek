const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Keep one FAQ answer open at a time for a tidy accordion experience.
document.querySelectorAll('.faq-list details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-list details').forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// document.getElementById('rm').addEventListener('submit', event => {
//   event.preventDefault();
//   const form = new FormData(event.currentTarget);
//   const subject = encodeURIComponent(`TickChik event enquiry — ${form.get('eventType')}`);
//   const body = encodeURIComponent(
//     `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nEvent type: ${form.get('eventType')}\n\nDetails:\n${form.get('message') || 'Not provided'}`
//   );
//   document.getElementById('formNote').textContent = 'Your email app should open with the enquiry prepared. Send it to complete your enquiry.';
//   window.location.href = `mailto:info@z-techx.com?subject=${subject}&body=${body}`;
// });
