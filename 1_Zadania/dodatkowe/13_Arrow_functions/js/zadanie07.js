const App = function () {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function () {

}


let app = new App();
app.generateLinks();
console.log(app.links)

const App = function () {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
};


App.prototype.generateLinks = function () {
  this.links = this.websites.map(website => `https://${website}.pl`)
};


let app = new App();
app.generateLinks();
console.log(app.links);
$('.menu ul li a').each(function (index, element) {
  $(element).attr('href', app.links[index]);
});