var contents = [{title:"Context", content: `Establish the time and place of a source’s origin.<li> When was this source created?</li><li> What historical events or specific circumstances relate to this source?</li><li> How does this source connect to other times and places outside its immediate origin?<li>`},
{title:"Audience", content: `Establish the intended audience of a source. <li>Establish the point of view, or perspective, of the source.</li>
<li>What person or group did the author/creator wish would view this item?</li>
<li>How is the intended audience reflected in the source (consider elements like place of publication)?</li>
<li>What is known about the author/creator of the source?</li>
<li>How might the author/creator’s job, gender, education, family, religion, location, political beliefs, ethnicity, or other characteristics have influenced the content in the source?</li>
<li>How does the source reflect who the author/creator was and what they thought?</li>`},
{title:"Purpose", content: `Establish the purpose for creating the source.
<li>What did the author/creator hope to accomplish?</li>
<li>Did the authors/creators seek to influence, teach, persuade, entertain, regulate, inform, record, fulfill a duty, describe, promote themself, or some combination of these?</li>
<li>How does the source reflect this purpose?</li>`},
{title:"Evidence", content: `Establish evidence to support your thesis.
<li>Does the source support or not support the statement?</li>
<li>Are there short, direct quotes from the source that support your argument?</li>
<li>Cross-referencing: Do the other sources support the source to make it stronger?</li>`},
{title: "Reliability", content:`Establish the value of the source.
<li>What is the author/creator trying to achieve by writing these things to this audience at this time?</li>
<li>What is the tone of the source? If the author/creator is speaking to a particular audience, at a certain time, with a specific intention in mind, why do they make these language choices?</li>
<li>What is the background of the author/creator, and how does that add value or credibility to the source?</li>`}]


var sliderOne = document.getElementById("drag_1");

var pointer = document.getElementById("pointer");
console.log(sliderOne.offsetLeft);
pointer.style.left = (sliderOne.offsetLeft - 10) + "px";
pointer.style.top = (sliderOne.offsetTop - 1) + "px";
var title = document.getElementById("title");
var content = document.getElementById("content");
title.innerHTML = contents[0].title;
content.innerHTML = contents[0].content;

var sliders = document.getElementsByClassName("roller");

	for(var i = 0; i<sliders.length; i++) {
		sliders[i].addEventListener("click", function(evt) {
			var id = parseInt(evt.target.id.split("_")[1]);
			var top = evt.target.offsetTop;
			var left = evt.target.offsetLeft;
			pointer.style.left = (left - 10) + "px";
 			pointer.style.top = (top - 1) + "px";
 			title.innerHTML = contents[id-1].title;
 			content.innerHTML = contents[id-1].content;
		});
}





