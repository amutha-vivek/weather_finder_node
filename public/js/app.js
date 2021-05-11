const message1 = $("#message-1");
const message2 = $("#message-2");

$("form").on("submit", e => {
  e.preventDefault();
  message1.text("Loading...");
  message2.text("");
  const place = $("input").val();
  const url = "/weather?location=" + encodeURIComponent(place);
  fetch(url).then(response => {
    response.json().then(data => {
      if (data.error) {
        message1.text(data.error);
      } else {
        message1.text(data.place);
        message2.text(data.forecast);
      }
    });
  });
});
