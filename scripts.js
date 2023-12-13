let bio_content =  ['<div class="page"><iframe src="https://docs.google.com/document/d/e/2PACX-1vR53hA-3bn2c4Xmn2nuEUyUJB6JxcQ_cAcmEUvXrTcY09BPHqPW6ap0ewrSaIhYJg-o-b9M7oQ4fsOw/pub?embedded=true"></iframe><div class="description"<h3 class="page-heading">Science - Concepts</h3><p class="page-text">In this piece I have collected peer reviewed and well supported documentation regarding the warming of the earth due to man-made climate change.</p></div> </div>',
                    '<div class="page"><iframe src="https://docs.google.com/document/d/e/2PACX-1vSXhRVmI1EvWLNuPhEBZ1yF8z5wlvSZkIrMc0rE9NYoEFgL_YO8SZVhVqrgQ8yQWv8p-A3bXGc1y7YY/pub?embedded=true"></iframe><div class="description"><h3 class="page-heading">Science - Skills</h3><p class="page-text">In this piece I have described and linked two forms of multimedia that describe a scientific experience unique to myself. I am a nuclear reactor operator by trade and these simulators/games display some of the basics of the operation of a PWR (Pressurized Water Reactor)</p></div> </div>',
                    '<div class="page"><iframe src="https://docs.google.com/document/d/e/2PACX-1vQ1rcKDhslyOdRROGm32WW8PAsKvzBQ9W8JcQP2Le5K82kgMTuG_2JeNM2lFylzJv5_PsfXSp_uSyQX/pub?embedded=true"></iframe><div class="description"><h3 class="page-heading">Science - Connections</h3><p class="page-text">In this piece I have detailed a `bucket list` that explores some things, science related, that I would like to do in my lifetime. The paper explores not just biological adventures but ones exploring other avenues of science and the human experience.</p></div> </div>',
                    '<div class="page"><iframe src="https://docs.google.com/document/d/e/2PACX-1vQFZOyHS5jhwYqJ369CxYNQk6MCejOUTqbvvVJj49jhwvXIkRAildwpqhckkIYWPcjmIm6HcbAMND0I/pub?embedded=true"></iframe><div class="description"><h3 class="page-heading">Biology - Concepts</h3><p class="page-text">In this piece I have created a food web using a sketchbook and pen. It displays a proposed food web for a sample of energy dense pond water.</p></div> </div>',
                    '<div class="page"><iframe src="https://docs.google.com/document/d/e/2PACX-1vSLvO6Y71DZvnhMv7zi1GVu4FKsBGAiZqJvbyniN35mRwFAAVzewCMjfWaoXSdKqoiWyOzoQSGZznC3/pub?embedded=true"></iframe><div class="description"><h3 class="page-heading">Biology - Skills</h3><p class="page-text">In this piece I have sketched a rose gall, a sort of scar tissue covered parasite on a rose. The sketch shows both the `hairy` exterior as well as the interior of the gall.</p></div> </div>',
                    '<div class="page"><iframe src="https://docs.google.com/document/d/e/2PACX-1vQZ_aeGr204vnMDClpHgYTctaRa_QM4XoSgTnRYV2G95ytYHJu0R2PnQQ9Le24jHjBOt3boC9HRJxJG/pub?embedded=true"></iframe><div class="description"><h3 class="page-heading">Biology - Connections</h3><p class="page-text">In this piece I detailed a plan for the method by which I would care for a population of Chesapeake Bay blue crabs. the plan details potential persistent threats, hazards, resource challenges, and plans for managing long term care.</p></div> </div>',
                    '<div class="page"> <iframe src="https://docs.google.com/document/d/e/2PACX-1vTZ5o7DCQo2gGUKWflflADL5jwdelcsfT1QiEhVwBbiBlfE5-TSj_Q_vjYpQ8Bq4_ASeoH4jSi9SwO2/pub?embedded=true"></iframe><div class="description"><h3 class="page-heading">Environmental Biology - Concepts</h3><p class="page-text">In this piece I have described the process by which I would monitor and maintain a habitat of maryland blue crabs in an area near where I grew up. The paper describes the short and long term changes the habitat may go through and how recent policy changes in MD may affect its long term health.</p></div></div>',
                    '<div class="page"><iframe src="https://docs.google.com/document/d/e/2PACX-1vTNAB5ihN1SE1KK6VcnFbgqzdZKhFZwsUtfK8iHOHNdlzGeHtETDPp4fTbYhyxckx7EQF_CkIRgZ-Hx/pub?embedded=true"></iframe><div class="description"><h3 class="page-heading">Environmental Biology - Skills</h3><p class="page-text">In this piece I have performed a simple population quadrat. This process would be used for extrapolating the population density of a community.</p></div> </div>',
                    '<div class="page"><iframe src="https://docs.google.com/document/d/e/2PACX-1vR444IhFtEkhQvtT_fKjU_2IcrKjN3PtqR6BVdmay33YPG4h7f6AtJIzbA7D3VFlYxQfBnxTk5Rp4ni/pub?embedded=true"></iframe><div class="description"><h3 class="page-heading">Environmental Biology - Connections</h3><p class="page-text">In this piece I took several photos of a collection of spruce trees outside of my home in upstate New York. The trees are a visual staple of the household and we often decorate them for christmas.</p></div> </div>'];

const Sci_Concepts = document.getElementById("Sci-Concept")
const Sci_Skills = document.getElementById("Sci-Ski")
const Sci_Conns = document.getElementById("Sci-Conns")
const Bio_Concepts = document.getElementById("Bio-Concept")
const Bio_Skills = document.getElementById("Bio-Skills")
const Bio_Conns = document.getElementById("Bio-Conns")
const EnBio_Concepts = document.getElementById("EnBio-Concept")
const EnBio_Skills = document.getElementById("EnBio-Skills")
const EnBio_Conns = document.getElementById("EnBio-Conns")

let page_content = document.querySelector(".page")

Sci_Concepts.addEventListener("click", () => {
    page_content.innerHTML = bio_content[0];
    console.log("it works!")
})

Sci_Skills.addEventListener("click", () => {
    page_content.innerHTML = bio_content[1];
})

Sci_Conns.addEventListener("click", () => {
    page_content.innerHTML = bio_content[2];
})

Bio_Concepts.addEventListener("click", () => {
    page_content.innerHTML = bio_content[3];
})

Bio_Skills.addEventListener("click", () => {
    page_content.innerHTML = bio_content[4];
})

Bio_Conns.addEventListener("click", () => {
    page_content.innerHTML = bio_content[5];
})

EnBio_Concepts.addEventListener("click", () => {
    page_content.innerHTML = bio_content[6];
})

EnBio_Skills.addEventListener("click", () => {
    page_content.innerHTML = bio_content[7];
})

EnBio_Conns.addEventListener("click", () => {
    page_content.innerHTML = bio_content[8];
})
