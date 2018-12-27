function checkOnLoad() {
		var url = document.URL;
		var urlSplit = url.split("#");
		var id = urlSplit[1]; // Like About Me or Work or Stack...
		//window.alert(id);
		switch(id) {
			case "about-me":
				document.getElementById("about-me").style.display = "block";
				break;
			case "work":
				document.getElementById("work").style.display = "block";
				break;
			case "stack":
				document.getElementById("stack").style.display = "block";
				break;
			case "contact":
				document.getElementById("contact").style.display = "none";
				break;
			default:
				document.getElementById("about-me").style.display = "block";
				break;
		}
	}

	function changeToAboutMe() {
		var aboutMe = document.getElementById("about-me");
		var work = document.getElementById("work");
		var stack = document.getElementById("stack");
		var contact = document.getElementById("contact");
		aboutMe.style.display = "block";
		work.style.display = "none";
		stack.style.display = "none";
		contact.style.display = "none";
	}

	function changeToWork() {
		var aboutMe = document.getElementById("about-me");
		var work = document.getElementById("work");
		var stack = document.getElementById("stack");
		var contact = document.getElementById("contact");
		aboutMe.style.display = "none";
		work.style.display = "block";
		stack.style.display = "none";
		contact.style.display = "none";
	}

	function changeToStack() {
		var aboutMe = document.getElementById("about-me");
		var work = document.getElementById("work");
		var stack = document.getElementById("stack");
		var contact = document.getElementById("contact");
		aboutMe.style.display = "none";
		work.style.display = "none";
		stack.style.display = "block";
		contact.style.display = "none";
	}

	function changeToContact() {
		var aboutMe = document.getElementById("about-me");
		var work = document.getElementById("work");
		var stack = document.getElementById("stack");
		var contact = document.getElementById("contact");
		aboutMe.style.display = "none";
		work.style.display = "none";
		stack.style.display = "none";
		contact.style.display = "none";
	}

	function mouseOverResume(container) {
		container.style.backgroundColor = "white";
		container.style.color = "black";
		container.style.cursor = "pointer";
	}

	function mouseOutResume(container) {
		container.style.backgroundColor = "black";
		container.style.color = "white";
		container.style.cursor = "default";
	}

	function contactSendMessage() {
		var name = document.getElementById("name");
		var email = document.getElementById("email");
		var message = document.getElementById("message");
		//window.alert(name.value + "\n" + email.value + "\n" + message.value);
		var link = "mailto:xxx@gmail.com"
					+ "?cc=" + email
					+ "&subject=" + escape("contact-personal-website")
					+ "&body=" + escape(message);
		window.location.href = link;
	}