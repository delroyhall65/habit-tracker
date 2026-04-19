function addHabit() {
  const input = document.getElementById("habitInput");
  const habitText = input.value.trim();
  const habitList = document.getElementById("habitList");

  if (habitText === "") {
    alert("Please enter a habit");
    return;
  }

  const li = document.createElement("li");
  li.textContent = habitText;
  habitList.appendChild(li);

  input.value = ""