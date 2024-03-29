	const container = document.querySelector(".data-container");

	// function to generate bars
	function generatebars(num = 100) {
		
	//for loop to generate 100 bars
	for (let i = 0; i < num; i += 1) {

		// To generate random values from 1 to 100
		const value = Math.floor(Math.random() * 1000) + 1;
		
		// To create element "div"
		const bar = document.createElement("div");

		// To add class "bar" to "div"
		bar.classList.add("bar");

		// Provide height to the bar
		bar.style.height = `${value * 1/2}px`;

		// Translate the bar towards positive X axis
		bar.style.transform = `translateX(${i * 12}px)`;
		
		// To create element "label"
		const barLabel = document.createElement("label");

		// To add class "bar_id" to "label"
		barLabel.classList.add("bar_id");

		// Assign value to "label"
		barLabel.innerHTML = value;
		
		// Append "Label" to "div"
		bar.appendChild(barLabel);

		// Append "div" to "data-container div"
		container.appendChild(bar);
	}
	}
	
	
	function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 0.0000001);
        });
    });
}

	// asynchronous function to perform "Selection Sort"
	async function SelectionSort(delay = 0.0000001) {
	let bars = document.querySelectorAll(".bar");
	// Assign 0 to min_idx
	var min_idx = 0;
	for (var i = 0; i < bars.length; i += 1) {

		// Assign i to min_idx
		min_idx = i;

		// Provide darkblue color to the ith bar
		bars[i].style.backgroundColor = "darkblue";
		for (var j = i + 1; j < bars.length; j += 1) {

		// Provide red color to the jth bar
		bars[j].style.backgroundColor = "red";
			
		// To pause the execution of code for 0.0000001 milliseconds
		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, 0.0000001)
		);

		// To store the integer value of jth bar to var1
		var val1 = parseInt(bars[j].childNodes[0].innerHTML);

		// To store the integer value of (min_idx)th bar to var2
		var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
			
		// Compare val1 & val2
		if (val1 < val2) {
			if (min_idx !== i) {

			// Provide skyblue color to the (min-idx)th bar
			bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
			}
			min_idx = j;
		} 
			else {

			// Provide skyblue color to the jth bar
			bars[j].style.backgroundColor = " rgb(24, 190, 255)";
		}
		}
		if (min_idx != i) {
		
		 //To swap ith and (min_idx)th bar
		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;
		}
		
		// To pause the execution of code for 0.0000001 milliseconds
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, 0.0000001)
		);

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

		// Provide lightgreen color to the ith bar
		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}

	// To enable the button "Generate New Array" after final(sorted)
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";

	// To enable the button "Selection Sort" after final(sorted)
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2").style.backgroundColor = "#6f459e";
	}

// Asynchronous function to perform "Bubble Sort"
async function BubbleSort(delay = 0.0000001) {
    var bars = document.querySelectorAll(".bar");
  
    // BubbleSort Algorithm
    for (var i = 0; i < bars.length; i += 1) {
        for (var j = 0; j < bars.length - i - 1; j += 1) {
  
            // To change background-color of the
            // blocks to be compared
            bars[j].style.backgroundColor = "#FF4949";
            bars[j + 1].style.backgroundColor = "#FF4949";
  
            // To wait for 0.0000001 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 0.0000001)
            );
  
            var value1 = Number(bars[j].childNodes[0].innerHTML);
            var value2 = Number(bars[j + 1]
                        .childNodes[0].innerHTML);
  
            // To compare value of two blocks
            if (value1 > value2) {
                await swap(bars[j], bars[j + 1]);
                bars = document.querySelectorAll(".bar");
            }
  
            // Changing the color to the previous one
            bars[j].style.backgroundColor = "#6b5b95";
            bars[j + 1].style.backgroundColor = "#6b5b95";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        bars[bars.length - i - 1]
                .style.backgroundColor = "#13CE66";
				
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
    }
}


// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 0.1) {
let bars = document.querySelectorAll(".bar");

// Provide lightgreen colour to 0th bar
bars[0].style.backgroundColor = " rgb(49, 226, 13)";
for (var i = 1; i < bars.length; i += 1) {

	// Assign i-1 to j
	var j = i - 1;

	// To store the integer value of ith bar to key
	var key = parseInt(bars[i].childNodes[0].innerHTML);

	// To store the ith bar height to height
	var height = bars[i].style.height;
	
	var barval=document.getElementById("ele")
      barval.innerHTML=`<h3>Element Selected is :${key}</h3>`;

	//Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	
	// To pause the execution of code for 0.1 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
	resolve();
	}, 0.1)
);

	// For placing selected element at its correct position
	while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
		
	// Provide darkblue color to the jth bar
	bars[j].style.backgroundColor = "darkblue";
		
	// For placing jth element over (j+1)th element
	bars[j + 1].style.height = bars[j].style.height;
	bars[j + 1].childNodes[0].innerText =
	bars[j].childNodes[0].innerText;

	// Assign j-1 to j
	j = j - 1;

	// To pause the execution of code for 0.0000001 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 0.01)
	);
		
	// Provide lightgreen color to the sorted part
	for(var k=i;k>=0;k--){
		bars[k].style.backgroundColor = " rgb(49, 226, 13)";
	}
	}

	// Placing the selected element to its correct position
	bars[j + 1].style.height = height;
	bars[j + 1].childNodes[0].innerHTML = key;
	
	// To pause the execution of code for 0.1 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 0.1)
	);
	
	// Provide light green color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	barval.innerHTML="<h3>Sorted!!!</h3>";
	
	document.getElementById("Button4").disabled = false;
	document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
}
}

	// Call "generatebars" function
	generatebars();

	// function to generate new random array
	function generate()
	{
	window.location.reload();
	}
	

	// function to disable the button
	function disable()
	{
	// To disable the button "Generate New Array"
	//document.getElementById("Button1").disabled = true;
	//document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

	// To disable the button "Selection Sort"
	document.getElementById("Button2").disabled = true;
	document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
	
	// To disable the button "Bubble Sort"
	document.getElementById("Button3").disabled = true;
	document.getElementById("Button3").style.backgroundColor = "#d8b6ff";
	
	// To disable the button "Insertion Sort"
	document.getElementById("Button4").disabled = true;
	document.getElementById("Button4").style.backgroundColor = "#d8b6ff";
	
	}
