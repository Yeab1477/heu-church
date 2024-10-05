// // Example script if you want to add custom behavior
// document.querySelectorAll('.dropdown-toggle').forEach(item => {
//     item.addEventListener('click', function() {
//         const dropdownMenu = this.nextElementSibling;
//         dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
//     });
// });
// document.getElementById('missionLetter').addEventListener('click', function() {
//     var paragraph = document.getElementById('paragraph');
//     if (paragraph.style.display === 'none' || paragraph.style.display === '') {
//         paragraph.style.display = 'block';
//     } else {
//         paragraph.style.display = 'none';
//     }
// });


document.querySelector('.mission-btn').addEventListener('click', function() {
    showContent('mission');
});
document.querySelector('.vision-btn').addEventListener('click', function() {
    showContent('vision');
});
document.querySelector('.belief-btn').addEventListener('click', function() {
    showContent('belief');
});
                // paragraph yemilw sectror all malet nw esun html lay hulum paragraph kehone hulum yidebekal but mission 
                // yeilewn para1 adrgewalw esu show ydrg ena lelochu dmo hide

function showContent(id) {
    // Hide all paragraphs
    document.querySelectorAll('.paragraph').forEach(function(el) {
        el.style.display = 'none';
    });
    // Show the selected paragraph
    document.getElementById(id).style.display = 'block';
}

// vedio btn

// yihe dmo befit about lay yenebre ahun dmo sermons lay yesafke sectin nw




