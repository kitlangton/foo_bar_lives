// Your Code Here!

var addItem = function(name){
  if(!name) {
    return;
  }
  var newItem = $('<div>');
  newItem.addClass('item');
  var deleteBtn = $('<span>');
  deleteBtn.text(' Delete');
  deleteBtn.addClass(' delete');
  newItem.text(name);
  newItem.append(deleteBtn);
  deleteBtn.click(function() {
    newItem.fadeOut();
  })
  $('#list').append(newItem);
}

$(document).ready(function(){
  $('#new-item').submit(function(e){
    var name = $('#item-name').val();
    $('#item-name').val("");
    addItem(name);
    e.preventDefault();
  })
});
