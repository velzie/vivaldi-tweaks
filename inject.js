const fractionalMainbar = true;
const collapsableMainbar = true;
const floatingTabs = true;
const floatingStatus = true;

setTimeout(() => {
	let tabs = document.querySelector("#tabs-tabbar-container");
	tabs.style.background = "#0d0d0d";
	tabs.style.position = "fixed";
	tabs.style.right = "0px";
	tabs.style.width = "32px";
	tabs.style.transition = "width 0.15s ease-out";

	if (floatingTabs) {
		tabs.style.top = "10vh";
		document.querySelector(".sync-and-trash-container").style.display = "none";
		setInterval(() => {
			let nodes = document.querySelectorAll(".tab-position");
			let h = parseInt(
				nodes[nodes.length - 2].style
					.getPropertyValue("--PositionY")
					.slice(0, -2),
			);
			tabs.style.height = h + 65 + "px";
		}, 100);
	} else {
		tabs.style.height = "100%";
		let spacer = document.createElement("div");
		spacer.style = "display: block; width: 32px";
		tabs.parentElement.appendChild(spacer);
	}

	tabs.addEventListener("mouseenter", () => (tabs.style.width = "150px"));
	tabs.addEventListener("mouseleave", () => (tabs.style.width = "32px"));

	let mainbar = document.querySelector(".mainbar");
	if (fractionalMainbar) {
		mainbar.style.position = "absolute";
		mainbar.style.width = "40%";
		mainbar.style.left = "30vw";
	} else {
		mainbar.style.width = "100%";
		mainbar.style.background = "#0d0d0d";
	}

	if (collapsableMainbar) {
		mainbar.style.position = "absolute";
		mainbar.style.overflow = "hidden";
		mainbar.style.transition = "height 0.15s ease-out";
	}

	if (collapsableMainbar) {
		let noclose = false;
		function close() {
			mainbar.style.overflow = "hidden";
			mainbar.style.height = "10px";
			// document.querySelector(".UrlBar-AddressField").style.visibility = "hidden";
		}
		function open() {
			mainbar.style.height = "32px";
			mainbar.style.overflow = "visible";
			// document.querySelector(".UrlBar-AddressField").style.visibility = "visible";
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
	}

	if (floatingStatus) {
		footer.style.position = "absolute";
		footer.style.bottom = "0px";
		footer.style.border = "none";
	}

	let s = document.createElement("style");
	s.innerHTML = `div[role=tablist]::-webkit-scrollbar {
  		display: none;
  		width: 1px;
		}`;
	document.head.appendChild(s);
}, 1000);
