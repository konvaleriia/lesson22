function displayCoordinates(event) {
            var x = event.clientX;
            var y = event.clientY;

            var coordinatesElement = document.getElementById("coordinates");

            coordinatesElement.innerHTML = "Координати: X = " + x + ", Y = " + y;
        }

        document.addEventListener("click", displayCoordinates);