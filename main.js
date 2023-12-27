const domain = window.location.href;

const blockListDomains = [
  "youtube.com",
  "mail.ru",
  "vk.com",
  "yandex.ru",
  "gmail.com",
  "mail.google.com",
  "127.0.0.1:5500",
];

function sortDomains() {
  let s = new RegExp(domain.split("/")[2]);
  return blockListDomains.filter((item) => item.match(s)).join();
}

function checkPageUrl() {
  if (sortDomains()) {
    return alert("Доступ запрещен");
  }
}

// сделать модальное окно (баннер), можно посмотреть в сторону модульности и подключать отдельным html файлом
