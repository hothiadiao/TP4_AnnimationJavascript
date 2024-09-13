const box = document.getElementById("box");

        // 1. Animation lors d'un clic
        box.addEventListener("click", () => {
            gsap.to(box, {duration: 1, x: 100, backgroundColor: "yellow", scale: 1.5});
        });

        // 2. Animation lors d'un double clic
        box.addEventListener("dblclick", () => {
            gsap.to(box, {duration: 1, x: 0, backgroundColor: "lightblue", scale: 1});
        });

        // 3. Animation lors d'un survol (mouseover)
        box.addEventListener("mouseover", () => {
            gsap.to(box, {duration: 0.5, rotation: 360, scale: 1.2});
        });

        // 4. Animation lors de la sortie de la souris (mouseout)
        box.addEventListener("mouseout", () => {
            gsap.to(box, {duration: 0.5, rotation: 0, scale: 1});
        });

        // 5. Animation lors de l'appui d'une touche (keydown)
        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                gsap.to(box, {duration: 1, x: -100, backgroundColor: "red", scale: 0.8});
            }
        });