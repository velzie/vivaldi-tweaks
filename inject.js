setTimeout(() => {
	let tabs = document.querySelector("#tabs-tabbar-container");
	tabs.style.background = "#0d0d0d";
	tabs.style.position = "fixed";
	tabs.style.right = "0px";
	tabs.style.width = "32px";
	tabs.style.transition = "width 0.15s ease-out";

	let spacer = document.createElement("div");
	spacer.style = "display: block; width: 32px";
	tabs.parentElement.appendChild(spacer);

	tabs.addEventListener("mouseenter", () => (tabs.style.width = "150px"));
	tabs.addEventListener("mouseleave", () => (tabs.style.width = "32px"));

	let mainbar = document.querySelector(".mainbar");
	mainbar.style.width = "50%";
	mainbar.style.left = "500px";
	mainbar.style.position = "absolute";
	mainbar.style.overflow = "hidden";
	mainbar.style.transition = "height 0.15s ease-out";

	let noclose = false;
	function close() {
		mainbar.style.overflow = "hidden";
		mainbar.style.height = "10px";
		document.querySelector(".UrlBar-AddressField").style.visibility = "hidden";
	}
	function open() {
		mainbar.style.height = "32px";
		mainbar.style.overflow = "visible";
		document.querySelector(".UrlBar-AddressField").style.visibility = "visible";
	}
	close();
	let over = false;
	mainbar.addEventListener("mouseenter", () => {
		noclose = true;
		over = true;
		open();
		setTimeout(() => {
			noclose = false;
			if (!over) close();
		}, 1000);
	});
	urlFieldInput.addEventListener("focus", () => {
		open();
	});
	// urlFieldInput.addEventListener("unfocus", close);
	urlFieldInput.addEventListener("change", () => {
		open();
	});
	mainbar.addEventListener("mouseleave", () => {
		over = false;
		if (noclose) return;
		close();
	});

	footer.style.position = "absolute";
	footer.style.bottom = "0px";
	footer.style.border = "none";
	document.querySelector("span[name=StatusInfo]").remove();
	document.querySelector("button[name=CaptureImages]").remove();
	document.querySelector("div[name=Zoom]").remove();
	document.querySelector("button[name=PageActions]").remove();

	let s = document.createElement("style");
	s.innerHTML = `div[role=tablist]::-webkit-scrollbar {
  	display: none;
  	width: 1px;
	}`;
	document.head.appendChild(s);
}, 1000);
