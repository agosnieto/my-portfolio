const books =[{id:1, name: "In Search of Lost Time", price: 3500, image:"img/in_search_of_lost_time.jpg"},
{
    id:2, name: "Ulysses", price: 5000, image:"img/ulysses.jpg"
},{
    id:3, name: " Don Quixote", price: 2700, image:"img/don_quixote.jpg"
},{
    id:4, name: "One Hundred Years of Solitude", price: 4000, image:"img/one_hundred_years_of_solitude.jpg"
},{
    id:5, name: "The Great Gatsby ", price: 3200, image:"img/the_great_gatsby.jpg"
},{
    id:6, name: "Moby Dick", price: 1200, image:"img/moby_dick.jpg"
},{
    id:7, name: "War and Peace", price: 5400, image:"img/war_and_peace.jpg"
},{
    id:8, name: "Hamlet", price: 1700,image:"img/hamlet.jpg"
}]

for (const book of books){
    $('.fatherCard').append(`<div class="card">
    <h2>${book.name}</h2>
    <img src= ${book.image}>
    <h3> Price: $${book.price} </h3>
    <h4> Code:${book.id} </h4>
    <button class= "buy" target="_blank"> COMPRAR </button></div>`)
};

$('.buy').on('click',()=>{
    window.open("buy.html", "Compra",)
});
$('#music').on('click',()=>{
    window.open("music.html","Música")
});
$('#novels').on('click',()=>(
    window.open("novels.html","Novelas")
));