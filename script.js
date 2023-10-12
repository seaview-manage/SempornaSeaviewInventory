var buttonsData = [
    { label: "Emergency", link: "https://1drv.ms/i/s!AtdhzsQUaU89hAeopnUU2R1m1P-v?e=jjbaCf" },
    { label: "TV Channel", link: "https://1drv.ms/i/s!AtdhzsQUaU89hA2f7UEZiR8lB4AU?e=i2CCgT" },
    { label: "Surrounding", link: "https://1drv.ms/i/s!AtdhzsQUaU89hAyOoqJZhg9fOh9-?e=Jr91BP" },
    { label: "Earth Hour", link: "https://1drv.ms/i/s!AtdhzsQUaU89hAbJ3guqPzkmNDd0?e=p2YbVL" },
    { label: "Energy Saving", link: "https://1drv.ms/i/s!AtdhzsQUaU89hA_0GD3X82nI0UMF?e=UrSN3P" },
    { label: "Zero Waste", link: "https://1drv.ms/i/s!AtdhzsQUaU89hBBckhIblDYF1UPw?e=QyiIRC" }
];

var buttonsContainer = document.getElementById("buttons-container");

buttonsData.forEach(function (buttonInfo) {
    var button = document.createElement("a");
    button.className = "button";
    button.innerText = buttonInfo.label;
    button.href = buttonInfo.link;
    button.target = "_blank"; // Open link in a new tab
    buttonsContainer.appendChild(button);
});
