const tags = document.getElementsByClassName("tag");

for (let tag of tags) {
	tag.addEventListener("click", () => {
		tag.classList.toggle("selected");
	});
}
