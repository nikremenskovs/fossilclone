console.log('commit');
var mainHeader = document.querySelector(".main-header");
var womens = document.querySelector(".womens");
var mens = document.querySelector(".mens");
var watches = document.querySelector(".watches");
var smartwatches = document.querySelector(".smartwatches");
var bags = document.querySelector(".bags");
var wallets = document.querySelector(".wallets");
var jewelry = document.querySelector(".jewelry");
var sale = document.querySelector(".sale");
var featured = document.querySelector(".featured");
var womensPop = document.querySelector(".womens-pop");
var mensPop = document.querySelector(".mens-pop");
var watchesPop = document.querySelector(".watches-pop");
var smartwatchesPop = document.querySelector(".smartwatches-pop");
var bagsPop = document.querySelector(".bags-pop");
var walletsPop = document.querySelector(".wallets-pop");
var jewelryPop = document.querySelector(".jewelry-pop");
var salePop = document.querySelector(".sale-pop");
var featuredPop = document.querySelector(".featured-pop");


womens.addEventListener("mouseover", function() {
    womensPop.style.display = 'flex';
    mensPop.style.display = 'none';
    watchesPop.style.display = 'none';
    smartwatchesPop.style.display = 'none';
    bagsPop.style.display = 'none';
    walletsPop.style.display = 'none';
    jewelryPop.style.display = 'none';
    salePop.style.display = 'none';
    featuredPop.style.display = 'none';
    
});

womensPop.addEventListener("mouseleave", function() {
    womensPop.style.display = 'none';
})

mens.addEventListener("mouseover", function() {
    mensPop.style.display = 'flex';
    womensPop.style.display = 'none';
    watchesPop.style.display = 'none';
    smartwatchesPop.style.display = 'none';
    bagsPop.style.display = 'none';
    walletsPop.style.display = 'none';
    jewelryPop.style.display = 'none';
    salePop.style.display = 'none';
    featuredPop.style.display = 'none';
});

mensPop.addEventListener("mouseleave", function() {
    mensPop.style.display = 'none';
})

watches.addEventListener("mouseover", function() {
    watchesPop.style.display = 'flex';
    womensPop.style.display = 'none';
    mensPop.style.display = 'none';
    smartwatchesPop.style.display = 'none';
    bagsPop.style.display = 'none';
    walletsPop.style.display = 'none';
    jewelryPop.style.display = 'none';
    salePop.style.display = 'none';
    featuredPop.style.display = 'none';
});

watchesPop.addEventListener("mouseleave", function() {
    watchesPop.style.display = 'none';
})

smartwatches.addEventListener("mouseover", function() {
    smartwatchesPop.style.display = 'flex';
    womensPop.style.display = 'none';
    mensPop.style.display = 'none';
    watchesPop.style.display = 'none';
    bagsPop.style.display = 'none';
    walletsPop.style.display = 'none';
    jewelryPop.style.display = 'none';
    salePop.style.display = 'none';
    featuredPop.style.display = 'none';
});

smartwatchesPop.addEventListener("mouseleave", function() {
    smartwatchesPop.style.display = 'none';
})

bags.addEventListener("mouseover", function() {
    bagsPop.style.display = 'flex';
    womensPop.style.display = 'none';
    mensPop.style.display = 'none';
    watchesPop.style.display = 'none';
    smartwatchesPop.style.display = 'none';
    walletsPop.style.display = 'none';
    jewelryPop.style.display = 'none';
    salePop.style.display = 'none';
    featuredPop.style.display = 'none';
});

bagsPop.addEventListener("mouseleave", function() {
    bagsPop.style.display = 'none';
})

wallets.addEventListener("mouseover", function() {
    walletsPop.style.display = 'flex';
    womensPop.style.display = 'none';
    mensPop.style.display = 'none';
    watchesPop.style.display = 'none';
    smartwatchesPop.style.display = 'none';
    bagsPop.style.display = 'none';
    jewelryPop.style.display = 'none';
    salePop.style.display = 'none';
    featuredPop.style.display = 'none';
});

walletsPop.addEventListener("mouseleave", function() {
    walletsPop.style.display = 'none';
})

jewelry.addEventListener("mouseover", function() {
    jewelryPop.style.display = 'flex';
    womensPop.style.display = 'none';
    mensPop.style.display = 'none';
    watchesPop.style.display = 'none';
    smartwatchesPop.style.display = 'none';
    bagsPop.style.display = 'none';
    walletsPop.style.display = 'none';
    salePop.style.display = 'none';
    featuredPop.style.display = 'none';
});

jewelryPop.addEventListener("mouseleave", function() {
    jewelryPop.style.display = 'none';
})

sale.addEventListener("mouseover", function() {
    salePop.style.display = 'flex';
    womensPop.style.display = 'none';
    mensPop.style.display = 'none';
    watchesPop.style.display = 'none';
    smartwatchesPop.style.display = 'none';
    bagsPop.style.display = 'none';
    walletsPop.style.display = 'none';
    jewelryPop.style.display = 'none';
    featuredPop.style.display = 'none';
});

salePop.addEventListener("mouseleave", function() {
    salePop.style.display = 'none';
})

featured.addEventListener("mouseover", function() {
    featuredPop.style.display = 'flex';
    womensPop.style.display = 'none';
    mensPop.style.display = 'none';
    watchesPop.style.display = 'none';
    smartwatchesPop.style.display = 'none';
    bagsPop.style.display = 'none';
    walletsPop.style.display = 'none';
    jewelryPop.style.display = 'none';
    salePop.style.display = 'none';
});

featuredPop.addEventListener("mouseleave", function() {
    featuredPop.style.display = 'none';
})